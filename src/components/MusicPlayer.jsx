import React, { useEffect, useState } from 'react';

const SONG_EMBED_URL = 'https://www.youtube.com/embed/cdW8Zx_QW7s?autoplay=1';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [iframeUrl, setIframeUrl] = useState('about:blank');

  useEffect(() => {
    const startMusic = () => {
      if (iframeUrl === 'about:blank') {
        setIframeUrl(SONG_EMBED_URL);
        setIsPlaying(true);
      }
      // Clean up event listeners so they only run once
      document.removeEventListener('click', startMusic);
      document.removeEventListener('touchstart', startMusic);
      document.removeEventListener('keydown', startMusic);
    };

    document.addEventListener('click', startMusic);
    document.addEventListener('touchstart', startMusic);
    document.addEventListener('keydown', startMusic);

    return () => {
      document.removeEventListener('click', startMusic);
      document.removeEventListener('touchstart', startMusic);
      document.removeEventListener('keydown', startMusic);
    };
  }, [iframeUrl]);

  return (
    <div className={`music-player-card ${isPlaying ? 'playing' : ''}`} id="music-card">
      <div className="music-info">
        <span className="music-icon">
          <i className="fas fa-music"></i>
        </span>
        <div className="music-text">
          <span className="music-title">It Might Be You 🎵</span>
          <span className="music-artist">Stephen Bishop</span>
        </div>
      </div>
      <div className="player-frame-container">
        <iframe
          id="music-iframe"
          src={iframeUrl}
          frameBorder="0"
          allow="autoplay"
          title="Music Background Player"
        ></iframe>
      </div>
    </div>
  );
}
