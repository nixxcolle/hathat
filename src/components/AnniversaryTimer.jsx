import React, { useState, useEffect } from 'react';

const START_DATE = new Date('2023-05-20T00:00:00');

export default function AnniversaryTimer() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    function calculateTime() {
      const now = new Date();
      const diff = now - START_DATE;

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTime({ days, hours, minutes, seconds });
    }

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="timer-container">
      <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>Days of Happiness Together ❤️</h2>
      <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>Every single second spent with you is a blessing.</p>
      <div className="countdown-flex">
        <div className="time-box">
          <span>{time.days}</span>
          <p>Days</p>
        </div>
        <div className="time-box">
          <span>{time.hours}</span>
          <p>Hours</p>
        </div>
        <div className="time-box">
          <span>{time.minutes}</span>
          <p>Mins</p>
        </div>
        <div className="time-box">
          <span>{time.seconds}</span>
          <p>Secs</p>
        </div>
      </div>
    </section>
  );
}
