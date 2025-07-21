import React, { useRef, useState } from 'react';
import './MovieShowcase.css';

const topRated = [
  { id: 1, image: '/images/F/TF4.png', title: "JO KA C U T I E", episode: "Episode B2.10", genre: ["Misteri", "Kriminal", "Fantasi"], publisher: "FINANCIAL WORLD MONTHLY", totalEpisodes: "16 Episode", rating: 5 },
  { id: 2, image: '/images/T2.png', title: "Judul Film 2", episode: "Episode 1", genre: ["Aksi", "Drama"], publisher: "Studio 2", totalEpisodes: "12 Episode", rating: 4.8 },
  { id: 3, image: '/images/T3.png', rating: 4.8 },
  { id: 4, image: '/images/T5-R3.png', rating: 4.9 },
  { id: 5, image: '/images/T/TM1.png', rating: 4.7 },
  { id: 6, image: '/images/T/TM2.png', rating: 5 },
  { id: 7, image: '/images/T/TM3.png', rating: 4.5 },
  { id: 8, image: '/images/T/TM4.png', rating: 4.7 },
  { id: 9, image: '/images/T/TM5.png', rating: 4.6, label: 'Episode Baru' },
  { id: 10, image: '/images/T/TM6.png', rating: 4.8 },
  { id: 11, image: '/images/T/TM7.png', rating: 4.9 },
  { id: 12, image: '/images/T/TM8.png', rating: 4.7 },
  { id: 13, image: '/images/R4.png', rating: 4.9, label: 'Episode Baru' },
  { id: 14, image: '/images/T/TM10.png', rating: 4.8 },
];

const trendingImages = [
  '/images/F1.png', '/images/F2.png', '/images/F3.png', '/images/F4.png',
  '/images/F5-R1.png', '/images/F/TF1.png', '/images/F/TF2.png',
  '/images/F/TF3.png', '/images/F/TF4.png', '/images/F/TF5.png',
  '/images/F/TF6.png', '/images/F/TF7.png', '/images/F/TF8.png',
  '/images/F/TF9.png', '/images/F/TF10.png', '/images/R4.png'
];

const TopRating = ({ toggleFavorite, favorites }) => {
  const carouselRef = useRef(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="top-rating-section">
      <h2>Top Rating Film dan Series Hari Ini</h2>
      <div className="carousel-wrapper">
        <button className="arrow-btn left" onClick={scrollLeft}>
          <i className="fa fa-chevron-left"></i>
        </button>

        <div className="top-carousel" ref={carouselRef}>
          {topRated.map((item) => {
            const isFavorite = favorites?.some(f => f.id === item.id);
            const isAlsoTrending = trendingImages.includes(item.image);

            return (
              <div 
                key={item.id} 
                className="movie-card"
                onMouseEnter={() => setHoveredItem(item)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <img src={item.image} alt={item.title || 'Film'} />

                <i
                  className={`fa fa-heart heart-icon ${isFavorite ? 'active' : ''}`}
                  onClick={() => toggleFavorite(item)}
                  title={isFavorite ? 'Hapus dari Favorit' : 'Tambah ke Favorit'}
                ></i>

                {isAlsoTrending && (
                  <div className="top-label">
                    Top
                    <div className="no">🔥</div>
                  </div>
                )}

                {item.label && (
                  <div className="new-label">{item.label}</div>
                )}

                <div className="movie-overlay">
                  <span className="movie-title">{item.title}</span>
                  <span className="movie-rating">⭐ {item.rating}/5</span>
                </div>

                {hoveredItem?.id === item.id && item.episode && (
                  <div className="movie-popup">
                    <div className="popup-content">
                      <div className="popup-episode">{item.episode}</div>
                      <div className="popup-title">{item.title}</div>
                      <div className="popup-publisher">{item.publisher}</div>
                      <div className="popup-info">
                        <span>{item.totalEpisodes}</span>
                        {item.genre && (
                          <div className="popup-genres">
                            {item.genre.map((g, i) => (
                              <span key={i}>{g}</span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
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

export default TopRating;
