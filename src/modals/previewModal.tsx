"use client";

import ImageSlider from "@/components/imageSlider";
import Info from "@/components/info";
import { Modal } from "@/components/ui/Modal";
import { handleClose } from "@/redux/features/productPreview/productPreviewSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";

const PreviewModal = () => {
  const { isOpen, product } = useAppSelector(
    (state: any) => state.previewModal
  );

  const dispatch = useAppDispatch();
  const onClose = () => dispatch(handleClose());

  if (!product) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8 mt-6">
        <div className="sm:col-span-4 lg:col-span-5">
          <ImageSlider urls={product.images} />
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={product} />
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
