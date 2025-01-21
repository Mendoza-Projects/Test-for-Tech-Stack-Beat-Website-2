'use client';

import React, { useState } from 'react';

interface BeatPlayerProps {
  videoId: string;
  name: string;
  price: string;
  bpm: string;
  description: string;
  isLoading: boolean; // Add isLoading prop for the visual queue
}

const BeatPlayer: React.FC<BeatPlayerProps> = ({ videoId, name, price, bpm, description, isLoading }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const playVideo = () => {
    setIsVideoOpen(true);
  };

  const closeVideo = () => {
    setIsVideoOpen(false);
  };

  // Function to generate high-quality thumbnail URL
  const getThumbnailUrl = (videoId: string) => {
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`; // High-quality thumbnail
  };

  return (
    <div className={`p-4 border rounded-lg shadow-lg ${isLoading ? 'loading-card' : ''}`}>
      {isLoading ? (
        <div className="loading-visual-queue"></div>
      ) : (
        <>
          <img
            className="w-full h-auto rounded-lg cursor-pointer"
            src={getThumbnailUrl(videoId)}
            alt={name}
            onClick={playVideo}
          />
          <div className="text-center mt-2">
            <h3 className="text-xl font-semibold">{name}</h3>
            <p>{price}</p>
            <p>{bpm}</p>
            <p>{description}</p>
          </div>
        </>
      )}

      {/* Video Overlay */}
      {isVideoOpen && (
        <div className="video-overlay">
          <div className="close" onClick={closeVideo}>×</div>
          <iframe 
            width="100%" 
            height="100%" 
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=1`} 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
          />
        </div>
      )}

      <style jsx>{`
        .video-overlay {
          display: block;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(211, 211, 211, 0.03);
          border-radius: 15px;
          padding: 50px;
          width: 90%;
          height: 90%;
          backdrop-filter: blur(30px);
          box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.8);
          z-index: 10;
        }

        .video-overlay iframe {
          width: 100%;
          height: 100%;
        }

        .close {
          color: #fff;
          font-size: 40px;
          position: absolute;
          top: 20px;
          right: 20px;
          cursor: pointer;
          z-index: 15;
        }

        /* Visual Queue styling */
        .loading-card {
          background: rgba(255, 255, 255, 0.1);
        }

        .loading-visual-queue {
          width: 100%;
          height: 150px;
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite linear;
        }

        @keyframes loading {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
      `}</style>
    </div>
  );
};

export default BeatPlayer;
