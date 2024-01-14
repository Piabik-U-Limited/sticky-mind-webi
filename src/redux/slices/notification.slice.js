import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  success: "",
  error: "",
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setSuccess(state, action) {
      state.success = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setSuccess, setError } = notificationSlice.actions;
export default notificationSlice.reducer;
