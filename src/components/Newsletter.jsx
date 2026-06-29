import React from 'react';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container">
        <div className="nl-text">
          <h2>Daftar Buletin Kami</h2>
          <p>Dapatkan info terbaru mengenai kegiatan dan laporan penyaluran donasi panti.</p>
        </div>
        <div className="nl-form">
          <input type="email" placeholder="Masukkan email Anda" className="nl-input" />
          <button className="btn btn-primary">Berlangganan</button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
