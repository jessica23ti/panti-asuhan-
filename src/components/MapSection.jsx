import React from 'react';

const MapSection = () => {
  return (
    <section className="section map-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Lokasi Panti Asuhan Amanah</h2>
          <p className="text-muted" style={{ maxWidth: '600px', margin: '0 auto' }}>
            GF5C+83F, Jl. Sakuntala Gg. Amanah, Tengkerang Utara, Bukit Raya, Kota Pekanbaru, Riau 28115
          </p>
        </div>
        <div className="map-container" style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
          <iframe 
            src="https://maps.google.com/maps?q=GF5C%2B83F,%20Jl.%20Sakuntala%20Gg.%20Amanah,%20Tengkerang%20Utara,%20Bukit%20Raya,%20Kota%20Pekanbaru,%20Riau%2028115&t=&z=15&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="450" 
            style={{ border: 0, display: 'block' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Lokasi Panti Asuhan Amanah"
          ></iframe>
        </div>
        <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
          <a href="https://share.google/XiZoaWuYKO3GDa0oe" target="_blank" rel="noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <i className="fa-solid fa-map-location-dot"></i> Buka di Google Maps
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
