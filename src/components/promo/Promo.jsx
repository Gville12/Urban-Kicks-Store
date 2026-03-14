
function Promo({ message }) {
    return (
        <div style={{
            padding: '20px',
            background: 'var(--border-color)',
            color: 'var(--text-color)',
            textAlign: 'center',
            margin: '20px 0',
            borderRadius: '8px',
            border: '1px solid var(--primary-color)'
        }}>
            <strong>PROMO: </strong> {message}
        </div>
    );
}

export default Promo;
