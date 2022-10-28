import React from "react";
import Search from "../../Main/_part/Search";

function Banner({ text, onSearch, defaultFilterValue, showSearch }) {
  return (
    <div className="bannerMain">
      <img src="/imgs/HomeBanner3.jpg" alt="" />
      <h1>{text ? text : ""}</h1>
      {showSearch && <Search onSearch={onSearch} defaultFilterValue={defaultFilterValue}
        customStyle={{ "bottom": "35%" }}
      />}
    </div>
  );
}

export default Banner;
