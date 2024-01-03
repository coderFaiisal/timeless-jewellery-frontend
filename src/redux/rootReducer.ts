import { baseApi } from "./api/baseApi";
import previewModalReducer from "./features/productPreview/productPreviewSlice";

export const reducer = {
  previewModal: previewModalReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
