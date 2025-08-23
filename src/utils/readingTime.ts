export function getReadingTime(content: string): number {
  // Average reading speed: 200-250 words per minute
  // Using 225 as a middle ground
  const wordsPerMinute = 225;
  
  // Remove HTML/Markdown formatting for accurate word count
  const plainText = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // Replace links with just text
    .replace(/[#*_~]/g, '') // Remove markdown formatting characters
    .trim();
  
  const wordCount = plainText.split(/\s+/).filter(word => word.length > 0).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  
  // Minimum 1 minute reading time
  return Math.max(1, readingTime);
}