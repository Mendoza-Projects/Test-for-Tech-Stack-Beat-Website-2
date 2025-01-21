import BeatPlayer from '@/app/BeatPlayer';

const BeatsList = () => {
  // Sample random beat data
  const beats = [
    {
      videoId: 'randomVideoID1',
      name: 'Beat 1',
      price: 10,
      bpm: 120,
      description: 'A random beat 1 for testing.',
    },
    {
      videoId: 'randomVideoID2',
      name: 'Beat 2',
      price: 15,
      bpm: 130,
      description: 'A random beat 2 for testing.',
    },
    {
      videoId: 'randomVideoID3',
      name: 'Beat 3',
      price: 20,
      bpm: 140,
      description: 'A random beat 3 for testing.',
    },
    {
      videoId: 'randomVideoID4',
      name: 'Beat 4',
      price: 25,
      bpm: 150,
      description: 'A random beat 4 for testing.',
    },
    {
      videoId: 'randomVideoID5',
      name: 'Beat 5',
      price: 30,
      bpm: 160,
      description: 'A random beat 5 for testing.',
    },
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
