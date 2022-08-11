import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import UpdatesData from "../../assets/utilities/updates.json";
import { Link } from "react-router-dom";
function Updates() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container sliderMain">
        <div className="row">
          {UpdatesData.map((data, index) => {
            return (
              <div key={index} className="col-12">
                <div className="bg-primaryColor rounded-2 p-3 mt-5 mb-2">
                  <h1 className="text-white text-center mb-0">{data.name}</h1>
                </div>
                <p className="text-center">{data.date}</p>
                <div className="row mx-0">
                  <div className="col-12">
                    <Slider {...settings}>
                      {data.images.map((img, index2) => {
                        return (
                          <div>
                            <img src={img} className="w-100 rounded-2" alt="" />
                          </div>
                        );
                      })}
                    </Slider>
                  </div>
                </div>
                <div className="text-center">
                  <Link to="/homes">
                    <button className="mt-5 mb-4 visitProject">
                      Visit Project
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Updates;
