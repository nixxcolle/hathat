import React, { useEffect, useRef, useState } from 'react';

const PARAGRAPHS = [
  'Happy Birthday,',
  "You've brought so much light, warmth, and meaning into my life in ways I didn't even expect. The way you laugh, the way you care, even the little things you do—they all stay with me. Being around you makes ordinary moments feel special, and I'm really grateful for that.",
  "I hope today reminds you of how loved you are. You deserve happiness that stays, peace that comforts you, and dreams that slowly turn into reality. No matter what happens, I hope you always find your way back to the things that make your heart feel full.",
  "Thank you for being you—for your kindness, your strength, and everything in between. I'm really lucky to know you and to share moments with you.",
  "Happy birthday again. I hope this year gives you more reasons to smile, more memories to hold onto, and more love than you can imagine.",
  'Always here for you,',
];

export default function LoveLetter() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="letter-section">
      {/* Watercolor Floral background decorations */}
      <div className="floral-deco top-right">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="watercolor-blur-ltr" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <radialGradient id="center-glow-ltr" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd700" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#ffd700" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g opacity="0.6" filter="url(#watercolor-blur-ltr)">
            <path d="M 100,100 C 80,60 60,50 45,70 C 35,80 45,95 100,100 Z" fill="#6b8e23" />
            <path d="M 100,100 C 120,60 140,50 155,70 C 165,80 155,95 100,100 Z" fill="#556b2f" />
            <path d="M 100,100 C 60,120 50,140 70,155 C 80,165 95,155 100,100 Z" fill="#8fbc8f" />
            <path d="M 100,100 C 140,120 150,140 130,155 C 120,165 105,155 100,100 Z" fill="#6b8e23" />
          </g>
          <g opacity="0.75" filter="url(#watercolor-blur-ltr)">
            <path d="M 100,100 C 65,65 50,25 100,25 C 150,25 135,65 100,100 Z" fill="#ff85a2" />
            <path d="M 100,100 C 135,65 175,50 175,100 C 175,150 135,135 100,100 Z" fill="#ffccd5" />
            <path d="M 100,100 C 135,135 150,175 100,175 C 50,175 65,135 100,100 Z" fill="#f72585" />
            <path d="M 100,100 C 65,135 25,175 25,100 C 25,50 65,65 100,100 Z" fill="#ff4d6d" />
            <path d="M 100,100 C 75,75 70,45 100,45 C 130,45 125,75 100,100 Z" fill="#ffb3c6" opacity="0.8" />
            <path d="M 100,100 C 125,75 155,70 155,100 C 155,130 125,125 100,100 Z" fill="#fff0f3" opacity="0.8" />
            <path d="M 100,100 C 125,125 130,155 100,155 C 70,155 75,125 100,100 Z" fill="#ff758f" opacity="0.8" />
            <path d="M 100,100 C 75,125 45,130 45,100 C 45,70 75,75 100,100 Z" fill="#ffe5ec" opacity="0.8" />
          </g>
          <circle cx="100" cy="100" r="16" fill="url(#center-glow-ltr)" />
          <circle cx="100" cy="100" r="5" fill="#ffd700" opacity="0.9" />
        </svg>
      </div>
      <div className="floral-deco bottom-left">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="watercolor-blur-lbl" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <radialGradient id="center-glow-lbl" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd700" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#ffd700" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g opacity="0.6" filter="url(#watercolor-blur-lbl)">
            <path d="M 100,100 C 80,60 60,50 45,70 C 35,80 45,95 100,100 Z" fill="#6b8e23" />
            <path d="M 100,100 C 120,60 140,50 155,70 C 165,80 155,95 100,100 Z" fill="#556b2f" />
            <path d="M 100,100 C 60,120 50,140 70,155 C 80,165 95,155 100,100 Z" fill="#8fbc8f" />
            <path d="M 100,100 C 140,120 150,140 130,155 C 120,165 105,155 100,100 Z" fill="#6b8e23" />
          </g>
          <g opacity="0.75" filter="url(#watercolor-blur-lbl)">
            <path d="M 100,100 C 65,65 50,25 100,25 C 150,25 135,65 100,100 Z" fill="#ff85a2" />
            <path d="M 100,100 C 135,65 175,50 175,100 C 175,150 135,135 100,100 Z" fill="#ffccd5" />
            <path d="M 100,100 C 135,135 150,175 100,175 C 50,175 65,135 100,100 Z" fill="#f72585" />
            <path d="M 100,100 C 65,135 25,175 25,100 C 25,50 65,65 100,100 Z" fill="#ff4d6d" />
            <path d="M 100,100 C 75,75 70,45 100,45 C 130,45 125,75 100,100 Z" fill="#ffb3c6" opacity="0.8" />
            <path d="M 100,100 C 125,75 155,70 155,100 C 155,130 125,125 100,100 Z" fill="#fff0f3" opacity="0.8" />
            <path d="M 100,100 C 125,125 130,155 100,155 C 70,155 75,125 100,100 Z" fill="#ff758f" opacity="0.8" />
            <path d="M 100,100 C 75,125 45,130 45,100 C 45,70 75,75 100,100 Z" fill="#ffe5ec" opacity="0.8" />
          </g>
          <circle cx="100" cy="100" r="16" fill="url(#center-glow-lbl)" />
          <circle cx="100" cy="100" r="5" fill="#ffd700" opacity="0.9" />
        </svg>
      </div>

      {/* Halftone Dotted Star Background Decorations */}
      <div className="star-decoration star-left">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="dotPatternLeft" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="2" fill="#ffccd5" opacity="0.5" />
            </pattern>
          </defs>
          <path d="M50 0 L63 38 L100 38 L70 62 L82 100 L50 77 L18 100 L30 62 L0 38 L37 38 Z" fill="url(#dotPatternLeft)" />
        </svg>
      </div>
      <div className="star-decoration star-right">
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern id="dotPatternRight" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
              <circle cx="4" cy="4" r="2" fill="#ff85a2" opacity="0.6" />
            </pattern>
          </defs>
          <path d="M50 0 L63 38 L100 38 L70 62 L82 100 L50 77 L18 100 L30 62 L0 38 L37 38 Z" fill="url(#dotPatternRight)" />
        </svg>
      </div>

      <div className="letter-container">
        {/* Left Side: Letter Content */}
        <div className="letter-text-column">
          <h1 className="letter-title">Happy Birthday, Love!</h1>

          {PARAGRAPHS.map((text, index) => {
            const isSignature = index === PARAGRAPHS.length - 1;
            const isTitle = index === 0;

            // Extract text formatting for paragraph 2: "The way you laugh... special, and I'm really grateful for that."
            const isEmphasized = text.includes('The way you laugh');

            return (
              <p
                key={index}
                className={`letter-paragraph ${isVisible ? 'visible' : ''} ${isSignature ? 'letter-signature' : ''}`}
                style={{
                  transitionDelay: isVisible ? `${index * 250}ms` : '0ms',
                }}
              >
                {isEmphasized ? (
                  <>
                    You've brought so much light, warmth, and meaning into my life in ways I didn't even expect.{' '}
                    <em>The way you laugh, the way you care, even the little things you do—they all stay with me.</em> Being
                    around you makes ordinary moments feel special, and I'm really grateful for that.
                  </>
                ) : (
                  text
                )}
              </p>
            );
          })}
        </div>

        {/* Right Side: Overlapping Polaroids */}
        <div className="letter-photos-column">
          <div className="letter-polaroid photo-1">
            <img
              src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=500"
              alt="Our Special Moment"
              className="letter-photo"
              loading="lazy"
            />
          </div>
          <div className="letter-polaroid photo-2">
            <img
              src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=500"
              alt="Together Forever"
              className="letter-photo"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Swooping Heart Doodle bottom-right */}
      <div className="heart-doodle-container">
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <path
            className="heart-doodle-path"
            d="M 50,85 C 40,85 20,70 20,50 C 20,30 35,15 50,30 C 65,15 80,30 80,50 C 80,70 60,85 50,85 C 40,85 45,95 55,95 C 75,95 140,40 180,40"
            fill="none"
            stroke="#c9184a"
            strokeWidth="2.5"
            style={{
              animation: isVisible ? 'draw-heart-doodle 3s ease-out forwards' : 'none',
            }}
          />
        </svg>
      </div>
    </section>
  );
}
