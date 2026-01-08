import React, { useState } from 'react';
import '../styles/feed.css';

export default function CreatePost() {
  const [content, setContent] = useState('');

  const submitPost = async () => {
    if (!content.trim()) return;

    await fetch('http://localhost:4000/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer YOUR_JWT_TOKEN'
      },
      body: JSON.stringify({ content })
    });

    setContent('');
  };

  return (
    <div className="create-post">
      <textarea
        placeholder="What are you watching?"
        value={content}
        maxLength={280}
        onChange={e => setContent(e.target.value)}
      />
      <button onClick={submitPost}>Post</button>
    </div>
  );
}

