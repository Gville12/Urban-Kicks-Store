

function DestinationCard({ title, description, image, brand, price, isNew }) {
  return (
    <article className="sneaker-card">
      <div className="sneaker-card-image-wrapper">
        <img className="sneaker-card-image" src={image} alt={title} />
        {isNew && <span className="sneaker-card-badge">New</span>}
      </div>

      <div className="sneaker-card-body">
        <div className="sneaker-card-header">
          <h3 className="sneaker-card-title">{title}</h3>
          {brand && <p className="sneaker-card-brand">{brand}</p>}
        </div>
        <p className="sneaker-card-description">{description}</p>

        <div className="sneaker-card-footer">
          <span className="sneaker-card-price">{price}€</span>
          <button className="sneaker-card-button">Add to cart</button>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
