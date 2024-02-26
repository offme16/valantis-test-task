import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { getIds } from "./asyncThunk/getIds";

const initialState = {
  isLoading: false,
  error: "",
  ids: [],
  offset: "",
  limit: "",
  currentPage: 1,
};
export const idsSlice = createSlice({
  name: "Ids",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getIds.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(getIds.fulfilled, (state, action) => {
        state.isLoading = false;
        state.ids = action.payload;
      })
      .addCase(getIds.rejected, (state, action) => {
        state.isLoading = false;
        state.error = typeof action.payload === 'string' ? action.payload : 'Произошла ошибка';
      });
  },
});

export const { actions: idsActions } = idsSlice;
export const { reducer: idsReducer } = idsSlice;

