import React, { useRef, useState, useEffect } from 'react';
import './MovieShowcase.css';

const trending = [
  { id: 1, image: '/images/F1.png' },
  { id: 2, image: '/images/F2.png' },
  { id: 3, image: '/images/F3.png' },
  { id: 4, image: '/images/F4.png' },
  { id: 5, image: '/images/F5-R1.png' },
  { id: 6, image: '/images/F/TF1.png' },
  { id: 7, image: '/images/F/TF2.png' },
  { id: 8, image: '/images/F/TF3.png' },
  { id: 9, image: '/images/F/TF4.png' },
  { id: 10, image: '/images/F/TF5.png' },
  { id: 11, image: '/images/F/TF6.png' },
  { id: 12, image: '/images/F/TF7.png', label: 'Episode Baru' },
  { id: 13, image: '/images/F/TF8.png', label: 'Episode Baru' },
  { id: 14, image: '/images/F/TF9.png' },
  { id: 15, image: '/images/F/TF10.png' },
  { id: 16, image: '/images/R4.png', top: 3, label: 'Episode Baru' },
];

const releases = [
  { id: 1, image: '/images/F5-R1.png', top: 5 },
  { id: 2, image: '/images/R2.png', top: 12, label: 'Episode Baru' },
  { id: 3, image: '/images/R4.png', top: 3, label: 'Episode Baru' },
  { id: 4, image: '/images/R5.png', label: 'Episode Baru' },
  { id: 5, image: '/images/R/TR1.png' },
  { id: 6, image: '/images/R/TR2.png' },
  { id: 7, image: '/images/R/TR3.png' },
  { id: 8, image: '/images/R/TR4.png', label: 'Episode Baru' },
  { id: 9, image: '/images/R/TR5.png' },
  { id: 10, image: '/images/R/TR6.png' },
  { id: 11, image: '/images/R/TR7.png' },
  { id: 12, image: '/images/R/TR8.png' },
  { id: 13, image: '/images/R/TR9.png' },
  { id: 14, image: '/images/R/TR10.png', top: 3 },
  { id: 15, image: '/images/R/TR11.png' },
  { id: 16, image: '/images/R/TR12.png' },
];

const NewReleases = ({ toggleFavorite, favorites = [] }) => {
  const carouselRef = useRef(null);
  const [labeledReleases, setLabeledReleases] = useState([]);

  useEffect(() => {
    const trendingImages = trending.map((f) => f.image);
    const merged = releases.map((film) => {
      const isDuplicate = trendingImages.includes(film.image);
      return isDuplicate ? { ...film, label: film.label || 'Episode Baru' } : film;
    });
    setLabeledReleases(merged);
  }, []);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="new-release-section">
      <h2>Rilis Baru</h2>
      <div className="carousel-wrapper">
        <button className="arrow-btn left" onClick={scrollLeft}>
          <i className="fa fa-chevron-left"></i>
        </button>

        <div className="new-carousel" ref={carouselRef}>
          {labeledReleases.map((item, index) => {
            const isFavorite = favorites.some(f => f.id === item.id);
            return (
              <div key={item.id} className="movie-card">
                <img src={item.image} alt={`Release ${index + 1}`} />
                <i
                  className={`fa fa-heart heart-icon ${isFavorite ? 'active' : ''}`}
                  onClick={() => toggleFavorite(item)}
                  title={isFavorite ? 'Hapus dari Favorit' : 'Tambah ke Favorit'}
                ></i>
                {item.top && (
                  <div className="top-label">
                    Top <div className="no">{item.top}</div>
                  </div>
                )}
                {item.label && (
                  <div className="new-label">{item.label}</div>
                )}
              </div>
            );
          })}
        </div>

        <button className="arrow-btn right" onClick={scrollRight}>
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default NewReleases;
