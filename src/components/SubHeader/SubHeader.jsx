import "./subheader.css";

const SubHeader = ({ productCount }) => {
  return (
    <div className="subheader">
      <h3 className="subheader__heading">Clothing And Accessories</h3>
      <p>
        Showing 1-{productCount} products of {productCount} products
      </p>
    </div>
  );
};

export { SubHeader };
