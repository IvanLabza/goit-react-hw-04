import React from "react";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  return (
    <header>
      <form onSubmit={onSubmit} className={css.searchBar}>
        <input
          type="text"
          autoComplete="off"
          name="searchInput"
          autoFocus
          placeholder="Search images and photos"
          className={css.searchInput}
        />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
