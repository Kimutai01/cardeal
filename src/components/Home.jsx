import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

const Home = () => {
  return (
    <div className="h-screen">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="h-full"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide className="h-full">
          <img
            src="https://images.pexels.com/photos/17792257/pexels-photo-17792257/free-photo-of-rear-left-side-view-of-a-white-mercedes-benz-eqb-class-on-a-parking-lot.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="h-full w-full object-cover"
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img
            src="https://images.pexels.com/photos/3874337/pexels-photo-3874337.jpeg?auto=compress&cs=tinysrgb&w=800"
            className="h-full w-full object-cover"
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide className="h-full">
          <img
            src="https://images.unsplash.com/photo-1550651001-23e8a91de606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fG1hemRhfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60"
            className="h-full w-full object-cover"
            alt="Slide 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;
