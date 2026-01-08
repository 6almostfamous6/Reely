import '../styles/feed.css';

import React from 'react';
import '../styles/feed.css';
import Timeline from '../components/Timeline';
import CreatePost from '../components/CreatePost';

export default function Home() {
  return (
    <div className="home">
      <div className="feed-container">
        <CreatePost />
        <Timeline />
      </div>
    </div>
  );
}
