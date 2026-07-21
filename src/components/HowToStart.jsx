import React from 'react';

const HowToStart = () => {
  return (
    <section className="section how-to-start">
      <div className="container">
        <h2>Cara Mulai Membantu</h2>
        <p>Kebaikan kecil bisa berdampak besar. Berikut langkah mudah untuk ikut serta dalam misi kami.</p>
        
        <div className="steps-grid">
          <div className="step-item">
            <i className="fa-regular fa-lightbulb step-icon"></i>
            <h4>BERI INSPIRASI</h4>
            <p>Bagikan cerita kami dan inspirasi orang lain untuk ikut peduli.</p>
          </div>
          <div className="step-item">
            <i className="fa-solid fa-hand-holding-heart step-icon"></i>
            <h4>JADI RELAWAN</h4>
            <p>Luangkan waktu dan tenaga Anda untuk membantu kegiatan di Panti Asuhan Amanah.</p>
          </div>
          <div className="step-item">
            <i className="fa-regular fa-face-smile step-icon"></i>
            <h4>SEBARKAN KEBAIKAN</h4>
            <p>Sebarkan informasi ini dan lipatgandakan dampak positif dari program kita.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToStart;
