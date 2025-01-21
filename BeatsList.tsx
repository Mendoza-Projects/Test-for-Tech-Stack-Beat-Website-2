// Import the BeatPlayer component
import BeatPlayer from '@/app/BeatPlayer';

const BeatsList = () => {
  // Sample random beat data
  const beats = [
    {
      videoId: '1X2c3V4b5T',  // Random video ID
      name: 'Random Beat 1',
      price: 10,
      bpm: 120,
      description: 'A random beat to test.',
    },
    {
      videoId: '2Y3b4G6d7H',  // Random video ID
      name: 'Random Beat 2',
      price: 15,
      bpm: 130,
      description: 'Another random beat for testing.',
    },
    {
      videoId: '3Z4c5J6k8P',  // Random video ID
      name: 'Random Beat 3',
      price: 20,
      bpm: 140,
      description: 'A cool random beat.',
    },
    // Add more beats as needed
  ];

  return (
    <div className="beats-list">
      {beats.map((beat) => (
        <div key={beat.videoId} className="beat-card">
          <h3 className="text-xl font-semibold">{beat.name}</h3>
          <p>{beat.description}</p>
          <p>Price: ${beat.price}</p>
          <p>BPM: {beat.bpm}</p>
          {/* Embed BeatPlayer for each beat */}
          <BeatPlayer
            videoId={beat.videoId}
            name={beat.name}
            price={beat.price}
            bpm={beat.bpm}
            description={beat.description}
          />
        </div>
      ))}
    </div>
  );
};

export default BeatsList;
