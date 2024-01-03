"use client";


import { useRouter } from "next/navigation";
import ImageSlider from "./imageSlider";
import Currency from "./ui/currency";

interface ProductCard {
  product: any;
}

const ProductCard: React.FC<ProductCard> = ({ product }) => {
  //   const previewModal = usePreviewModal();
  //   const cart = useCart();
  const router = useRouter();

  const handleClick = () => {
    // router.push(`/product/${product?._id}`);
  };



  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4"
    >
      {/* Image & actions */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <ImageSlider urls={product?.images} />
        
      </div>
      {/* Description */}
      <div>
        <p className="font-semibold text-lg">{product?.name}</p>
        <p className="text-sm text-gray-500">{product?.category?.name}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency value={product?.price} />
      </div>
    </div>
  );
};

export default ProductCard;
