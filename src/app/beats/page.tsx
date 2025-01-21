'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import BeatPlayer from '../BeatPlayer'; // Adjust the path if needed

const BeatsPage = () => {
  const [loading, setLoading] = useState(true);

  const beats = [
    { id: 1, name: 'RNB Beat 1', videoId: 'pZkoV5UnPvw' },
    { id: 2, name: 'Hip Hop Beat 2', videoId: '4KVI8QbJfb0' },
    { id: 3, name: 'Trap Beat 3', videoId: '9XdfXYwkTJc' },
    { id: 4, name: 'Trap Beat 4', videoId: 'F0Fi_eLRS8o' },
    // Add more beats as needed
  ];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulates a network delay (adjust as needed)
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <nav className="flex justify-between items-center">
          <div className="text-xl font-bold">321 MAFIA</div>
          <div className="space-x-4">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/beats" className="hover:text-gray-400">Beats</Link>
            <Link href="#contact" className="hover:text-gray-400">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Beats Section */}
      <section id="beats" className="p-8">
        <h2 className="text-2xl font-bold mb-4">Featured Beats</h2>

        {loading ? (
          <div className="grid grid-cols-3 gap-4">
            {/* Loading Effect */}
            <div className="loading"></div>
            <div className="loading"></div>
            <div className="loading"></div>
          </div>
        ) : (
          <div className="grid grid-cols-3 gap-4">
            {beats.map((beat) => (
              <div key={beat.id} className="p-4 border rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold">{beat.name}</h3>
                {/* Embed BeatPlayer for each beat */}
                <BeatPlayer videoId={beat.videoId} />
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="text-center">
          <p>© 2025 321 MAFIA Beats. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default BeatsPage;