import React, { useEffect, useState } from 'react';

export default function IntroScreen({ onDismiss }) {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Add scroll lock when intro is active
    document.body.classList.add('intro-active');
    return () => {
      // Ensure scroll lock is removed on unmount
      document.body.classList.remove('intro-active');
    };
  }, []);

  const handleDismiss = () => {
    if (fadingOut) return;
    setFadingOut(true);
    document.body.classList.remove('intro-active');
    // Notify parent to unmount after transition completes (1s)
    setTimeout(() => {
      onDismiss();
    }, 1000);
  };

  return (
    <div id="intro-screen" className={fadingOut ? 'fade-out' : ''}>
      {/* Confetti & Streamers background decoration */}
      <div className="intro-confetti-bg">
        {/* Confetti 1 */}
        <svg className="confetti confetti-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0 L60 35 L95 35 L65 55 L75 90 L50 70 L25 90 L35 55 L5 35 L40 35 Z" fill="#ffb3c6" />
        </svg>
        {/* Confetti 2 (heart) */}
        <svg className="confetti confetti-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,30 C12,15 35,10 50,30 C65,10 88,15 88,30 C88,60 50,90 50,90 C50,90 12,60 12,30 Z" fill="#ff85a2" />
        </svg>
        {/* Confetti 3 (streamer) */}
        <svg className="streamer streamer-1" viewBox="0 0 50 150" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 0 Q40 30 10 60 T40 120 T25 150" fill="none" stroke="#ffe5ec" strokeWidth="6" strokeLinecap="round" />
        </svg>
        {/* Confetti 4 (streamer) */}
        <svg className="streamer streamer-2" viewBox="0 0 50 150" xmlns="http://www.w3.org/2000/svg">
          <path d="M25 0 Q10 30 40 60 T10 120 T25 150" fill="none" stroke="#ffc2d1" strokeWidth="6" strokeLinecap="round" />
        </svg>
        {/* Confetti 5 */}
        <svg className="confetti confetti-3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="30" fill="#ffe5ec" />
        </svg>
        {/* Confetti 6 */}
        <svg className="confetti confetti-4" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50 0 L60 35 L95 35 L65 55 L75 90 L50 70 L25 90 L35 55 L5 35 L40 35 Z" fill="#ffccd5" />
        </svg>
        {/* Confetti 7 (heart) */}
        <svg className="confetti confetti-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M12,30 C12,15 35,10 50,30 C65,10 88,15 88,30 C88,60 50,90 50,90 C50,90 12,60 12,30 Z" fill="#f72585" opacity="0.6" />
        </svg>
      </div>

      {/* Left Balloon Group (3 balloons with swaying animations) */}
      <div className="balloon-group left-balloons">
        {/* Balloon 1 */}
        <div className="balloon-wrapper balloon-1">
          <svg className="balloon-svg" viewBox="0 0 100 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="balloon-pink-1" cx="35%" cy="35%" r="55%">
                <stop offset="0%" stopColor="#fff0f3" />
                <stop offset="30%" stopColor="#ffb3c6" />
                <stop offset="80%" stopColor="#ff4d6d" />
                <stop offset="100%" stopColor="#c9184a" />
              </radialGradient>
            </defs>
            <ellipse cx="50" cy="70" rx="40" ry="50" fill="url(#balloon-pink-1)" />
            <polygon points="50,118 45,125 55,125" fill="#c9184a" />
            <path d="M50,125 Q55,160 45,190 T50,250" fill="none" stroke="#e0aaff" strokeWidth="2" />
          </svg>
        </div>
        {/* Balloon 2 */}
        <div className="balloon-wrapper balloon-2">
          <svg className="balloon-svg" viewBox="0 0 100 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="balloon-pink-2" cx="35%" cy="35%" r="55%">
                <stop offset="0%" stopColor="#fff0f3" />
                <stop offset="35%" stopColor="#ffc2d1" />
                <stop offset="85%" stopColor="#ff758f" />
                <stop offset="100%" stopColor="#a4133c" />
              </radialGradient>
            </defs>
            <ellipse cx="50" cy="70" rx="36" ry="46" fill="url(#balloon-pink-2)" />
            <polygon points="50,114 46,120 54,120" fill="#a4133c" />
            <path d="M50,120 Q45,160 55,195 T50,250" fill="none" stroke="#e0aaff" strokeWidth="1.8" />
          </svg>
        </div>
        {/* Balloon 3 */}
        <div className="balloon-wrapper balloon-3">
          <svg className="balloon-svg" viewBox="0 0 100 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="balloon-pink-3" cx="35%" cy="35%" r="55%">
                <stop offset="0%" stopColor="#fff5f7" />
                <stop offset="25%" stopColor="#ff85a2" />
                <stop offset="80%" stopColor="#f72585" />
                <stop offset="100%" stopColor="#b5179e" />
              </radialGradient>
            </defs>
            <ellipse cx="50" cy="70" rx="38" ry="48" fill="url(#balloon-pink-3)" />
            <polygon points="50,116 45,122 55,122" fill="#f72585" />
            <path d="M50,122 Q52,150 48,185 T50,250" fill="none" stroke="#e0aaff" strokeWidth="2" />
          </svg>
        </div>
      </div>

      {/* Center Envelope Container */}
      <div className="envelope-container" onClick={handleDismiss}>
        <div className="envelope-back-bg">
          <svg className="envelope-svg" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M 40,120 L 40,270 C 40,275 45,280 50,280 L 350,280 C 355,280 360,275 360,270 L 360,120 Z" fill="#9d0208" />
            <path d="M 40,120 L 200,20 L 360,120 Z" fill="#6a040f" />
          </svg>
        </div>

        {/* Card/Letter popping out */}
        <div className="envelope-card">
          <h2 className="card-title">Happy Birthday,</h2>
          <h2 className="card-subtitle">Love!</h2>
        </div>

        <div className="envelope-front-bg">
          <svg className="envelope-svg" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <path d="M 40,120 L 200,200 L 40,280 Z" fill="#ff758f" />
            <path d="M 360,120 L 200,200 L 360,280 Z" fill="#ff758f" />
            <path d="M 40,280 C 40,280 45,280 50,280 L 350,280 C 355,280 360,280 360,280 L 200,185 Z" fill="#ff4d6d" />
          </svg>
        </div>
      </div>

      {/* Interactive Click Button */}
      <div className="intro-action-container">
        <span className="click-instruction">tap on the letter for more</span>
        <button id="click-more-btn" className="btn-glow-pink" onClick={handleDismiss}>
          Click for More
        </button>
      </div>

      {/* Right Balloon Group (3 balloons with swaying animations) */}
      <div className="balloon-group right-balloons">
        {/* Balloon 4 */}
        <div className="balloon-wrapper balloon-4">
          <svg className="balloon-svg" viewBox="0 0 100 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="balloon-pink-4" cx="35%" cy="35%" r="55%">
                <stop offset="0%" stopColor="#fff0f3" />
                <stop offset="30%" stopColor="#ffb3c6" />
                <stop offset="80%" stopColor="#ff4d6d" />
                <stop offset="100%" stopColor="#c9184a" />
              </radialGradient>
            </defs>
            <ellipse cx="50" cy="70" rx="39" ry="49" fill="url(#balloon-pink-4)" />
            <polygon points="50,117 46,124 54,124" fill="#c9184a" />
            <path d="M50,124 Q48,155 52,190 T50,250" fill="none" stroke="#e0aaff" strokeWidth="2" />
          </svg>
        </div>
        {/* Balloon 5 */}
        <div className="balloon-wrapper balloon-5">
          <svg className="balloon-svg" viewBox="0 0 100 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="balloon-pink-5" cx="35%" cy="35%" r="55%">
                <stop offset="0%" stopColor="#fff5f7" />
                <stop offset="25%" stopColor="#ff85a2" />
                <stop offset="80%" stopColor="#f72585" />
                <stop offset="100%" stopColor="#b5179e" />
              </radialGradient>
            </defs>
            <ellipse cx="50" cy="70" rx="35" ry="45" fill="url(#balloon-pink-5)" />
            <polygon points="50,113 46,119 54,119" fill="#f72585" />
            <path d="M50,119 Q54,155 46,190 T50,250" fill="none" stroke="#e0aaff" strokeWidth="1.8" />
          </svg>
        </div>
        {/* Balloon 6 */}
        <div className="balloon-wrapper balloon-6">
          <svg className="balloon-svg" viewBox="0 0 100 250" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="balloon-pink-6" cx="35%" cy="35%" r="55%">
                <stop offset="0%" stopColor="#fff0f3" />
                <stop offset="35%" stopColor="#ffc2d1" />
                <stop offset="85%" stopColor="#ff758f" />
                <stop offset="100%" stopColor="#a4133c" />
              </radialGradient>
            </defs>
            <ellipse cx="50" cy="70" rx="37" ry="47" fill="url(#balloon-pink-6)" />
            <polygon points="50,115 45,121 55,121" fill="#a4133c" />
            <path d="M50,121 Q46,150 54,185 T50,250" fill="none" stroke="#e0aaff" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
