#!/bin/bash
# Sync blog posts from Obsidian vault to blog repository
# Source: ~/notes/Writing/Blog/Published/
# Runs via LaunchAgent (com.terry.blog-sync) every 5 minutes

set -e

VAULT_BLOG_DIR="/Users/terry/notes/Writing/Blog/Published"
BLOG_PATH="/Users/terry/code/blog"
BLOG_CONTENT_DIR="$BLOG_PATH/src/content/blog"

# Stage: copy vault to temp dir for processing
TEMP_DIR=$(mktemp -d)
trap "rm -rf $TEMP_DIR" EXIT

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

  # Transform pubDate: YYYY-MM-DD → pubDatetime: YYYY-MM-DDT00:00:00+08:00
  if grep -q "^pubDate:" "$file"; then
    sed -i '' 's/^pubDate: \([0-9-]*\)$/pubDatetime: \1T00:00:00+08:00/' "$file"
  fi

  # Skip if still missing required schema fields
  if ! grep -q "^pubDatetime:" "$file" || ! grep -q "^description:" "$file"; then
    echo "[SKIP] $(basename $file) — missing pubDatetime or description"
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
