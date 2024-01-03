"use client";

import { useRouter } from "next/navigation";
import ImageSlider from "./imageSlider";
import Currency from "./ui/currency";
import { Button } from "./ui/button";
import { MouseEventHandler } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { handleOpen } from "@/redux/features/productPreview/productPreviewSlice";
import IconButton from "./ui/iconButton";
import { Expand, ShoppingCart } from "lucide-react";

interface ProductCard {
  product: any;
}

const ProductCard: React.FC<ProductCard> = ({ product }) => {
  // const cart = useCart();

  const router = useRouter();

  const handleClick = () => {
    router.push(`/product/${product?._id}`);
  };

  const { isOpen, product: data } = useAppSelector(
    (state) => state.previewModal
  );
  const dispatch = useAppDispatch();

  const onPreview: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    dispatch(handleOpen(product));
  };

  const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    // cart.addItem(data);
  };

  return (
    <div className="bg-white group rounded-xl border p-3 space-y-4">
      {/* Image & actions */}
      <div className="relative aspect-square rounded-xl bg-gray-100">
        <ImageSlider urls={product?.images} />

        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5 z-50">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-gray-600" />}
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div>
        <p className="font-semibold text-lg cursor-pointer">{product?.name}</p>
        <p className="text-sm text-gray-500">{product?.categoryId?.name}</p>
      </div>
      {/* Price & Reiew */}
      <div className="flex items-center justify-between">
        <Currency value={product?.price} />
        <Button onClick={handleClick} variant={"outline"} size={"sm"}>
          Details
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
