import React from "react";
import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
 const handleSubmit = (e) => {
   e.preventDefault();
   if (e.target.elements.searchInput.value.trim() !== "") {
     onSubmit(e.target.elements.searchInput.value.trim());
   } else {
     toast.error("This didn't work.", { duration: 1500 });
   }
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
