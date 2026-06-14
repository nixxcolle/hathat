import React from 'react';

export default function DoraemonSection() {
  return (
    <section className="doraemon-section">
      <img src={`${import.meta.env.BASE_URL}assets/doraemon.png`} alt="Doraemon" className="doraemon-illus" />
      <h2 style={{ color: '#c9184a', marginBottom: '20px', fontSize: '2.2rem' }}>Doraemon's Pocket of Love</h2>
      <p style={{ maxWidth: '600px', margin: '0 auto', color: '#444', fontSize: '1.1rem' }}>
        Just like Doraemon has a gadget for everything, I wish I could give you everything you've ever dreamed of. You are my favorite treasure!
      </p>

      <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '30px', flexWrap: 'wrap' }}>
        <div className="reason-card" style={{ width: '150px', background: 'white' }}>
          <i className="fas fa-bell" style={{ color: '#ffcc00' }}></i>
          <p style={{ fontWeight: 600 }}>Guardian Angel</p>
        </div>
        <div className="reason-card" style={{ width: '150px', background: 'white' }}>
          <i className="fas fa-door-open" style={{ color: '#ff4757' }}></i>
          <p style={{ fontWeight: 600 }}>Anywhere with You</p>
        </div>
      </div>
    </section>
  );
}
