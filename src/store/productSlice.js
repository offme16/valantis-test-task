import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./asyncThunk/getProduct";

const initialState = {
  isLoading: false,
  error: "",
  page: "",
  limit: "",
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
      .addCase(registUser.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(registUser.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(registUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: productActions } = productSlice;
export const { reducer: productReducer } = productSlice;

