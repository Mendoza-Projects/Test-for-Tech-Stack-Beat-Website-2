interface BeatPlayerProps {
  videoId: string;
  name?: string;  // Make these optional
  price?: number;
  bpm?: number;
  description?: string;
  isLoading?: boolean;
}

const BeatPlayer = ({ videoId, name, price, bpm, description, isLoading }: BeatPlayerProps) => {
  return (
    <div className="beat-player">
      {/* Render the video player with other optional info */}
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      {name && <h3>{name}</h3>}
      {description && <p>{description}</p>}
      {price && <p>Price: ${price}</p>}
      {bpm && <p>BPM: {bpm}</p>}
    </div>
  );
};

export default BeatPlayer;
