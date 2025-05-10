import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import "./swiper.css";
import React, { useEffect, useState } from "react";
import Section from "./section1";
import { Cards } from "./card";

export default function SwiperCards({ cardDetails, category }) {
  let [swiperInstance, setSwiperInstance] = useState(null);
  let [isBeginning, setIsBeginning] = useState(true);
  let [isEnd, setIsEnd] = useState(false);
  useEffect(() => {
    let swiper = new Swiper(".swiper-container", {
      direction: "horizontal", // Ensure this is set correctly
      loop: true,
      slidesPerView: 7, // Adjust based on the number of slides visible at once
      spaceBetween: 5, // Adjust spacing between slides
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: `.swiper-button-next-${category}`,
        prevEl: `.swiper-button-prev-${category}`,
        
      },

      on: {
        slideChange: function () {
          setIsBeginning(this.isBegining);
          setIsEnd(this.isEnd);
        },
      },
    });

    setSwiperInstance(swiper);
  }, [category]);

  

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

      {!isBeginning && (
        <div className={`swiper-button-prev-${category}`}>
          <img src="./src/assets/left.png" alt="prev" />
        </div>
      )}

      {!isEnd && (
        <div className={`swiper-button-next-${category}`}>
          <img src="./src/assets/right.png" alt="next" />
        </div>
      )}
    </div>
  );
}
