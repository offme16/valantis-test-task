import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./asyncThunk/getProduct";

const initialState = {
  isLoading: false,
  error: "",
  products: "",
};
export const productSlice = createSlice({
  name: "Product",
  initialState,
  reducers: {
    setField: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;

