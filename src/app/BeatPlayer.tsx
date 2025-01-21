// src/app/BeatPlayer.tsx

import React from 'react';

interface BeatPlayerProps {
  videoId: string;
  name: string;
  price: number;
  bpm: number;
  description: string;
}

const BeatPlayer: React.FC<BeatPlayerProps> = ({ videoId, name, price, bpm, description }) => {
  return (
    <div className="beat-player">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p>{description}</p>
      <div className="video-container">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          width="100%"
          height="315"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
      <div className="details">
        <p>Price: ${price}</p>
        <p>BPM: {bpm}</p>
      </div>
    </div>
  );
};

export default BeatPlayer;
