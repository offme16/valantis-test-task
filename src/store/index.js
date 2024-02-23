import { configureStore } from "@reduxjs/toolkit";

export function createRootStore(initialState) {
    const rootReducer = {
      Product: registReducer,
    };
    return configureStore({
      reducer: rootReducer,
      preloadedState: initialState,
    });
}