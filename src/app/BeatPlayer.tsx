interface BeatPlayerProps {
  videoId: string;
  name: string;
  price: string;
  bpm: number;
  description: string;
  isLoading: boolean;
}

const BeatPlayer: React.FC<BeatPlayerProps> = ({
  videoId,
  name,
  price,
  bpm,
  description,
  isLoading,
}) => {
  return (
    <div>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        width="560"
        height="315"
        frameBorder="0"
        allowFullScreen
      ></iframe>
      {isLoading && <p>Loading...</p>}
      <h3>{name}</h3>
      <p>{price}</p>
      <p>BPM: {bpm}</p>
      <p>{description}</p>
    </div>
  );
};

export default BeatPlayer;
