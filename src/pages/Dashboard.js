import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import ContinueWatching from '../components/ContinueWatching';
import TopRating from '../components/TopRating';
import TrendingMovies from '../components/TrendingMovies';
import NewReleases from '../components/NewReleases';
import Footer from '../components/Footer';

function Dashboard() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (film) => {
    const exists = favorites.some((f) => f.id === film.id);
    if (exists) {
      setFavorites(favorites.filter((f) => f.id !== film.id));
    } else {
      setFavorites([...favorites, film]);
    }
  };

  return (
    <div className="auth-page-das">
      <div className="auth-card-das">
        <Navbar />
        <HeroBanner />
        <ContinueWatching />

        {favorites.length > 0 && (
          <section className="top-rating-section">
            <h2>❤️ Favoritku</h2>
            <div className="carousel-wrapper">
              <div className="top-carousel">
                {favorites.map((item) => (
                  <div key={item.id} className="movie-card">
                    <img src={item.image} alt={item.title || 'Film'} />
                    <div className="movie-overlay">
                      <span className="movie-title">{item.title || 'Tanpa Judul'}</span>
                      <i
                        className="fa fa-heart"
                        style={{ color: 'red', cursor: 'pointer' }}
                        onClick={() => toggleFavorite(item)}
                      ></i>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        <TopRating favorites={favorites} toggleFavorite={toggleFavorite} />
        <TrendingMovies favorites={favorites} toggleFavorite={toggleFavorite} />
        <NewReleases favorites={favorites} toggleFavorite={toggleFavorite} />
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
