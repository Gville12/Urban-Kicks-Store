import { useState } from "react";
import { sneakers } from "../../data/sneakers";
import DestinationCard from "../../components/destination-card/DestinationCard";
import Map from "../../components/map/Map";
import Promo from "../../components/promo/Promo";
import SneakerQuiz from "../../components/sneaker-quiz/SneakerQuiz";
import ForumFeed from "../../components/forum-feed/ForumFeed";
import "./Home.css";

function Home() {
  const [showSpecial, setShowSpecial] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Responsive items logic for slider
  const [itemsPerView, setItemsPerView] = useState(3);

  useState(() => {
    const handleResize = () => {
      if (window.innerWidth < 650) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1000) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalItems = sneakers.length;

  const nextSlide = () => {
    if (currentIndex < totalItems - itemsPerView) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-tagline">New Season · Streetwear Essentials</p>
          <h1 className="hero-title">Premium sneakers for every step.</h1>
          <p className="hero-subtitle">
            Discover curated drops from top brands with clean design, all-day comfort,
            and styles made for the city.
          </p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => setShowSpecial(!showSpecial)}>
              {showSpecial ? "View less" : "View special offer"}
            </button>
            <button className="secondary-button">View new arrivals</button>
          </div>
          {showSpecial && <Promo message="Use code SNEAKER20 for a 20% discount!" />}
        </div>
        <div className="hero-highlight">
          <p className="highlight-label">Today&apos;s highlight</p>
          <p className="highlight-text">
            Free shipping on orders over <span className="highlight-amount">90€</span>
          </p>
          <p className="highlight-text">
            30-day returns · Secure payments · Exclusive online drops
          </p>
        </div>
      </section>

      <SneakerQuiz />

      <section className="sneaker-section">
        <div className="section-header" style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <h2 className="section-title">Featured sneakers (Interactive Slider)</h2>
            <p className="section-subtitle">
              Hand-picked silhouettes that combine performance, comfort, and a clean street look.
            </p>
          </div>
          <div className="slider-controls">
            <button className="slider-btn" onClick={prevSlide}>&lt;</button>
            <button className="slider-btn" onClick={nextSlide}>&gt;</button>
          </div>
        </div>

        <div className="slider-container">
          <div className="sneakers-slider" style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}>
            {sneakers.map(sneaker => (
              <div className="slide-item" key={sneaker.id} style={{ minWidth: `${100 / itemsPerView}%` }}>
                <DestinationCard
                  title={sneaker.name}
                  description={sneaker.description}
                  image={sneaker.image}
                  brand={sneaker.brand}
                  price={sneaker.price}
                  isNew={sneaker.isNew}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="section-header">
          <h2 className="section-title">Visit our Flagship Store</h2>
          <p className="section-subtitle">
            Experience UrbanKicks in person.
          </p>
        </div>
        <div className="home-map-wrapper">
          <Map />
        </div>
      </section>

      <ForumFeed />
    </main>
  );
}

export default Home;
