'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BeatPlayer from './BeatPlayer'; // Import the BeatPlayer component

const Home = () => {
  const [loading, setLoading] = useState(true);

  const beats = [
    { id: '4KVI8QbJfb0', name: 'RNB Beat 1', price: '$49.99', bpm: '80bpm', description: 'Lil Durk X Nardo Wick Dark Trap Type Beat' },
    { id: '9XdfXYwkTJc', name: 'Hip Hop Beat 2', price: '$49.99', bpm: '80bpm', description: 'Travis Scott Astro World Type Beat' },
    { id: 'pZkoV5UnPvw', name: 'Trap Beat 3', price: '$49.99', bpm: '100bpm', description: 'Future x Drake Type Beat' },
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulates network delay (adjust as needed)
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <header className="bg-black text-white p-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">321 MAFIA</div>
          <div className="space-x-4">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/beats" className="hover:text-gray-400">Beats</Link>
            <Link href="#contact" className="hover:text-gray-400">Contact</Link>
          </div>
        </nav>
      </header>

      <section id="beats" className="p-8">
        <h2 className="text-2xl font-bold mb-4 text-center text-white">Featured Beats</h2>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Placeholder loading effect */}
            <div className="loading"></div>
            <div className="loading"></div>
            <div className="loading"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {beats.map((beat, index) => {
              console.log(`Rendering beat ${index + 1}:`, beat); // Add console log to debug

              return (
                <div key={beat.id} className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl cursor-pointer">
                  <BeatPlayer
                    videoId={beat.id}
                    name={beat.name}
                    price={beat.price}
                    bpm={beat.bpm}
                    description={beat.description}
                    isLoading={loading} // Pass the loading state for the visual queue
                  />
                  <div className="mt-4 text-center">
                    <p className="text-xl font-semibold text-white">{beat.name}</p>
                    <p className="text-sm text-gray-400">{beat.description}</p>
                    <p className="text-lg font-bold text-white mt-2">{beat.price}</p>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-8 text-center">
          <Link href="/beats">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
              Visit Beat Store
            </button>
          </Link>
        </div>
      </section>

      <footer className="bg-black text-white p-4">
        <div className="text-center">
          <p>© 2025 321 MAFIA Beats. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
