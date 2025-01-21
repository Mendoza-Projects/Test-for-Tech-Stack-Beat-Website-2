'use client';

import React from 'react';
import BeatPlayer from '@/app/BeatPlayer';

const beats = [
  {
    name: 'Beat 1',
    price: 20,
    bpm: 120, // Ensure bpm is a number
    description: 'A great beat for your next track!',
    videoId: 'video-id-1',
  },
  {
    name: 'Beat 2',
    price: 25,
    bpm: 130, // Ensure bpm is a number
    description: 'This beat will get your head nodding!',
    videoId: 'video-id-2',
  },
  // Add more beats as necessary
];

const BeatsList: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Featured Beats</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {beats.map((beat) => (
          <div key={beat.videoId} className="border p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{beat.name}</h3>
            <p className="text-gray-700 mb-2">{beat.description}</p>
            <p className="text-gray-500">Price: ${beat.price}</p>
            {/* Embed BeatPlayer for each beat */}
            <BeatPlayer 
              videoId={beat.videoId} 
              bpm={beat.bpm} 
              name={beat.name} 
              price={beat.price} 
              description={beat.description} 
              isLoading={false} 
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeatsList;
