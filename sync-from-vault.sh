#!/bin/bash
# Sync blog posts from Obsidian vault to blog repository

set -e  # Exit on error

VAULT_PATH="/Users/terry/ideaverse-zero-2"
BLOG_PATH="/Users/terry/conductor/blog"
VAULT_BLOG_DIR="Efforts/Essays/Published"
BLOG_CONTENT_DIR="src/content/blog"

echo "🔄 Syncing essays from vault..."

# Navigate to blog repository
cd "$BLOG_PATH"

# Ensure we have the latest vault remote
git fetch vault main --quiet

# Use rsync to sync files (preserves timestamps, handles deletions)
rsync -av --delete \
  "$VAULT_PATH/$VAULT_BLOG_DIR/" \
  "$BLOG_PATH/$BLOG_CONTENT_DIR/" \
  --exclude=".DS_Store" \
  --exclude="*.swp"

# Process markdown files to convert wiki-links to standard markdown links
find "$BLOG_PATH/$BLOG_CONTENT_DIR" -name "*.md" -type f | while read -r file; do
  # Convert [[wiki links]] to [wiki links](wiki-links)
  # This preserves the link text and creates a URL-friendly slug
  sed -i '' 's/\[\[\([^]|]*\)\]\]/[\1](\1)/g' "$file"
  
  # Handle aliased links [[link|alias]] -> [alias](link)
  sed -i '' 's/\[\[\([^]|]*\)|\([^]]*\)\]\]/[\2](\1)/g' "$file"
done

# Check if there are changes to commit
if git diff --quiet "$BLOG_CONTENT_DIR"; then
  echo "✅ No changes to sync"
else
  # Show what changed
  echo "📝 Changes detected:"
  git diff --stat "$BLOG_CONTENT_DIR"
  
  # Stage changes
  git add "$BLOG_CONTENT_DIR"
  
  # Commit with timestamp
  TIMESTAMP=$(date +"%Y-%m-%d %H:%M:%S")
  git commit -m "Sync essays from vault - $TIMESTAMP" -m "Synced from $VAULT_PATH/$VAULT_BLOG_DIR"
  
  echo "✨ Essays synced successfully!"
  echo "📌 Remember to push changes to deploy: git push origin main"
fi