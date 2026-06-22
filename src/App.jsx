import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import ParticlesBg from './components/ParticlesBg';
import MusicPlayer from './components/MusicPlayer';
import HeroCarousel from './components/HeroCarousel';
import MemoryGallery from './components/MemoryGallery';
import LoveLetter from './components/LoveLetter';
import './App.css';

export default function App() {
  const [isIntroDismissed, setIsIntroDismissed] = useState(false);

  return (
    <>
      {/* Intro Overlay Screen */}
      {!isIntroDismissed && (
        <IntroScreen onDismiss={() => setIsIntroDismissed(true)} />
      )}

      {/* Background Falling Particles */}
      <ParticlesBg />

      {/* Floating Music Player */}
      <MusicPlayer />

      {/* Floating Sunflowers Decor (originally styled but missing from HTML) */}
      <div style={{ position: 'relative', width: '100%' }}>
        <img src={`${import.meta.env.BASE_URL}assets/sunflowers.png`} className="sunflower-deco deco-1" alt="Sunflower Decoration" />
        <img src={`${import.meta.env.BASE_URL}assets/sunflowers.png`} className="sunflower-deco deco-2" alt="Sunflower Decoration" />
        <img src={`${import.meta.env.BASE_URL}assets/sunflowers.png`} className="sunflower-deco deco-3" alt="Sunflower Decoration" />
      </div>

      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Memory Gallery */}
      <MemoryGallery />

      {/* Love Letter */}
      <LoveLetter />

      {/* Footer */}
      <footer>
        <p>Created with Love specifically for You ❤️</p>
      </footer>
    </>
  );
}
