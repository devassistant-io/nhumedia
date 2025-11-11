import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  // Check if directory exists
  try {
    if (!fs.existsSync(postsDirectory)) {
      console.log('Blog directory does not exist:', postsDirectory);
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map((fileName) => {
      // Remove ".mdx" or ".md" from file name to get slug
      const slug = fileName.replace(/\.(mdx|md)$/, '');

      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Combine the data with the slug
      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        author: data.author,
        date: data.date,
        category: data.category,
        image: data.image,
        content,
      };
    });

  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (new Date(a.date) < new Date(b.date)) {
      return 1;
    } else {
      return -1;
    }
  });
  } catch (error) {
    console.error('Error loading blog posts:', error);
    return [];
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    let fileContents;
    
    // Try .mdx first, then .md
    if (fs.existsSync(fullPath)) {
      fileContents = fs.readFileSync(fullPath, 'utf8');
    } else {
      const mdPath = path.join(postsDirectory, `${slug}.md`);
      if (fs.existsSync(mdPath)) {
        fileContents = fs.readFileSync(mdPath, 'utf8');
      } else {
        return null;
      }
    }

    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      author: data.author,
      date: data.date,
      category: data.category,
      image: data.image,
      content,
    };
  } catch (error) {
    return null;
  }
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = posts.map((post) => post.category);
  return Array.from(new Set(categories));
}

