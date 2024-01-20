import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  tokens: null,
  loading: false,
  submitting: false,
  company: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setTokens(state, action) {
      state.tokens = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSubmitting(state, action) {
      state.submitting = action.payload;
    },
    setCompany(state, action) {
      state.company = action.payload;
    },
  },
});

export const { setUser, setTokens, setLoading, setSubmitting, setCompany } =
  authSlice.actions;

  export default authSlice.reducer;
  
