import React from "react";
import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ loadMore }) => {
  return (
    <div className={css.wraps}>
      <button onClick={loadMore} className={css.btn}>
        Load More
      </button>
    </div>
  );
};

export default LoadMoreBtn;
