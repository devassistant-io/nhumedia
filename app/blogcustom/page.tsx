'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Plus, Edit2, Trash2, Save } from 'lucide-react';
import Link from 'next/link';

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

export default function BlogAdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isNewPost, setIsNewPost] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const categories = ['Digital Marketing', 'Google Ads', 'Social Media', 'Content Marketing', 'PPC', 'SEO'];

  useEffect(() => {
    // Check if already authenticated
    const auth = sessionStorage.getItem('blogAdminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadPosts();
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    fetch('/api/blog/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          sessionStorage.setItem('blogAdminAuth', 'true');
          setIsAuthenticated(true);
          loadPosts();
        } else {
          setMessage('Invalid password');
        }
      })
      .catch(() => setMessage('Authentication failed'));
  };

  const loadPosts = () => {
    fetch('/api/blog')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch(() => setMessage('Failed to load posts'));
  };

  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost) return;

    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/blog/admin/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          post: editingPost,
          isNew: isNewPost,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Post saved successfully! Page will reload...');
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        setMessage('Failed to save post: ' + (data.error || 'Unknown error'));
      }
    } catch (error) {
      setMessage('Error saving post');
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    setLoading(true);
    try {
      const response = await fetch('/api/blog/admin/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Post deleted successfully!');
        loadPosts();
      } else {
        setMessage('Failed to delete post');
      }
    } catch (error) {
      setMessage('Error deleting post');
    } finally {
      setLoading(false);
    }
  };

  const handleNewPost = () => {
    setIsNewPost(true);
    setEditingPost({
      slug: '',
      title: '',
      excerpt: '',
      author: 'Nhu Media Team',
      date: new Date().toISOString(),
      category: 'Digital Marketing',
      image: '',
      content: '',
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold mb-6 text-center">Blog Admin</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                placeholder="Enter admin password"
                required
              />
            </div>
            {message && <p className="text-red-600 text-sm">{message}</p>}
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (editingPost) {
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <button
              onClick={() => {
                setEditingPost(null);
                setIsNewPost(false);
              }}
              className="flex items-center space-x-2 text-primary hover:text-secondary mb-6"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Posts</span>
            </button>

            <h1 className="text-3xl font-bold mb-6">
              {isNewPost ? 'New Post' : 'Edit Post'}
            </h1>

            {message && (
              <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded mb-4">
                {message}
              </div>
            )}

            <form onSubmit={handleSavePost} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Slug (URL)</label>
                <input
                  type="text"
                  value={editingPost.slug}
                  onChange={(e) =>
                    setEditingPost({ ...editingPost, slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-') })
                  }
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="my-blog-post"
                  required
                  disabled={!isNewPost}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Title</label>
                <input
                  type="text"
                  value={editingPost.title}
                  onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Excerpt</label>
                <textarea
                  value={editingPost.excerpt}
                  onChange={(e) => setEditingPost({ ...editingPost, excerpt: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Category</label>
                  <select
                    value={editingPost.category}
                    onChange={(e) => setEditingPost({ ...editingPost, category: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  >
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Author</label>
                  <input
                    type="text"
                    value={editingPost.author}
                    onChange={(e) => setEditingPost({ ...editingPost, author: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Featured Image URL</label>
                <input
                  type="url"
                  value={editingPost.image}
                  onChange={(e) => setEditingPost({ ...editingPost, image: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
                  placeholder="https://images.unsplash.com/..."
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Content (Markdown)
                </label>
                <textarea
                  value={editingPost.content}
                  onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none font-mono text-sm"
                  rows={20}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-secondary transition-colors disabled:opacity-50 flex items-center justify-center space-x-2"
              >
                <Save className="w-5 h-5" />
                <span>{loading ? 'Saving...' : 'Save Post'}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold">Blog Admin</h1>
              <Link href="/" className="text-primary hover:text-secondary text-sm">
                ← Back to Website
              </Link>
            </div>
            <button
              onClick={handleNewPost}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary transition-colors flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>New Post</span>
            </button>
          </div>

          {message && (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
              {message}
            </div>
          )}

          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post.slug}
                className="border-2 border-gray-200 rounded-lg p-4 hover:border-primary transition-colors"
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded">
                        {post.category}
                      </span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <button
                      onClick={() => {
                        setEditingPost(post);
                        setIsNewPost(false);
                      }}
                      className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors"
                    >
                      <Edit2 className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleDeletePost(post.slug)}
                      className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      disabled={loading}
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <p>No blog posts yet. Click "New Post" to create one!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

