import React, { useState } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqs = [
    {
      question: "Bagaimana cara saya berdonasi?",
      answer: "Anda bisa berdonasi langsung melalui website dengan klik 'Donasi Sekarang', atau transfer ke rekening resmi panti asuhan kami."
    },
    {
      question: "Apakah donasi disalurkan secara transparan?",
      answer: "Tentu. Kami secara rutin memberikan laporan penyaluran dana dan dokumentasi kegiatan kepada para donatur melalui grup WhatsApp dan email."
    },
    {
      question: "Ke mana dana donasi saya disalurkan?",
      answer: "Seluruh donasi akan difokuskan untuk kebutuhan pangan, pendidikan anak-anak, biaya kesehatan, serta operasional asrama panti asuhan."
    },
    {
      question: "Bisakah saya berkunjung langsung ke panti?",
      answer: "Tentu saja! Kami sangat terbuka jika Anda ingin bersilaturahmi, melihat kondisi asrama, dan bermain bersama anak-anak Panti Asuhan Amanah secara langsung."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <section className="section faq-section">
      <div className="container">
        <div>
          <h2 className="faq-title">Pertanyaan Seputar Donasi (FAQ)</h2>
          <p className="text-muted">Tidak menemukan jawaban yang Anda cari? Silakan hubungi tim kami melalui kontak yang tersedia.</p>
        </div>
        
        <div className="accordion-list">
          {faqs.map((faq, index) => (
            <div className="accordion-item" key={index}>
              <div 
                className={`accordion-header ${activeIndex === index ? 'active' : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
                <i className={`fa-solid ${activeIndex === index ? 'fa-minus' : 'fa-plus'}`}></i>
              </div>
              <div className="accordion-body">
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
