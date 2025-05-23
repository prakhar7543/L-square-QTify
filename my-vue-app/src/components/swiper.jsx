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
// import { useNavigate } from "react-router-dom";

export default function SwiperCards({ cardDetails = [], uniqueId, category }) {
  let [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  // let navigate = useNavigate();

  // let handleAlbumClick = (item) => {
  //   console.log('card is being clicked:', item);
  //   SongsHeroSection({ item });
  //   navigate(`/album/${id}`, { state: { item } });
  // };

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
                  <Cards item={item}  />    //onClick={() => handleAlbumClick(item, item.id)}
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
          <img src="./src/assets/left.png" alt="Previous" />
        </div>

        <div
          className={`swiper-button-next-${uniqueId} ${
            activeIndex >= (cardDetails?.length || 0) - 7 ? "disabled" : ""
          }`}
          onClick={() => swiperRef.current?.slideNext()}
        >
          <img src="./src/assets/right.png" alt="Next" />
        </div>
      </div>
    </div>
  );
}

// import Swiper from "swiper/bundle";
// import "swiper/swiper-bundle.css";
// import "./swiper.css";
// import React, { useEffect, useState } from "react";
// import Section from "./section1";
// import { Cards } from "./card";

// export default function SwiperCards({ cardDetails, category }) {
//   const [swiperInstance, setSwiperInstance] = useState(null);
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   useEffect(() => {
//     console.log(`Initializing Swiper for category: ${category}`);

//     const navigationOptions = category === 'Top Albums' ? {
//       nextEl: `.swiper-button-next-Top Albums`,
//       prevEl: `.swiper-button-prev-Top Albums`,
//       clickable: true,
//     } : {
//       nextEl: `.swiper-button-next-New Albums`,
//       prevEl: `.swiper-button-prev-New Albums`,
//       clickable: true,
//     };

//     const swiper = new Swiper(".swiper-container", {
//       direction: "horizontal",
//       loop: true,
//       slidesPerView: 7,
//       spaceBetween: 5,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//       navigation: navigationOptions,
//       on: {
//         slideChange: function () {
//           setIsBeginning(this.isBeginning);
//           setIsEnd(this.isEnd);
//         },
//       },
//     });

//     setSwiperInstance(swiper);

//      return () => {
//       if(swiper &&  typeof swiper.destroy === 'function'){
//         console.log(`Destroying Swiper for category": ${category}`);
//         swiper.destroy(true, true);
//       }else{
//          console.error('Swiper instance is not valid or destroy method is not available');
//       }    };
//   }, [category]);

//   return (
//     <div className="swiper-container">
//       <div className="swiper-wrapper">
//         {cardDetails &&
//           cardDetails.map((item, index) => (
//             <div className="swiper-slide" key={index}>
//               <Cards item={item} />
//             </div>
//           ))}
//       </div>

//       {category === 'Top Albums' ? (
//         <>
//           {!isBeginning && (
//             <div className="swiper-button-prev-Top Albums">
//               <img src="./src/assets/left.png" alt="prev" />
//             </div>
//           )}
//           {!isEnd && (
//             <div className="swiper-button-next-Top Albums">
//               <img src="./src/assets/right.png" alt="next" />
//             </div>
//           )}
//         </>
//       ) : (
//         <>
//           {!isBeginning && (
//             <div className="swiper-button-prev-New Albums">
//               <img src="./src/assets/left.png" alt="prev" />
//             </div>
//           )}
//           {!isEnd && (
//             <div className="swiper-button-next-New Albums">
//               <img src="./src/assets/right.png" alt="next" />
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }
