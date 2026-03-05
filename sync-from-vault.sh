#!/bin/bash
# Sync blog posts from Obsidian vault to blog repository
# Source: ~/notes/Writing/Blog/Published/
# Runs via LaunchAgent (com.terry.blog-sync) every 5 minutes

set -e

VAULT_BLOG_DIR="/Users/terry/notes/Writing/Blog/Published"
BLOG_PATH="/Users/terry/code/blog"
BLOG_CONTENT_DIR="$BLOG_PATH/src/content/blog"

# Sync files from vault to blog content dir
rsync -a --delete \
  "$VAULT_BLOG_DIR/" \
  "$BLOG_CONTENT_DIR/" \
  --exclude=".DS_Store" \
  --exclude="*.swp"

# Convert [[wiki links]] to standard markdown
find "$BLOG_CONTENT_DIR" -name "*.md" -type f | while read -r file; do
  sed -i '' 's/\[\[\([^]|]*\)\]\]/[\1](\1)/g' "$file"
  sed -i '' 's/\[\[\([^]|]*\)|\([^]]*\)\]\]/[\2](\1)/g' "$file"
done

# Commit and push if anything changed
cd "$BLOG_PATH"
if ! git diff --quiet "$BLOG_CONTENT_DIR" || git ls-files --others --exclude-standard "$BLOG_CONTENT_DIR" | grep -q .; then
  git add "$BLOG_CONTENT_DIR"
  TIMESTAMP=$(date +"%Y-%m-%d %H:%M")
  git commit -m "Sync from vault — $TIMESTAMP"
  git push origin main
  echo "[$TIMESTAMP] Synced and pushed"
else
  echo "[$(date +"%Y-%m-%d %H:%M")] No changes"
fi