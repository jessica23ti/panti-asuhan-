import React from 'react';
import img1 from '../assets/img/DSC01367.JPG';

const About = () => {
  return (
    <section className="section about" id="profil">
      <div className="container">
        <div className="about-grid">
          <div className="about-image-wrapper reveal-left active">
            <img 
              src={img1} 
              alt="Anak-anak belajar bersama" 
              className="about-img main-img" 
            />
            <div className="experience-badge">
              <span className="years">15+</span>
              <span className="text">Tahun<br/>Berbakti</span>
            </div>
          </div>
          <div className="about-content reveal-right active">
            <div className="section-header">
              <h4 className="section-subtitle">TENTANG KAMI</h4>
              <h2 className="section-title">Membangun Harapan, <br/>Mewujudkan Cita-cita</h2>
            </div>
            <p className="about-text">
              Di Panti Asuhan Amanah, kami berkomitmen untuk memberikan perlindungan, pengasuhan, dan pendidikan yang layak bagi anak-anak yatim dan dhuafa. Berdiri sejak tahun 2008, ribuan anak telah merasakan kehangatan keluarga dan kesempatan untuk mengejar impian mereka.
            </p>
            
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon"><i className="fa-solid fa-check"></i></div>
                <div>
                  <h5>Pendidikan Berkualitas</h5>
                  <p>Fasilitas sekolah formal dan bimbingan belajar.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fa-solid fa-check"></i></div>
                <div>
                  <h5>Pembinaan Akhlak</h5>
                  <p>Pendidikan agama dan karakter yang berkelanjutan.</p>
                </div>
              </div>
              <div className="feature-item">
                <div className="feature-icon"><i className="fa-solid fa-check"></i></div>
                <div>
                  <h5>Kesehatan & Gizi</h5>
                  <p>Pemenuhan nutrisi dan layanan kesehatan terpadu.</p>
                </div>
              </div>
            </div>
            <a href="#" className="btn btn-primary mt-4">Pelajari Lebih Lanjut</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
