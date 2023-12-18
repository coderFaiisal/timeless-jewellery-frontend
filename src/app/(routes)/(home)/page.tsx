"use client";

import Banner from "@/components/banner";
import BlogPost from "@/components/blogPost";
import FeaturedContents from "@/components/featuredContents";
import GoToTop from "@/components/goToTop";
import NewArrival from "@/components/newArrival";
import Policies from "@/components/policies";
import Testimonial from "@/components/testimonial";
import { storeId } from "@/constants/storeId";
import { useGetAllProductsQuery } from "@/redux/api/product/productApi";

const HomePage = () => {
  const { data } = useGetAllProductsQuery(storeId);

  return (
    <div>
      <Banner />
      <div className="my-4 space-y-6">
        <Policies />
        <h3 className="font-bold text-3xl text-center">Featured Contents</h3>
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
