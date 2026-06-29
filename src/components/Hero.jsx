import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-grid">
        
        <div className="hero-content">
          <div className="hero-text-area">
            <span className="badge-text">MARI BERBAGI KEBAIKAN</span>
            <h1 className="hero-title">Menjadi Bagian dari Panti Asuhan Amanah adalah Jalan Kebaikan</h1>
            <p className="hero-subtitle">
              Mari bersama memberikan perubahan. Setiap donasi Anda membawa harapan dan kebahagiaan bagi anak-anak yatim dan dhuafa yang paling membutuhkan.
            </p>
          </div>
          
          <div className="hero-stats-box">
            <div className="stat-item">
              <h3>15+</h3>
              <p>Program Aktif</p>
            </div>
            <div className="stat-item">
              <h3>1200+</h3>
              <p>Donatur Tetap</p>
            </div>
            <div className="stat-item">
              <h3>545+</h3>
              <p>Anak Asuh Terbantu</p>
            </div>
          </div>
        </div>

        <div className="hero-images">
          <div className="hero-card-main">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop" 
              alt="Anak-anak yatim bahagia" 
              className="hero-card-img" 
            />
            <div className="hero-card-content">
              <span className="badge-text">SOSIAL</span>
              <h4>Berbagi Makanan Untuk Yatim & Dhuafa</h4>
              <div className="progress-wrap">
                <div className="progress-info">
                  <span className="text-muted">Terkumpul: Rp 24.500.000</span>
                  <span className="text-muted">Target: Rp 50.000.000</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: '49%' }}></div>
                </div>
              </div>
              <button className="btn btn-primary btn-full">Donasi Sekarang</button>
            </div>
          </div>

          <div className="hero-card-overlap">
            <img 
              src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=400&auto=format&fit=crop" 
              alt="Senyum anak" 
            />
            <span className="badge-text">PENDIDIKAN</span>
            <h5>Bantu Biaya Pendidikan</h5>
            <div className="progress-wrap">
              <div className="progress-bar" style={{ height: '4px' }}>
                <div className="progress-fill" style={{ width: '75%' }}></div>
              </div>
            </div>
            <button className="btn btn-primary" style={{ width: '100%', padding: '0.4rem', fontSize: '0.8rem' }}>Donasi Sekarang</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
