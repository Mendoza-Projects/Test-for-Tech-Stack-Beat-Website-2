// src/components/BeatPlayer.tsx

'use client';

interface BeatPlayerProps {
  videoId: string;
  name: string;
  price: string;
  bpm: string;
  description: string;
  isLoading: boolean;
}

const BeatPlayer: React.FC<BeatPlayerProps> = ({ videoId, name, price, bpm, description, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="beat-player">
      <div className="beat-video">
        {/* Example of embedding a video, you can adjust based on your actual implementation */}
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={name}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="beat-details">
        <h3>{name}</h3>
        <p>{description}</p>
        <p>Price: {price}</p>
        <p>BPM: {bpm}</p>
      </div>
    </div>
  );
};

export default BeatPlayer;
