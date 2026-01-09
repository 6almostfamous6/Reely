import { useState } from 'react';
import { Timeline } from '../components/Timeline';
import { CreatePost } from '../components/CreatePost';

export default function Home() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="home">
      <CreatePost onNewPost={() => setRefreshKey(k => k + 1)} />
      <Timeline key={refreshKey} />
    </div>
  );
}import Timeline from '../components/Timeline';

export default function Home() {
  return (
    <div>
      <Timeline />
    </div>
  );
}

