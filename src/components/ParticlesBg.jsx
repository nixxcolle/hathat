import React, { useEffect, useState } from 'react';

const EMOJIS = ['❤️', '✨', '🌻', '🌸', '☁️', '☀️'];

export default function ParticlesBg() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const id = Math.random().toString(36).substring(2, 9);
      const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
      const left = Math.random() * 100;
      const fontSize = Math.random() * 20 + 10;
      const opacity = Math.random() * 0.5 + 0.3;
      const duration = Math.random() * 10 + 10; // between 10 and 20 seconds
      const startRotation = Math.random() * 360;

      const newParticle = {
        id,
        emoji,
        left: `${left}vw`,
        fontSize: `${fontSize}px`,
        opacity,
        duration: `${duration}s`,
        startRotation,
      };

      setParticles((prev) => [...prev, newParticle]);

      // Clean up particle when duration finishes
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, duration * 1000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="particles-js">
      {particles.map((p) => (
        <div
          key={p.id}
          style={{
            position: 'fixed',
            left: p.left,
            top: '-50px',
            fontSize: p.fontSize,
            opacity: p.opacity,
            zIndex: '-1',
            pointerEvents: 'none',
            transform: `rotate(${p.startRotation}deg)`,
            animation: `fallDown ${p.duration} linear forwards`,
          }}
        >
          {p.emoji}
        </div>
      ))}
      <style>{`
        @keyframes fallDown {
          0% {
            top: -50px;
          }
          100% {
            top: 110vh;
            transform: rotate(720deg);
          }
        }
      `}</style>
    </div>
  );
}
