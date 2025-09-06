import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Cards } from "./card";
import "./swiper.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SongCards from "./songCards";
import SongsHeroSection from "../songsPage/hero";
import { useNavigate } from "react-router-dom";
import leftArrow from "../assets/left.png";
import rightArrow from "../assets/right.png";

export default function SwiperCards({ cardDetails = [], uniqueId, category }) {
  let [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  let navigate = useNavigate();

  let handleAlbumClick = (item, id) => {
    console.log('card is being clicked:', item);
    // SongsHeroSection({ item, id });
    navigate(`/album/${id}`, { state: { item } });
  };

  return (
    <div className="swiper-container" data-category={uniqueId}>
      <div className="swiper-wrapper">
        <Swiper
          modules={[Navigation]}
          spaceBetween={0}
          slidesPerView={7}
          initialSlide={0}
          centeredSlides={false}
          loop={false}
          navigation={{
            nextEl: `.swiper-button-next-${uniqueId}`,
            prevEl: `.swiper-button-prev-${uniqueId}`,
            clickable: true,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {cardDetails &&
            cardDetails.map((item, index) => (
              <SwiperSlide key={index}>
                {category === "Songs" ? (
                  <SongCards item={item} />
                ) : (
                  <Cards item={item} onClick={() => handleAlbumClick(item, item.id)} />    
                )}
              </SwiperSlide>
            ))}
        </Swiper>

        <div
          className={`swiper-button-prev-${uniqueId} ${
            activeIndex === 0 ? "disabled" : ""
          }`}
          onClick={() => swiperRef.current?.slidePrev()}
        >
           <img src={leftArrow} alt="Previous" />
        </div>

        <div
          className={`swiper-button-next-${uniqueId} ${
            activeIndex >= (cardDetails?.length || 0) - 7 ? "disabled" : ""
          }`}
          onClick={() => swiperRef.current?.slideNext()}
        >
            <img src={rightArrow} alt="Next" />
        </div>
      </div>
    </div>
  );
}


