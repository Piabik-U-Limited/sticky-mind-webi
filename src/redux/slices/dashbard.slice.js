import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dashboardData: {},
  loading: false,
  stats: [],
  
  statType:"daily"
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
    setStats(state, action) {
      state.stats = action.payload;
    },
    setStatType(state, action) {
      state.statType = action.payload;
    }
  },
});

export const { setDashbaordData, setLoading, setStats,setStatType } =
  dashboardSlice.actions;
export default dashboardSlice.reducer;
