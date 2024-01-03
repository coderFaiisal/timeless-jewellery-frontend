"use client";

import BlogPost from "@/components/blogPost";
import FeaturedContents from "@/components/featuredContents";
import GoToTop from "@/components/goToTop";
import NewArrival from "@/components/newArrival";
import Testimonial from "@/components/testimonial";
import { storeId } from "@/constants/storeId";
import { useGetAllProductsQuery } from "@/redux/api/product/productApi";
import Banner from "./components/banner";
import Policies from "./components/policies";

const HomePage = () => {
  const { data } = useGetAllProductsQuery(storeId);

  return (
    <div>
      <Banner />

      <div className="my-4 space-y-6">
        <Policies />
        <h3 className="font-bold text-xl md:text-2xl lg:text-3xl text-center">
          Featured Contents
        </h3>
        <FeaturedContents />
        <NewArrival />
        <BlogPost />
        <Testimonial />
        <GoToTop />
      </div>
    </div>
  );
};

export default HomePage;
