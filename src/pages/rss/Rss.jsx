
function Rss() {
    const containerStyle = {
        padding: '100px 20px',
        textAlign: 'center',
        minHeight: '60vh'
    };

    return (
        <main style={containerStyle}>
            <h1>Información RSS</h1>
            <p>El RSS es un formato para distribuir contenido en la web.</p>
            <div style={{ marginTop: '30px' }}>
                <a
                    href="https://www.sneakernews.com/feed/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ padding: '10px 20px', background: '#000', color: '#fff', textDecoration: 'none', borderRadius: '5px' }}
                >
                    Suscribirse al RSS de SneakerNews
                </a>
            </div>
        </main>
    );
}

export default Rss;
