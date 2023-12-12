"use client";

import Banner from "@/components/banner";
import FeaturedContents from "@/components/featuredContents";
import Policies from "@/components/policies";
import { storeId } from "@/constants/storeId";
import { useGetAllProductsQuery } from "@/redux/api/product/productApi";

const HomePage = () => {
  const { data } = useGetAllProductsQuery(storeId);
  console.log("product data : ", data);

  return (
    <div>
      <Banner />
      <div className="my-4 space-y-6">
        <Policies />
        <h3 className="font-bold text-3xl text-center">Featured Contents</h3>
        <FeaturedContents />
      </div>
    </div>
  );
};

export default HomePage;
