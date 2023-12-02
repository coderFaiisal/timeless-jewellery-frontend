"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";
import banner3 from "../assets/banner-3.jpg";
import banner4 from "../assets/banner-4.jpg";
import banner5 from "../assets/banner-5.jpg";
import banner6 from "../assets/banner-6.jpg";

import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Banner = () => {
  const items = [
    {
      link: banner1,
      name: "image1",
      title: "A NEW LOVE",
      description:
        "The iconic Love bracelet, now in a brushed finish. Lock in your love, forever",
    },
    {
      link: banner2,
      name: "image2",
      title: "STACKING STORIES",
      description:
        "Every stack has a story. Rewrite the rules of stacking with style statements that express your personality.",
    },
    {
      link: banner3,
      name: "image3",
      title: "STACKING STORIES",
      description:
        "Every stack has a story. Rewrite the rules of stacking with style statements that express your personality.",
    },
    {
      link: banner4,
      name: "image4",
      title: "STACKING STORIES",
      description:
        "Every stack has a story. Rewrite the rules of stacking with style statements that express your personality.",
    },
    {
      link: banner5,
      name: "image5",
      title: "A NEW LOVE",
      description:
        "The iconic Love bracelet, now in a brushed finish. Lock in your love, forever",
    },
    {
      link: banner6,
      name: "image6",
      title: "A NEW LOVE",
      description:
        "The iconic Love bracelet, now in a brushed finish. Lock in your love, forever",
    },
  ];

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper w-full h-full cursor-pointer"
    >
      {items?.map((item) => (
        <SwiperSlide key={item?.name}>
          <div className="p-4 sm:p-6 mb-4 lg:p-8 rounded-xl overflow-hidden">
            <div
              style={{ backgroundImage: `url(${item.link})` }}
              className="rounded-xl relative aspect-[2.4/1] overflow-hidden bg-cover bg-red-50"
            >
              <div className="h-full w-full flex flex-col justify-center items-center text-center">
                <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs">
                  {item.title}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
