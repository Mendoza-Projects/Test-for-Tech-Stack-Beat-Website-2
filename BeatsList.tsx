// src/pages/beats.tsx

'use client';

import BeatPlayer from './BeatPlayer';

const beats = [
  {
    videoId: 'abc123',
    name: 'Smooth Hip-Hop Beat',
    price: '$50',
    bpm: '95',
    description: 'A chill, smooth beat for hip-hop.',
    isLoading: false,
  },
  {
    videoId: 'def456',
    name: 'Upbeat Dance Beat',
    price: '$40',
    bpm: '128',
    description: 'A fast-paced beat for energetic tracks.',
    isLoading: false,
  },
  // More beats can be added here
];

const BeatsList: React.FC = () => {
  return (
    <div className="beats-list">
      {beats.map((beat) => (
        <div key={beat.videoId} className="beat-card">
          <h3 className="text-xl font-semibold">{beat.name}</h3>
          <BeatPlayer
            videoId={beat.videoId}
            name={beat.name}
            price={beat.price}
            bpm={beat.bpm}
            description={beat.description}
            isLoading={beat.isLoading}
          />
        </div>
      ))}
    </div>
  );
};

export default BeatsList;
