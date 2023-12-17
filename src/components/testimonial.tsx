"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay } from "swiper/modules";
import CustomImage from "./customImage";
import image from "../assets/banner-1.jpg";

const Testimonial = () => {
  return (
    <div className=" min-h-96">
      <div className="text-center pt-8">
        <h1 className=" text-3xl font-semibold"> Client Testimonials</h1>
        <p>What they say</p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center py-8">
            <CustomImage
              src={image}
              alt="banner image"
              className="rounded-full w-28 h-28"
            />
            <div className="text-center pt-8 ">
              <p className=" w-3/4 mx-auto mb-4">
                All Perfect!!! I have three products from Timeless. Those
                jewellery are best of best. Excellent build quality and color
                temperatures. Recommended...
              </p>
              <p className="text-lg font-bold">
                Joe Doe / <span className=" text-sm font-normal">Customer</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
