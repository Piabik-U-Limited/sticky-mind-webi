import { createSlice } from "@reduxjs/toolkit";
const date = new Date().getHours();
const defaultThemne= date > 6 && date < 18 ? "light" : "dark";
const initialState = {
  mode: "light",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeMode(state, action) {
      state.mode = action.payload;
    },
  },
});

export const { changeMode } = themeSlice.actions;
export default themeSlice.reducer;
