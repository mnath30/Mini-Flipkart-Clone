import { useContext, createContext, useReducer } from "react";
import { reducer } from "../reducer/reducer";
import { initialState } from "../helpers";

const productContext = createContext(initialState);

const useProducts = () => useContext(productContext);

const ProductProvider = ({ children }) => {
  const [productItems, productReducer] = useReducer(reducer, initialState);
  return (
    <productContext.Provider value={{ productItems, productReducer }}>
      {children}
    </productContext.Provider>
  );
};

export { ProductProvider, useProducts };
