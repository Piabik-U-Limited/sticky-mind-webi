import { configureStore } from "@reduxjs/toolkit";
import staffSlice from "./slices/staffSlice";
import themeSlice from "./slices/themeSlice";

const store = configureStore({
  reducer: {
    staff: staffSlice,
    theme: themeSlice,
  },
});
export default store;
