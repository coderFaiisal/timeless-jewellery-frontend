"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import Loader from "@/components/loader";

import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { useGetAllBannersQuery } from "@/redux/api/banner/bannerApi";
import { storeId } from "@/constants/storeId";
import CustomImage from "@/components/customImage";

const Banner = () => {
  const { data: banners = [], isLoading } = useGetAllBannersQuery(storeId);

  if (isLoading) {
    return <Loader className="min-h-screen w-full" />;
  }

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
      {banners?.map((banner: any) => (
        <SwiperSlide key={banner?.label}>
          <div className="p-4 sm:p-6 mb-4 lg:p-8 rounded-xl overflow-hidden">
            <CustomImage
              src={banner?.imageURL}
              alt={banner?.label}
              priority={true}
              className=" aspect-[2.1/1] bg-cover"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
