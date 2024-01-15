import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  selectedCategory: {},
  loading: false,
  submitting: false,
  showAddCategoryModal: false,
  showEditCategoryModal: false,
  showDeleteCategoryModal: false,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategoriess(state, action) {
      state.categories = action.payload;
    },
    setSelectedCategory(state, action) {
      state.selectedCategory = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSubmitting(state, action) {
      state.submitting = action.payload;
    },
    toggleShowAddCategoryModal(state) {
      state.showAddCategoryModal = !state.showAddCategoryModal;
    },
    toggleShowEditCategoryModal(state) {
      state.showEditCategoryModal = !state.showEditCategoryModal;
    },
  },
});

export const {
  setCategoriess,
  setSelectedCategory,
  setLoading,
  setSubmitting,
  toggleShowAddCategoryModal,
  toggleShowEditCategoryModal,
} = categoriesSlice.actions;

export default categoriesSlice.reducer;
