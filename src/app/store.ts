import { configureStore } from "@reduxjs/toolkit";

// configurestore is a wrapper over create store method of redux
// it automatically add the thunk middleware, turns couple of development checks

import counterReducer from "../features/counter/counter.slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
