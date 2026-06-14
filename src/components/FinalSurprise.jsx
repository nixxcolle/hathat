import React, { useState } from 'react';

export default function FinalSurprise() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(true);
    setTimeout(() => {
      alert('I Love You Beyond Everything! ❤️');
      setActive(false); // Reset explosion after alert closes
    }, 1500);
  };

  return (
    <section className="final-surprise" id="surprise">
      <div className={`heart-explosion ${active ? 'active' : ''}`}></div>
      <h2 style={{ fontSize: '2.5rem', color: '#c9184a', marginBottom: '25px', zIndex: 10, textAlign: 'center' }}>
        Ready for a surprise?
      </h2>
      <p style={{ fontSize: '1.2rem', color: '#444', marginBottom: '40px', zIndex: 10, textAlign: 'center' }}>
        Press the button below for a sweet message.
      </p>
      <button
        id="final-btn"
        className="btn-glow-pink"
        style={{ zIndex: 10 }}
        onClick={handleClick}
      >
        Open Surprise 🎁
      </button>
    </section>
  );
}
