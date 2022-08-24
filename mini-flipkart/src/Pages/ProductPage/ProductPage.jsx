import "./productpage.css";
import { products } from "../../helpers";
import {
  Header,
  SubHeader,
  SideBar,
  ProductCard,
  SortSection,
} from "../../components";
import { useProducts } from "../../context/productContext";
import {
  filterByBrand,
  filterByGender,
  filterByPrice,
  filterBySize,
} from "../../helpers";
import { sortByPrice } from "../../helpers/sortByPrice";

const ProductPage = () => {
  const { productItems } = useProducts();
  const filteredProductsByGender = filterByGender(
    products,
    productItems.gender
  );
  const filteredProductsByBrand = filterByBrand(
    filteredProductsByGender,
    productItems.brand
  );
  const filteredProductsBySizes = filterBySize(
    filteredProductsByBrand,
    productItems.size
  );
  const filteredProductsByPrice = filterByPrice(
    filteredProductsBySizes,
    productItems.price
  );

  let filteredproducts = filteredProductsByPrice;
  if (productItems.sort !== "") {
    filteredproducts = sortByPrice(filteredproducts, productItems.sort);
  }

  return (
    <div className="product">
      <Header />
      <div className="product__container">
        <SideBar classStyle="product__filter" />
        <div className="product__main">
          {filteredproducts.length === 0 && (
            <h2>No products matching the filtered category</h2>
          )}
          {filteredproducts.length !== 0 && (
            <>
              <SubHeader productCount={filteredproducts.length} />
              <SortSection />
              <div className="product__items">
                {filteredproducts.map((item) => (
                  <ProductCard key={item.id} product={item} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProductPage };
