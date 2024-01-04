export type IProduct = {
  _id: string;
  storeId: object;
  categoryId: object;
  materialId: object;
  caratId: object;
  name: string;
  price: number;
  productCode?: string;
  description: string;
  images: string[];
  isFeatured?: boolean;
  isArchived?: boolean;
  status: "stock" | "stock out";
  stockQuantity: number;
  materials?: string[];
  dimensions?: string;
  discounts?: string;
  ratings?: number;
  returnPolicy?: string;
  customizable?: boolean;
  reviews?: IProductReview[];
};

export type IProductFilter = {
  searchTerm?: string;
  price?: string;
  status?: string;
  ratings?: string;
  materials?: string;
  discounts?: string;
  customizable?: string;
};

export type IProductReview = {
  review: string;
  rating?: number;
};
