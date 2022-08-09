import React from "react";

function Banner({ text }) {
  return (
    <div className="bannerMain">
      <img src="/imgs/HomeBanner3.jpg" alt="" />
      <h1>{text ? text : ""}</h1>
    </div>
  );
}

export default Banner;
