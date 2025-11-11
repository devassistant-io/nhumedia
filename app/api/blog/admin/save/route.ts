import { NextResponse } from 'next/server';
import { Octokit } from 'octokit';

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

    // Initialize GitHub client
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    const owner = 'devassistant-io';
    const repo = 'nhumedia';
    const path = `content/blog/${post.slug}.mdx`;
    const branch = 'main';

    // Get current file SHA if it exists (for updates)
    let sha: string | undefined;
    if (!isNew) {
      try {
        const { data } = await octokit.rest.repos.getContent({
          owner,
          repo,
          path,
          ref: branch,
        });
        if ('sha' in data) {
          sha = data.sha;
        }
      } catch (error) {
        // File doesn't exist yet
      }
    }

    // Create or update file on GitHub
    await octokit.rest.repos.createOrUpdateFileContents({
      owner,
      repo,
      path,
      message: isNew ? `Add blog post: ${post.title}` : `Update blog post: ${post.title}`,
      content: Buffer.from(frontmatter).toString('base64'),
      branch,
      sha,
    });

    return NextResponse.json({ success: true, message: 'Post saved and published!' });
  } catch (error) {
    console.error('Error saving post:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to save post' 
    }, { status: 500 });
  }
}

