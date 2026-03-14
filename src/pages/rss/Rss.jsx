import "./Rss.css";

function Rss() {
    const rssFeeds = [
        {
            title: "Hypebeast Sneakers",
            description: "Latest drops, collabs, and sneaker news across the globe.",
            link: "https://hypebeast.com/footwear"
        },
        {
            title: "SneakerNews Releases",
            description: "Up-to-date release dates for Jordan, Nike, adidas, and more.",
            link: "https://sneakernews.com/release-dates/"
        },
        {
            title: "Complex Sneakers",
            description: "Deep dives into sneaker culture, history, and exclusive interviews.",
            link: "https://www.complex.com/sneakers/"
        }
    ];

    return (
        <main className="rss-page">
            <section className="rss-header-section">
                <h1 className="rss-title">RSS Feeds</h1>
                <p className="rss-subtitle">Stay up-to-date with the latest sneaker world news.</p>
                <div style={{ marginTop: "1.5rem" }}>
                    <a href="/feed.xml" target="_blank" className="rss-link" style={{ fontSize: "1.2rem", padding: "0.5rem 1rem", border: "2px solid var(--primary-color)", borderRadius: "8px" }}>
                        Subscribe to our Raw XML Feed
                    </a>
                </div>
            </section>

            <section className="rss-content-section">
                <div className="rss-grid">
                    {rssFeeds.map((feed, index) => (
                        <div key={index} className="rss-card">
                            <h2 className="rss-card-title">{feed.title}</h2>
                            <p className="rss-card-desc">{feed.description}</p>
                            <a href={feed.link} target="_blank" rel="noopener noreferrer" className="rss-link">
                                Go to source →
                            </a>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default Rss;
