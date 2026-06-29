import React from 'react';

const Articles = () => {
  const articles = [
    {
      title: "10 Cara Membantu Anak Yatim di Sekitar Kita",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=400&auto=format&fit=crop",
      date: "12 Okt 2026"
    },
    {
      title: "Pentingnya Pendidikan Dasar Bagi Masa Depan Anak Dhuafa",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=400&auto=format&fit=crop",
      date: "05 Okt 2026"
    },
    {
      title: "Kisah Harapan: Bagaimana Beasiswa Mengubah Hidup Fulan",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400&auto=format&fit=crop",
      date: "28 Sep 2026"
    },
    {
      title: "Mengapa Donasi Rutin Bulanan Sangat Berarti?",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400&auto=format&fit=crop",
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
