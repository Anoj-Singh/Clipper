import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, Pagination } from "swiper";
import "swiper/css/bundle";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Card({ flipCard }) {
  const [cards] = useState(JSON.parse(flipCard?.contents.imgs));
  return (
    <div className="swiper-box">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Navigation, Pagination]}
        className="mySwiper"
        loop={true}
        clickable={true}
        slideToClickedSlide={true}
        navigation={{ prevEl: ".swiper-button-prev" }}
      >
        {cards?.map((card, index) => (
          <SwiperSlide className="swiperSlide" key={`flipcard-${index}`}>
            <img src={card.url} alt={card.alt} style={{ height: "100%" }} />
          </SwiperSlide>
        ))}

        <div className="swiper-button-prev"></div>
      </Swiper>
    </div>
  );
}
