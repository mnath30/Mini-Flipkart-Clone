import { useProducts } from "../../context/productContext";
import { SORT } from "../../helpers/constants";

const SortSection = () => {
  const { productItems, productReducer } = useProducts();

  return (
    <div className="align-left">
      <span>Sort By</span>
      <span>
        <button
          className={productItems.sort === "ascending" ? "active" : ""}
          onClick={() => productReducer({ type: SORT, payload: "ascending" })}
        >
          Price- Low to High
        </button>
      </span>
      <span>
        <button
          className={productItems.sort === "descending" ? "active" : ""}
          onClick={() => productReducer({ type: SORT, payload: "descending" })}
        >
          Price- High to Low
        </button>
      </span>
    </div>
  );
};

export { SortSection };
