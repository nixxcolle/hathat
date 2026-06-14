import React, { useState, useEffect } from 'react';

const CARDS = [
  'assets/1.png',
  'assets/2.png',
  'assets/3.png',
  'assets/4.png',
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % CARDS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % CARDS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + CARDS.length) % CARDS.length);
  };

  const getCardStyle = (index) => {
    const offset = (index - currentIndex + CARDS.length) % CARDS.length;

    let translateX = 0;
    let translateZ = 0;
    let rotateY = 0;
    let scale = 1;
    let opacity = 1;
    let zIndex = 0;

    if (offset === 0) {
      translateX = 0;
      translateZ = 200;
      rotateY = 0;
      scale = 1.1;
      zIndex = 10;
    } else if (offset === 1 || offset === -CARDS.length + 1) {
      translateX = 350;
      translateZ = -100;
      rotateY = -45;
      scale = 0.8;
      opacity = 0.6;
      zIndex = 5;
    } else if (offset === CARDS.length - 1 || offset === -1) {
      translateX = -350;
      translateZ = -100;
      rotateY = 45;
      scale = 0.8;
      opacity = 0.6;
      zIndex = 5;
    } else {
      translateX = 0;
      translateZ = -400;
      rotateY = 0;
      scale = 0.5;
      opacity = 0;
      zIndex = 0;
    }

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
      backgroundImage: `url(${import.meta.env.BASE_URL}${CARDS[index]})`,
    };
  };

  return (
    <section className="hero" id="hero">
      <div className="carousel-3d-wrapper">
        <div className="carousel-3d-container">
          {CARDS.map((_, i) => (
            <div
              key={i}
              className="carousel-card"
              style={getCardStyle(i)}
            />
          ))}
        </div>
        {/* Navigation Arrows */}
        <button className="nav-btn prev-btn" onClick={handlePrev}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="nav-btn next-btn" onClick={handleNext}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>

      <div className="hero-content">
        <h1>Happy Birthday, My Hearteu</h1>
      </div>
    </section>
  );
}
