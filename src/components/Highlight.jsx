import React from 'react';
import img1 from '../assets/img/DSC01447.JPG';

const Highlight = () => {
  return (
    <section className="section highlight">
      <div className="container">
        <div className="highlight-card">
          
          <div className="hl-content">
            <div className="hl-price">
              Rp 20<span>.000 / hari</span>
            </div>
            <h2 className="hl-title">Berbagi Makanan Bergizi Untuk Anak Yatim & Dhuafa</h2>
            <p className="hl-desc">
              Kontribusi kecil Anda berdampak besar. Bantu kami menyediakan makanan bergizi bagi anak-anak di Panti Asuhan Amanah. Bersama, kita pastikan mereka tumbuh sehat dan kuat.
            </p>
            
            <div className="progress-wrap" style={{ marginBottom: '2rem' }}>
              <div className="progress-info">
                <span className="text-muted">Terkumpul: Rp 45.750.000</span>
                <span className="text-muted">Target: Rp 100.000.000</span>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '45%' }}></div>
              </div>
            </div>
            
            <button className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>Donasi Sekarang</button>
          </div>
          
          <div className="hl-image-wrapper">
            <img 
              src={img1} 
              alt="Kids sharing food" 
              className="hl-image"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Highlight;
