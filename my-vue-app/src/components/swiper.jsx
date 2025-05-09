import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import "./swiper.css";
import React, { useEffect } from "react";
import Section from "./section1";
import { Cards } from "./card";

export default function SwiperCards({ cardDetails }) {
  useEffect(() => {
    new Swiper(".swiper-container", {
      direction: "horizontal", // Ensure this is set correctly
    loop: true,
    slidesPerView: 7, // Adjust based on the number of slides visible at once
    spaceBetween: 5, // Adjust spacing between slides
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }
    })
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        {cardDetails &&
          cardDetails.map((item, index) => (
            <div className="swiper-slide" key={index}>
              <Cards item={item} />
            </div>
          ))}
        
      </div>
      {/* <!-- Add Pagination -->
  <div class="swiper-pagination"></div> */}
      {/* <!-- Add Navigation --> */}
      <div className="swiper-button-next">
        <img src='./src/assets/right.png' alt="" />
      </div>
      <div class="swiper-button-prev">
        <img src="./src/assets/left.png" alt="" />
      </div>
    </div>
  );
}
