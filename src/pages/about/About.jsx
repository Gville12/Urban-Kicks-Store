
import "./About.css";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <h1 className="about-title">Designed for the street. Built for all-day comfort.</h1>
        <p className="about-subtitle">
          UrbanKicks is a fictional sneaker brand focused on clean silhouettes, quality materials,
          and a simple online experience for discovering your next pair.
        </p>
      </section>

      <section className="about-grid">
        <article className="about-card">
          <h2 className="about-card-title">Our mission</h2>
          <p className="about-card-text">
            We curate a compact selection of sneakers instead of endless scrolling. Each pair in our
            catalog is chosen for its comfort, versatility, and ability to work from the office to
            late-night city walks.
          </p>
        </article>

        <article className="about-card">
          <h2 className="about-card-title">Design approach</h2>
          <p className="about-card-text">
            The UrbanKicks UI focuses on clear hierarchy, generous spacing, and readable typography
            so you can compare products quickly without visual noise or distractions.
          </p>
        </article>

        <article className="about-card">
          <h2 className="about-card-title">Sustainable choices</h2>
          <p className="about-card-text">
            This demo highlights how a store can clearly communicate materials, durability, and care
            instructions to help users choose sneakers that last longer and reduce unnecessary
            returns.
          </p>
        </article>
      </section>
    </main>
  );
}

export default About;

