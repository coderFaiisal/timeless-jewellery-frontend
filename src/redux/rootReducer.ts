import { baseApi } from "./api/baseApi";
import cartReducer from "./features/cart/cartSlice";
import previewModalReducer from "./features/productPreview/productPreviewSlice";

export const reducer = {
  cart: cartReducer,
  previewModal: previewModalReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
