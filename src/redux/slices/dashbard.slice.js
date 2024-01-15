import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboardData: {},
  loading: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setDashbaordData(state, action) {
      state.dashboardData = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
  },
});

export const { setDashbaordData, setLoading } = dashboardSlice.actions;
export default dashboardSlice.reducer;
