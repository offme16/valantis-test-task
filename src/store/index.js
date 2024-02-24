import { configureStore } from "@reduxjs/toolkit";
import { idsReducer } from "./idsSlice";
import { productReducer } from "./productSlice";

export function createRootStore(initialState) {
    const rootReducer = {
      Products: productReducer,
      idProducts: idsReducer,
    };
    return configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    });
}