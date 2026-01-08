import React from 'react';
import '../styles/feed.css';

export default function PostCard({ post }) {
  return (
    <div className="post-card">
      {/* Header */}
      <div className="post-header">
        <img
          className="avatar"
          src={`https://api.dicebear.com/7.x/personas/svg?seed=${post.handle}`}
          alt="avatar"
        />
        <div>
          <div className="handle">@{post.handle}</div>
          <div className="timestamp">
            {new Date(post.created_at).toLocaleString()}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="post-content">
        {post.content}
      </div>

      {/* Actions */}
      <div className="post-actions">
        <button>👍 Like</button>
        <button>💬 Comment</button>
        <button>🎬 Watch</button>
      </div>
    </div>
  );
}

