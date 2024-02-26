import { buildCreateSlice, createSlice } from "@reduxjs/toolkit";
import { getIds } from "./asyncThunk/getIds";

const initialState = {
  isLoading: false,
  error: "",
  ids: [],
  offset: 0,
  limit: 50,
  currentPage: 1,
};
export const idsSlice = createSlice({
  name: "Ids",
  initialState,
  reducers: {
    updateOffsetAndPage: (state, action) => {
      state.offset = action.payload.offset;
      state.currentPage = action.payload.currentPage;
    },
  },
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

