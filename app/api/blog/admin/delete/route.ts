import { NextResponse } from 'next/server';
import { Octokit } from 'octokit';

export async function POST(request: Request) {
  try {
    const { slug } = await request.json();
    
    if (!slug) {
      return NextResponse.json({ success: false, error: 'Slug is required' }, { status: 400 });
    }

    // Initialize GitHub client
    const octokit = new Octokit({
      auth: process.env.GITHUB_TOKEN
    });

    const owner = 'devassistant-io';
    const repo = 'nhumedia';
    const path = `content/blog/${slug}.mdx`;
    const branch = 'main';

    // Get file SHA
    const { data } = await octokit.rest.repos.getContent({
      owner,
      repo,
      path,
      ref: branch,
    });

    if (!('sha' in data)) {
      return NextResponse.json({ success: false, error: 'Post not found' }, { status: 404 });
    }

    // Delete file on GitHub
    await octokit.rest.repos.deleteFile({
      owner,
      repo,
      path,
      message: `Delete blog post: ${slug}`,
      sha: data.sha,
      branch,
    });

    return NextResponse.json({ success: true, message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to delete post' 
    }, { status: 500 });
  }
}

