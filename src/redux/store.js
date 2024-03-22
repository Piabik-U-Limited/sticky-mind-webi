import { configureStore } from "@reduxjs/toolkit";
import staffSlice from "./slices/staffSlice";
import themeSlice from "./slices/themeSlice";
import productsSlice from "./slices/products.slice";
import notificationSlice from "./slices/notification.slice";
import salesSlice from "./slices/sales.slice";
import categoriesSlice from "./slices/categories.slice";
import dashbardSlice from "./slices/dashbard.slice";
import authSlice from "./slices/auth.slice";
import batchesSlice from "./slices/batches.slice";
import tasksSlice from "./slices/tasks.slice";
const store = configureStore({
  reducer: {
    staff: staffSlice,
    theme: themeSlice,
    products: productsSlice,
    notification: notificationSlice,
    sales: salesSlice,
    categories: categoriesSlice,
    dashboard: dashbardSlice,
    auth: authSlice,
    batches: batchesSlice,
    tasks: tasksSlice,
  },
});
export default store;
