import React from "react";
import css from "./LeadMoreBtn.module.css";

const LeadMoreBtn = ({loadMore}) => {
  return (
    <div className={css.wraps}>
          <button  onClick={loadMore} className={css.btn}>Load More</button>
    </div>
  );
};

export default LeadMoreBtn;
