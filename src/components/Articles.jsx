import React from 'react';
import img1 from '../assets/img/DSC01406.JPG';
import img2 from '../assets/img/DSC01417.JPG';
import img3 from '../assets/img/DSC01326.JPG';
import img4 from '../assets/img/DSC01339.JPG';

const Articles = () => {
  const articles = [
    {
      title: "10 Cara Membantu Anak Yatim di Sekitar Kita",
      image: img1,
      date: "12 Okt 2026"
    },
    {
      title: "Pentingnya Pendidikan Dasar Bagi Masa Depan Anak Dhuafa",
      image: img2,
      date: "05 Okt 2026"
    },
    {
      title: "Kisah Harapan Anak Asuh Amanah: Bagaimana Beasiswa Mengubah Hidup Fulan",
      image: img3,
      date: "28 Sep 2026"
    },
    {
      title: "Mengapa Donasi Rutin Bulanan Sangat Berarti?",
      image: img4,
      date: "15 Sep 2026"
    }
  ];

  return (
    <section className="section articles-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Berita & Artikel Terbaru</h2>
          <a href="#" className="btn btn-secondary" style={{ padding: '0.5rem 1.5rem' }}>Lihat Selengkapnya <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        
        <div className="articles-grid">
          {articles.map((article, idx) => (
            <div className="article-card" key={idx}>
              <img src={article.image} alt={article.title} className="article-img" />
              <div className="article-info">
                <h4>{article.title}</h4>
                <p>{article.date}</p>
                <a href="#" className="read-more">Baca Selengkapnya</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
