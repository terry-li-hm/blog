#!/bin/bash
# Sync blog posts from Obsidian vault to blog repository
# Source: ~/epigenome/chromatin/cytoplasm/Garden/Garden Posts/
# Runs via LaunchAgent (com.vivesca.blog-sync) every 5 minutes

set -e

VAULT_BLOG_DIR="/Users/terry/chromatin/cytoplasm/Garden/Garden Posts"
BLOG_PATH="/Users/terry/code/blog"
BLOG_CONTENT_DIR="$BLOG_PATH/src/content/blog"
SKIPPED_FILE=$(mktemp)

# Stage: copy vault to temp dir for processing
TEMP_DIR=$(mktemp -d)
trap "rm -rf $TEMP_DIR $SKIPPED_FILE" EXIT

rsync -a \
  "$VAULT_BLOG_DIR/" \
  "$TEMP_DIR/" \
  --exclude=".DS_Store" \
  --exclude="*.swp"

# Filter and transform staged files
find "$TEMP_DIR" -name "*.md" -type f | while read -r file; do
  # Skip stubs
  if grep -q "^status: stub" "$file"; then
    rm "$file"
    continue
  fi

  # Transform pubDate: or date: → pubDatetime: YYYY-MM-DDT00:00:00+08:00
  if grep -q "^pubDate:" "$file"; then
    sed -i '' 's/^pubDate: \([0-9-]*\)$/pubDatetime: \1T00:00:00+08:00/' "$file"
  fi
  if grep -q "^date:" "$file" && ! grep -q "^pubDatetime:" "$file"; then
    sed -i '' 's/^date: \([0-9-]*\)$/pubDatetime: \1T00:00:00+08:00/' "$file"
  fi

  # Track posts missing required schema fields
  if ! grep -q "^pubDatetime:" "$file" || ! grep -q "^description:" "$file"; then
    echo "$(basename "$file")" >> "$SKIPPED_FILE"
    echo "[ERROR] $(basename "$file") — missing pubDatetime or description" >&2
    rm "$file"
    continue
  fi

  # Convert [[wiki links]] to standard markdown
  sed -i '' 's/\[\[\([^]|]*\)\]\]/[\1](\1)/g' "$file"
  sed -i '' 's/\[\[\([^]|]*\)|\([^]]*\)\]\]/[\2](\1)/g' "$file"
done

# Sync processed files to blog content dir (--delete removes stale files)
rsync -a --delete "$TEMP_DIR/" "$BLOG_CONTENT_DIR/"

# Regenerate vault garden index (terryli.hm.md)
python3 "$BLOG_PATH/generate-garden-index.py"

# Commit and push if anything changed
cd "$BLOG_PATH"
if ! git diff --quiet || git ls-files --others --exclude-standard src/content/blog package.json | grep -q .; then
  git add src/content/blog package.json
  TIMESTAMP=$(date +"%Y-%m-%d %H:%M")
  git commit -m "Sync from vault — $TIMESTAMP"
  git push origin main
  echo "[$TIMESTAMP] Synced and pushed"
else
  echo "[$(date +"%Y-%m-%d %H:%M")] No changes"
fi

# Fail loudly if any posts were skipped
if [ -s "$SKIPPED_FILE" ]; then
  COUNT=$(wc -l < "$SKIPPED_FILE" | tr -d ' ')
  echo "[FAIL] $COUNT post(s) skipped — fix frontmatter:" >&2
  cat "$SKIPPED_FILE" >&2
  exit 1
fi
