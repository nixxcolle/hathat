import React from 'react';

const GALLERY_ITEMS = [
  {
    id: 1,
    className: 'card-1',
    img: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400',
    caption: 'Day We First Met',
  },
  {
    id: 2,
    className: 'card-2',
    img: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=400',
    caption: 'Our First Date',
  },
  {
    id: 3,
    className: 'card-3',
    img: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=400',
    caption: 'Late Night Talks',
  },
  {
    id: 4,
    className: 'card-4',
    img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400',
    caption: 'Our First Adventure',
  },
  {
    id: 5,
    className: 'card-5',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400',
    caption: 'Sweetest Smile',
  },
  {
    id: 6,
    className: 'card-6',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400',
    caption: 'Silly Moments',
  },
  {
    id: 7,
    className: 'card-7',
    img: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=400',
    caption: 'Under the Stars',
  },
  {
    id: 8,
    className: 'card-8',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=400',
    caption: 'Every Little Thing',
  },
  {
    id: 9,
    className: 'card-9',
    img: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=400',
    caption: 'Growing Together',
  },
  {
    id: 10,
    className: 'card-10',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400',
    caption: 'Side by Side',
  },
  {
    id: 11,
    className: 'card-11',
    img: 'https://images.unsplash.com/photo-1494972308805-463bc619b34e?q=80&w=400',
    caption: 'Forever & Always',
  },
];

