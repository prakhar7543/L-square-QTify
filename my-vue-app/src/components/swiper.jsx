import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import "./swiper.css";
import React, { useEffect } from "react";
import Section from "./section1";
import { Cards } from "./card";

export default function SwiperCards({ cardDetails }) {
  useEffect(() => {
    let swiper = new Swiper(".swiper-container", {
      // Optional parameters
      direction: "vertical",
      loop: true,

      // If we need pagination
    //   pagination: {
    //     el: ".swiper-pagination",
    //   },

      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      // And if we need scrollbar
    //   scrollbar: {
    //     el: ".swiper-scrollbar",
    //   },
    });
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
      <div className="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  );
}
