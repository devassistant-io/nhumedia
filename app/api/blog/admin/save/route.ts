import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  content: string;
}

export async function POST(request: Request) {
  try {
    const { post, isNew } = await request.json() as { post: BlogPost; isNew: boolean };
    
    // Validate required fields
    if (!post.slug || !post.title || !post.content) {
      return NextResponse.json({ success: false, error: 'Missing required fields' }, { status: 400 });
    }

    // Create frontmatter
    const frontmatter = `---
title: '${post.title.replace(/'/g, "''")}'
excerpt: '${post.excerpt.replace(/'/g, "''")}'
author: '${post.author}'
date: '${post.date}'
category: '${post.category}'
image: '${post.image}'
---

${post.content}`;

    // Write to file
    const postsDirectory = path.join(process.cwd(), 'content/blog');
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(postsDirectory)) {
      fs.mkdirSync(postsDirectory, { recursive: true });
    }

    const filePath = path.join(postsDirectory, `${post.slug}.mdx`);
    
    // Check if file exists when creating new post
    if (isNew && fs.existsSync(filePath)) {
      return NextResponse.json({ success: false, error: 'Post with this slug already exists' }, { status: 400 });
    }

    fs.writeFileSync(filePath, frontmatter, 'utf8');

    return NextResponse.json({ success: true, message: 'Post saved successfully' });
  } catch (error) {
    console.error('Error saving post:', error);
    return NextResponse.json({ success: false, error: 'Failed to save post' }, { status: 500 });
  }
}

