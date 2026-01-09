import { useState } from 'react';
import { apiFetch } from '../api/client';

export function CreatePost({ onNewPost }: { onNewPost: (p: any) => void }) {
  const [content, setContent] = useState('');

  async function submit() {
    if (!content.trim()) return;

    const post = await apiFetch('/posts', {
      method: 'POST',
      body: JSON.stringify({ content }),
    });

    onNewPost(post);
    setContent('');
  }

  return (
    <div className="create-post">
      <textarea
        value={content}
        onChange={e => setContent(e.target.value)}
        placeholder="What's happening?"
        maxLength={280}
      />
      <button onClick={submit}>Post</button>
    </div>
  );
}

