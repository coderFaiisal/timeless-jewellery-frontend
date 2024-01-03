"use client";

import { useGetAllProductsQuery } from "@/redux/api/product/productApi";
import { storeId } from "@/constants/storeId";
import ImageSlider from "./imageSlider";

const NewArrival = () => {
  const { data: products = [] } = useGetAllProductsQuery(storeId);

  return (
    <div className=" min-h-96 my-6 lg:my-12">
      <div className="text-center pt-8">
        <h1 className="text-3xl font-semibold">New Arrivals</h1>
        <p className="text-sm opacity-60">
          Here is new arrivals to weekly lineup
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-11/12 mx-auto mt-10">
        {products?.map((product: any) => (
          <div key={product?.title}>
            <div className="">
              <ImageSlider urls={product?.images} />
            </div>
            <div className="mt-2 text-center">
              <h1 className="text-sm opacity-60">
                {product?.categoryId?.name}
              </h1>
              <h1>{product?.name}</h1>
              <p>$ {product?.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
