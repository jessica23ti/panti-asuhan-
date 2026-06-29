import React, { useState } from 'react';

const Donation = () => {
  const [toastMessage, setToastMessage] = useState('');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setToastMessage('Nomor rekening berhasil disalin!');
      setTimeout(() => setToastMessage(''), 3000);
    });
  };

  return (
    <section className="section cta-section" id="donasi">
      <div className="cta-overlay"></div>
      <div className="container relative z-10 text-center">
        <h2 className="cta-title reveal-up active">Siap Menjadi Jembatan Kebaikan?</h2>
        <p className="cta-subtitle reveal-up active" style={{ transitionDelay: '0.1s' }}>
          Setiap rupiah yang Anda donasikan membawa perubahan besar bagi masa depan mereka. Mari bersedekah hari ini.
        </p>
        
        <div className="donation-box reveal-up active" style={{ transitionDelay: '0.2s' }}>
          <div className="bank-accounts">
            <div className="bank-card">
              <div className="bank-logo">BSI</div>
              <div className="bank-details">
                <p className="bank-name">Bank Syariah Indonesia</p>
                <h4 className="acc-number">711 222 3334</h4>
                <p className="acc-name">a.n. Yayasan Panti Asuhan</p>
              </div>
              <button 
                className="copy-btn" 
                onClick={() => copyToClipboard('7112223334')} 
                aria-label="Copy rekening"
              >
                <i className="fa-regular fa-copy"></i> Salin
              </button>
            </div>
            
            <div className="bank-card">
              <div className="bank-logo bca">BCA</div>
              <div className="bank-details">
                <p className="bank-name">Bank Central Asia</p>
                <h4 className="acc-number">098 765 4321</h4>
                <p className="acc-name">a.n. Yayasan Panti Asuhan</p>
              </div>
              <button 
                className="copy-btn" 
                onClick={() => copyToClipboard('0987654321')} 
                aria-label="Copy rekening"
              >
                <i className="fa-regular fa-copy"></i> Salin
              </button>
            </div>
          </div>
          
          <div className="konfirmasi-box">
            <p>Setelah melakukan transfer, mohon konfirmasi agar tercatat dengan baik.</p>
            <a href="https://wa.me/6281234567890" target="_blank" rel="noreferrer" className="btn btn-whatsapp">
              <i className="fa-brands fa-whatsapp"></i> Konfirmasi Via WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className={`toast ${toastMessage ? 'show' : ''}`}>
        {toastMessage}
      </div>
    </section>
  );
};

export default Donation;
