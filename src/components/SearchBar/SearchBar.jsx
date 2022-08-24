import "./searchbar.css";

const SearchBar = () => {
  return (
    <div className="search__container">
      <input
        type="text"
        placeholder="Search for products,brands and more"
        className="search__input"
      />
      <button className="search__btn">
        <i class="fas fa-search"></i>
      </button>
    </div>
  );
};

export { SearchBar };