export default function MemoryGallery() {
  return (
    <section id="gallery" className="heart-gallery-section">
      {/* Watercolor Floral Corner Decorations */}
      <div className="floral-deco top-left">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="watercolor-blur-tl" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <radialGradient id="center-glow-tl" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd700" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#ffd700" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g opacity="0.6" filter="url(#watercolor-blur-tl)">
            <path d="M 100,100 C 80,60 60,50 45,70 C 35,80 45,95 100,100 Z" fill="#6b8e23" />
            <path d="M 100,100 C 120,60 140,50 155,70 C 165,80 155,95 100,100 Z" fill="#556b2f" />
            <path d="M 100,100 C 60,120 50,140 70,155 C 80,165 95,155 100,100 Z" fill="#8fbc8f" />
            <path d="M 100,100 C 140,120 150,140 130,155 C 120,165 105,155 100,100 Z" fill="#6b8e23" />
          </g>
          <g opacity="0.75" filter="url(#watercolor-blur-tl)">
            <path d="M 100,100 C 65,65 50,25 100,25 C 150,25 135,65 100,100 Z" fill="#ff85a2" />
            <path d="M 100,100 C 135,65 175,50 175,100 C 175,150 135,135 100,100 Z" fill="#ffccd5" />
            <path d="M 100,100 C 135,135 150,175 100,175 C 50,175 65,135 100,100 Z" fill="#f72585" />
            <path d="M 100,100 C 65,135 25,175 25,100 C 25,50 65,65 100,100 Z" fill="#ff4d6d" />
            <path d="M 100,100 C 75,75 70,45 100,45 C 130,45 125,75 100,100 Z" fill="#ffb3c6" opacity="0.8" />
            <path d="M 100,100 C 125,75 155,70 155,100 C 155,130 125,125 100,100 Z" fill="#fff0f3" opacity="0.8" />
            <path d="M 100,100 C 125,125 130,155 100,155 C 70,155 75,125 100,100 Z" fill="#ff758f" opacity="0.8" />
            <path d="M 100,100 C 75,125 45,130 45,100 C 45,70 75,75 100,100 Z" fill="#ffe5ec" opacity="0.8" />
          </g>
          <circle cx="100" cy="100" r="16" fill="url(#center-glow-tl)" />
          <circle cx="100" cy="100" r="5" fill="#ffd700" opacity="0.9" />
        </svg>
      </div>
      <div className="floral-deco top-right">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="watercolor-blur-tr" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <radialGradient id="center-glow-tr" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd700" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#ffd700" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g opacity="0.6" filter="url(#watercolor-blur-tr)">
            <path d="M 100,100 C 80,60 60,50 45,70 C 35,80 45,95 100,100 Z" fill="#6b8e23" />
            <path d="M 100,100 C 120,60 140,50 155,70 C 165,80 155,95 100,100 Z" fill="#556b2f" />
            <path d="M 100,100 C 60,120 50,140 70,155 C 80,165 95,155 100,100 Z" fill="#8fbc8f" />
            <path d="M 100,100 C 140,120 150,140 130,155 C 120,165 105,155 100,100 Z" fill="#6b8e23" />
          </g>
          <g opacity="0.75" filter="url(#watercolor-blur-tr)">
            <path d="M 100,100 C 65,65 50,25 100,25 C 150,25 135,65 100,100 Z" fill="#ff85a2" />
            <path d="M 100,100 C 135,65 175,50 175,100 C 175,150 135,135 100,100 Z" fill="#ffccd5" />
            <path d="M 100,100 C 135,135 150,175 100,175 C 50,175 65,135 100,100 Z" fill="#f72585" />
            <path d="M 100,100 C 65,135 25,175 25,100 C 25,50 65,65 100,100 Z" fill="#ff4d6d" />
            <path d="M 100,100 C 75,75 70,45 100,45 C 130,45 125,75 100,100 Z" fill="#ffb3c6" opacity="0.8" />
            <path d="M 100,100 C 125,75 155,70 155,100 C 155,130 125,125 100,100 Z" fill="#fff0f3" opacity="0.8" />
            <path d="M 100,100 C 125,125 130,155 100,155 C 70,155 75,125 100,100 Z" fill="#ff758f" opacity="0.8" />
            <path d="M 100,100 C 75,125 45,130 45,100 C 45,70 75,75 100,100 Z" fill="#ffe5ec" opacity="0.8" />
          </g>
          <circle cx="100" cy="100" r="16" fill="url(#center-glow-tr)" />
          <circle cx="100" cy="100" r="5" fill="#ffd700" opacity="0.9" />
        </svg>
      </div>
      <div className="floral-deco bottom-left">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="watercolor-blur-bl" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <radialGradient id="center-glow-bl" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd700" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#ffd700" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g opacity="0.6" filter="url(#watercolor-blur-bl)">
            <path d="M 100,100 C 80,60 60,50 45,70 C 35,80 45,95 100,100 Z" fill="#6b8e23" />
            <path d="M 100,100 C 120,60 140,50 155,70 C 165,80 155,95 100,100 Z" fill="#556b2f" />
            <path d="M 100,100 C 60,120 50,140 70,155 C 80,165 95,155 100,100 Z" fill="#8fbc8f" />
            <path d="M 100,100 C 140,120 150,140 130,155 C 120,165 105,155 100,100 Z" fill="#6b8e23" />
          </g>
          <g opacity="0.75" filter="url(#watercolor-blur-bl)">
            <path d="M 100,100 C 65,65 50,25 100,25 C 150,25 135,65 100,100 Z" fill="#ff85a2" />
            <path d="M 100,100 C 135,65 175,50 175,100 C 175,150 135,135 100,100 Z" fill="#ffccd5" />
            <path d="M 100,100 C 135,135 150,175 100,175 C 50,175 65,135 100,100 Z" fill="#f72585" />
            <path d="M 100,100 C 65,135 25,175 25,100 C 25,50 65,65 100,100 Z" fill="#ff4d6d" />
            <path d="M 100,100 C 75,75 70,45 100,45 C 130,45 125,75 100,100 Z" fill="#ffb3c6" opacity="0.8" />
            <path d="M 100,100 C 125,75 155,70 155,100 C 155,130 125,125 100,100 Z" fill="#fff0f3" opacity="0.8" />
            <path d="M 100,100 C 125,125 130,155 100,155 C 70,155 75,125 100,100 Z" fill="#ff758f" opacity="0.8" />
            <path d="M 100,100 C 75,125 45,130 45,100 C 45,70 75,75 100,100 Z" fill="#ffe5ec" opacity="0.8" />
          </g>
          <circle cx="100" cy="100" r="16" fill="url(#center-glow-bl)" />
          <circle cx="100" cy="100" r="5" fill="#ffd700" opacity="0.9" />
        </svg>
      </div>
      <div className="floral-deco bottom-right">
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="watercolor-blur-br" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <radialGradient id="center-glow-br" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffd700" stopOpacity="0.9" />
              <stop offset="40%" stopColor="#ffd700" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </radialGradient>
          </defs>
          <g opacity="0.6" filter="url(#watercolor-blur-br)">
            <path d="M 100,100 C 80,60 60,50 45,70 C 35,80 45,95 100,100 Z" fill="#6b8e23" />
            <path d="M 100,100 C 120,60 140,50 155,70 C 165,80 155,95 100,100 Z" fill="#556b2f" />
            <path d="M 100,100 C 60,120 50,140 70,155 C 80,165 95,155 100,100 Z" fill="#8fbc8f" />
            <path d="M 100,100 C 140,120 150,140 130,155 C 120,165 105,155 100,100 Z" fill="#6b8e23" />
          </g>
          <g opacity="0.75" filter="url(#watercolor-blur-br)">
            <path d="M 100,100 C 65,65 50,25 100,25 C 150,25 135,65 100,100 Z" fill="#ff85a2" />
            <path d="M 100,100 C 135,65 175,50 175,100 C 175,150 135,135 100,100 Z" fill="#ffccd5" />
            <path d="M 100,100 C 135,135 150,175 100,175 C 50,175 65,135 100,100 Z" fill="#f72585" />
            <path d="M 100,100 C 65,135 25,175 25,100 C 25,50 65,65 100,100 Z" fill="#ff4d6d" />
            <path d="M 100,100 C 75,75 70,45 100,45 C 130,45 125,75 100,100 Z" fill="#ffb3c6" opacity="0.8" />
            <path d="M 100,100 C 125,75 155,70 155,100 C 155,130 125,125 100,100 Z" fill="#fff0f3" opacity="0.8" />
            <path d="M 100,100 C 125,125 130,155 100,155 C 70,155 75,125 100,100 Z" fill="#ff758f" opacity="0.8" />
            <path d="M 100,100 C 75,125 45,130 45,100 C 45,70 75,75 100,100 Z" fill="#ffe5ec" opacity="0.8" />
          </g>
          <circle cx="100" cy="100" r="16" fill="url(#center-glow-br)" />
          <circle cx="100" cy="100" r="5" fill="#ffd700" opacity="0.9" />
        </svg>
      </div>

      <h2 className="section-title">Common Captured Moments ✨</h2>

      <div className="heart-grid-container">
        <div className="heart-grid">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className={`heart-card ${item.className}`}>
              <img src={item.img} alt={item.caption} className="heart-photo" loading="lazy" />
              <div className="heart-overlay">
                <i className="fas fa-camera"></i>
                <span className="heart-overlay-caption">{item.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
