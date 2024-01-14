import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  selectedProduct: {},
  loading: false,
  submitting: false,
  showAddProductModal: false,
  showEditProductModal: false,
  showDeleteProductModal: false,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.products = action.payload;
    },
    setSelectedProduct(state, action) {
      state.selectedProduct = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSubmitting(state, action) {
      state.submitting = action.payload;
    },
    toggleShowAddProductModal(state) {
      state.showAddProductModal = !state.showAddProductModal;
    },
    toggleShowEditProductModal(state) {
      state.showEditProductModal = !state.showEditProductModal;
    },
  },
});

export const {
  setProducts,
  setSelectedProduct,
  setLoading,
  setSubmitting,
  toggleShowAddProductModal,
  toggleShowEditProductModal,
} = productsSlice.actions;

export default productsSlice.reducer;
