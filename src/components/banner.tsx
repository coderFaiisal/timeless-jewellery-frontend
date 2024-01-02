"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useGetAllBannersQuery } from "@/redux/api/banner/bannerApi";
import { storeId } from "@/constants/storeId";

const Banner = () => {
  const { data = [] } = useGetAllBannersQuery(storeId);

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
      {data?.map((item: any) => (
        <SwiperSlide key={item?.name}>
          <div className="p-4 sm:p-6 mb-4 lg:p-8 rounded-xl overflow-hidden">
            <div
              style={{ backgroundImage: `url(${item.imageURL})` }}
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
