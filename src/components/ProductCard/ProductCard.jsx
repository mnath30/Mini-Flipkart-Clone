import "./productcard.css";

const ProductCard = ({ product }) => {
  const { size, brand, price, imageURL, info, itemName } = product;
  return (
    <div className="card__container">
      <div className="card__container_img">
        <img className="card__img" src={imageURL} alt={info} />
      </div>
      <div className="card__details">
        <p className="product__brand">{brand}</p>
        <h3 className="product__name">{itemName}</h3>
        <h4 className="product__price">Rs. {price}</h4>
        <p className="product__size">Size {size}</p>
      </div>
    </div>
  );
};

export { ProductCard };
