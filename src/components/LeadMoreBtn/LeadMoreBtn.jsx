import React from "react";
import css from "./LeadMoreBtn.module.css";

const LeadMoreBtn = () => {
  return (
    <div className={css.wraps}>
          <button className={css.btn}>Load More</button>
    </div>
  );
};

export default LeadMoreBtn;
