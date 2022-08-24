import { genders, brands, sizes } from "../../helpers";
import { CheckBoxInput } from "../CheckBoxInput/CheckBoxInput";
import {
  FILTER_BY_BRAND,
  FILTER_BY_GENDER,
  FILTER_BY_PRICE,
  FILTER_BY_SIZE,
  CLEAR_ALL,
} from "../../helpers/constants";
import { useProducts } from "../../context/productContext";

const SideBar = ({ classStyle }) => {
  const { productItems, productReducer } = useProducts();

  const handleUpdate = (item) => {
    console.log(item);
    productReducer(item);
  };
  return (
    <div className={classStyle}>
      <button onClick={() => productReducer({ type: CLEAR_ALL })}>
        Clear All
      </button>
      <div className="sidebar__section">
        <input
          type="range"
          max="5000"
          min="1000"
          step="500"
          value={productItems.price}
          onChange={(e) =>
            productReducer({ type: FILTER_BY_PRICE, payload: e.target.value })
          }
        />
        <h4>Price:{productItems.price}</h4>
      </div>
      <div>
        <h4 className="subheadings">Genders</h4>
        {genders.map((gender) => (
          <CheckBoxInput
            key={gender}
            item={gender}
            dispatch={productReducer}
            type={FILTER_BY_GENDER}
            payload={gender}
            category="gender"
            changeHandler={handleUpdate}
            presentInlist={productItems.gender.includes(gender.toLowerCase())}
          />
        ))}
      </div>
      <div>
        <h4 className="subheadings">Brands</h4>
        {brands.map((brand) => (
          <CheckBoxInput
            key={brand}
            item={brand}
            dispatch={productReducer}
            type={FILTER_BY_BRAND}
            payload={brand}
            category="brands"
            changeHandler={handleUpdate}
            presentInlist={productItems.brand.includes(brand.toLowerCase())}
          />
        ))}
      </div>
      <div>
        <h4 className="subheadings">Sizes</h4>
        {sizes.map((size) => (
          <CheckBoxInput
            key={size}
            item={size}
            dispatch={productReducer}
            type={FILTER_BY_SIZE}
            payload={size}
            category="sizes"
            changeHandler={handleUpdate}
            presentInlist={productItems.size.includes(size.toUpperCase())}
          />
        ))}
      </div>
    </div>
  );
};

export { SideBar };
