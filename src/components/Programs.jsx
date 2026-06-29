import React from 'react';

const ProgramCard = ({ title, category, image, raised, goal, percent }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-img" />
      <span className="card-badge">{category}</span>
      <h3 className="card-title">{title}</h3>
      <div className="progress-wrap">
        <div className="progress-info">
          <span className="text-muted">Terkumpul: Rp {raised}</span>
          <span className="text-muted">Target: Rp {goal}</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: percent }}></div>
        </div>
      </div>
      <button className="btn btn-primary btn-full" style={{ marginTop: '1rem' }}>Donasi Sekarang</button>
    </div>
  );
};

const Programs = () => {
  const cards = [
    {
      title: "Paket Makanan Bergizi",
      category: "SOSIAL",
      image: "https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=600&auto=format&fit=crop",
      raised: "12.400.000", goal: "20.000.000", percent: "62%"
    },
    {
      title: "Beasiswa Pendidikan Yatim",
      category: "PENDIDIKAN",
      image: "https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600&auto=format&fit=crop",
      raised: "8.500.000", goal: "15.000.000", percent: "56%"
    },
    {
      title: "Fasilitas Air Bersih & Sanitasi",
      category: "KESEHATAN",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=600&auto=format&fit=crop",
      raised: "4.200.000", goal: "10.000.000", percent: "42%"
    },
    {
      title: "Bantuan Medis & Kesehatan",
      category: "MEDIS",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=600&auto=format&fit=crop",
      raised: "25.000.000", goal: "50.000.000", percent: "50%"
    },
    {
      title: "Renovasi Asrama Panti",
      category: "INFRASTRUKTUR",
      image: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=600&auto=format&fit=crop",
      raised: "18.300.000", goal: "30.000.000", percent: "61%"
    },
    {
      title: "Dana Darurat & Ziswaf",
      category: "BANTUAN UMUM",
      image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb0?q=80&w=600&auto=format&fit=crop",
      raised: "55.000.000", goal: "100.000.000", percent: "55%"
    }
  ];

  return (
    <section className="section donation-grid-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Mari Bantu Mereka yang Membutuhkan</h2>
          <a href="#" className="btn btn-secondary" style={{ padding: '0.5rem 1.5rem' }}>Lihat Semua Program <i className="fa-solid fa-arrow-right"></i></a>
        </div>
        
        <div className="grid-cards">
          {cards.map((card, idx) => (
            <ProgramCard key={idx} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
