// pages/home/Home.jsx
import { sneakers } from "../../data/sneakers";
import DestinationCard from "../../components/destination-card/DestinationCard";
import "./Home.css";

function Home() {
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
            <button className="primary-button">Shop best sellers</button>
            <button className="secondary-button">View new arrivals</button>
          </div>
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

      <section className="sneaker-section">
        <div className="section-header">
          <h2 className="section-title">Featured sneakers</h2>
          <p className="section-subtitle">
            Hand-picked silhouettes that combine performance, comfort, and a clean street look.
          </p>
        </div>

        <div className="sneakers-grid">
          {sneakers.map(sneaker => (
            <DestinationCard
              key={sneaker.id}
              title={sneaker.name}
              description={sneaker.description}
              image={sneaker.image}
              brand={sneaker.brand}
              price={sneaker.price}
              isNew={sneaker.isNew}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
