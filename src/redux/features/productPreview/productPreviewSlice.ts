import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface previewModal {
  isOpen: boolean;
  product?: any;
}

const initialState: previewModal = {
  isOpen: false,
  product: undefined,
};

export const previewModalSlice = createSlice({
  name: "previewModal",
  initialState,
  reducers: {
    handleOpen: (state, action: PayloadAction<any>) => {
      state.isOpen = true;
      state.product = action.payload;
    },
    handleClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { handleOpen, handleClose } = previewModalSlice.actions;

export default previewModalSlice.reducer;
