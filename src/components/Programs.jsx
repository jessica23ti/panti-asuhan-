import React from 'react';
import img1 from '../assets/img/DSC01326.JPG';
import img2 from '../assets/img/DSC01339.JPG';
import img3 from '../assets/img/DSC01367.JPG';
import img4 from '../assets/img/DSC01406.JPG';
import img5 from '../assets/img/DSC01417.JPG';
import img6 from '../assets/img/DSC01447.JPG';

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
      image: img1,
      raised: "12.400.000", goal: "20.000.000", percent: "62%"
    },
    {
      title: "Beasiswa Pendidikan Yatim",
      category: "PENDIDIKAN",
      image: img2,
      raised: "8.500.000", goal: "15.000.000", percent: "56%"
    },
    {
      title: "Fasilitas Air Bersih & Sanitasi",
      category: "KESEHATAN",
      image: img3,
      raised: "4.200.000", goal: "10.000.000", percent: "42%"
    },
    {
      title: "Bantuan Medis & Kesehatan",
      category: "MEDIS",
      image: img4,
      raised: "25.000.000", goal: "50.000.000", percent: "50%"
    },
    {
      title: "Renovasi Asrama Panti Asuhan Amanah",
      category: "INFRASTRUKTUR",
      image: img5,
      raised: "18.300.000", goal: "30.000.000", percent: "61%"
    },
    {
      title: "Dana Darurat & Ziswaf",
      category: "BANTUAN UMUM",
      image: img6,
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
