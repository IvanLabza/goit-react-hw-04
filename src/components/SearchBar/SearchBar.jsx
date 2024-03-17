import React from "react";
import css from "./SearchBar.module.css";
import { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(e);
  };
  return (
    <header>
      <form onSubmit={handleSubmit} className={css.searchBar}>
        <input
          type="text"
          autoComplete="off"
          name="searchInput"
          autoFocus
          placeholder="Search images and photos"
          className={css.searchInput}
        />
        <Toaster gutter={1} position="top-right" reverseOrder={false} />
        <button className={css.searchBtn} type="submit">
          Search
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
