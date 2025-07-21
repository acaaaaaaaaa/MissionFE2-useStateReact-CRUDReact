import React, { useRef, useState } from 'react';
import './ContinueWatching.css';

const movies = [
  { id: 1, title: "Don't Look Up", image: '/images/M1.png', rating: 4.5 },
  { id: 2, title: 'All of Us Are Dead', image: '/images/M2-T4.png', rating: 4.5, label: 'Episode Baru' },
  { id: 3, title: 'Blue Lock', image: '/images/M3.png', rating: 4.6, label: 'Episode Baru' },
  { id: 4, title: 'A Man Called Otto', image: '/images/M4.png', rating: 4.4 },
  { id: 5, title: "어쩌다 마주친 그대", image: '/images/M/MT1.png', rating: 4.5 },
  { id: 6, title: "Shazam Fury of the Gods", image: '/images/M/MT2.png', rating: 4.2 },
  { id: 7, title: "Avatar", image: '/images/M/MT3.png', rating: 4.6 },
  { id: 8, title: "Bluelock", image: '/images/M/MT4.png', rating: 4.0, label: 'Episode Baru' },
  { id: 9, title: "The Little Mermaid", image: '/images/M/MT5.png', rating: 4.3 },
  { id: 10, title: "Rio", image: '/images/M/MT6.png', rating: 4.1, top: 9 },
  { id: 11, title: "The Tomorrow War", image: '/images/M/MT7.png', rating: 4.4 },
  { id: 12, title: "A Man Called Otto", image: '/images/M/MT8.png', rating: 4.7 },
  { id: 13, title: "Big Hero 6", image: '/images/M/MT9.png', rating: 4.2 },
  { id: 14, title: "Suzume", image: '/images/M/MT10.png', rating: 4.6 },
  { id: 15, title: "Batman", image: '/images/M/MT11.png', rating: 4.3 },
  { id: 16, title: "Stuart Little", image: '/images/M/MT12.png', rating: 4.5 },
  { id: 17, title: "Baymax", image: '/images/M/MT13.png', rating: 4.1 },
  { id: 18, title: "Movie 14", image: '/images/M/MT14.png', rating: 4.4 },
  { id: 19, title: "Guard of The Galaxy", image: '/images/M/MT15.png', rating: 4.6, top: 16 },
  { id: 20, title: "Alice in Borderland", image: '/images/M/MT16.png', rating: 4.2 },
  { id: 21, title: "Megan", image: '/images/M/MT17.png', rating: 4.7 },
];

const ContinueWatching = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <section className="continue-section">
      <h2>Melanjutkan Tonton Film</h2>
      <div className="carousel-wrapper">
        <button className="arrow-btn left" onClick={scrollLeft}>
          <i className="fa fa-chevron-left"></i>
        </button>

        <div className="continue-carousel" ref={carouselRef}>
          {movies.map((movie) => (
            <div key={movie.id} className="movie-cardm">
              <img src={movie.image} alt={movie.title} />
              {movie.top && (
                <div className="top-label">
                  Top <div className="no">{movie.top}</div>
                </div>
              )}
              {movie.label && (
                <div className="new-label">{movie.label}</div>
              )}
              <div className="movie-overlay">
                <span className="movie-title">{movie.title}</span>
                <span className="movie-rating">⭐ {movie.rating}/5</span>
              </div>
            </div>
          ))}
        </div>

        <button className="arrow-btn right" onClick={scrollRight}>
          <i className="fa fa-chevron-right"></i>
        </button>
      </div>
    </section>
  );
};

export default ContinueWatching;
