import { configureStore, createImmutableStateInvariantMiddleware } from "@reduxjs/toolkit";
import itemRequestSlice from "./slices/itemRequestSlice";
import orderSlice from "./slices/orderSlice";
import userSlice from "./slices/userSlice";

import thunk from "redux-thunk";

const immutableInvariantMiddleware = createImmutableStateInvariantMiddleware({
  ignoredPaths: ["ignoredPath", "ignoredNested.one", "ignoredNested.two"],
});
const store = configureStore({
  reducer: {
    items: itemRequestSlice,
    orders: orderSlice,
    user: userSlice,
  },
  middleware: [immutableInvariantMiddleware, thunk],
  devTools: true,
});

export default store;
