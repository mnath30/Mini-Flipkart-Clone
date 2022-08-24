import "./header.css";
import { SearchBar } from "../SearchBar/SearchBar";

const Header = () => {
  return (
    <div className="heading">
      <header className="heading__container">
        <h2 className="heading__brand">Flipkart</h2>
        {/* <span className="heading__input"> */}
        <SearchBar />
        {/* </span> */}
        <span className="heading__btn_section">
          <button>Login</button>
          <button>More </button>
          <button>
            <i class="fas fa-shopping-cart"></i>Cart
          </button>
        </span>
      </header>
    </div>
  );
};

export { Header };
