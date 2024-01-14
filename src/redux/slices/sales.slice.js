import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sales: [],
  selectedSale: {},
  loading: false,
  submitting: false,
  showAddSaleModal: false,
};

const productsSlice = createSlice({
  name: "sales",
  initialState,
  reducers: {
    setSales(state, action) {
      state.sales = action.payload;
    },
    setSelectedSale(state, action) {
      state.selectedSale = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSubmitting(state, action) {
      state.submitting = action.payload;
    },
    toggleShowAddSaleModal(state) {
      state.showAddSaleModal = !state.showAddSaleModal;
    },
  },
});

export const {
  setSales,
  setSelectedSale,
  setLoading,
  setSubmitting,
  toggleShowAddSaleModal,
} = productsSlice.actions;

export default productsSlice.reducer;
