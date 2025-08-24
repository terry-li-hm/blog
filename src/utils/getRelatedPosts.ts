import { type CollectionEntry } from "astro:content";

export function getRelatedPosts(
  currentPost: CollectionEntry<"blog">, 
  allPosts: CollectionEntry<"blog">[],
  maxPosts = 3
): CollectionEntry<"blog">[] {
  const currentTags = currentPost.data.tags || [];
  
  // Filter out current post and draft posts
  const eligiblePosts = allPosts.filter(
    post => post.id !== currentPost.id && !post.data.draft
  );
  
  // Calculate relevance score based on shared tags
  const postsWithScore = eligiblePosts.map(post => {
    const postTags = post.data.tags || [];
    const sharedTags = currentTags.filter(tag => postTags.includes(tag));
    return {
      post,
      score: sharedTags.length
    };
  });
  
  // Sort by score (descending), then by date (descending)
  postsWithScore.sort((a, b) => {
    if (a.score !== b.score) {
      return b.score - a.score;
    }
    return new Date(b.post.data.pubDatetime).getTime() - new Date(a.post.data.pubDatetime).getTime();
  });
  
  // Return top posts, prioritizing those with shared tags
  return postsWithScore.slice(0, maxPosts).map(item => item.post);
}