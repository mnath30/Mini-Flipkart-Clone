import { initialState } from "../helpers";
import {
  FILTER_BY_BRAND,
  FILTER_BY_PRICE,
  FILTER_BY_GENDER,
  FILTER_BY_SIZE,
  SORT,
  CLEAR_ALL,
} from "../helpers/constants";

const reducer = (state, action) => {
  switch (action.type) {
    case FILTER_BY_BRAND:
      const brandlist = state.brand.includes(action.payload.toLowerCase())
        ? state.brand.filter(
            (item) => item.toLowerCase() !== action.payload.toLowerCase()
          )
        : [...state.brand, action.payload.toLowerCase()];
      console.log(state.brand);
      return { ...state, brand: [...brandlist] };

    case FILTER_BY_GENDER:
      console.log(
        state.gender.includes(action.payload.toLowerCase()),
        action.payload
      );
      const genderlist = state.gender.includes(action.payload.toLowerCase())
        ? state.gender.filter(
            (item) => item.toLowerCase() !== action.payload.toLowerCase()
          )
        : [...state.gender, action.payload.toLowerCase()];
      console.log(state.genderlist, state);
      return { ...state, gender: [...genderlist] };

    case FILTER_BY_SIZE:
      const sizelist = state.size.includes(action.payload.toUpperCase())
        ? state.size.filter(
            (item) => item.toUpperCase() !== action.payload.toUpperCase()
          )
        : [...state.size, action.payload.toUpperCase()];
      console.log(state.size);
      return { ...state, size: [...sizelist] };

    case FILTER_BY_PRICE:
      return { ...state, price: action.payload };

    case SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case CLEAR_ALL:
      return initialState;
    default:
      return state;
  }
};

export { reducer };
