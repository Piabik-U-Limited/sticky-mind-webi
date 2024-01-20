import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  batches: [],
  selectedBatch: {},
  loading: false,
  submitting: false,
  showAddBatchModal: false,
  showEditBatchModal: false,
  showDeleteBatchModal: false,
};

const batchesSlice = createSlice({
  name: "batches",
  initialState,
  reducers: {
    setBatches(state, action) {
      state.batches = action.payload;
    },
    setSelectedBatch(state, action) {
      state.selectedBatch = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSubmitting(state, action) {
      state.submitting = action.payload;
    },
    toggleShowAddBatchModal(state) {
      state.showAddBatchModal = !state.showAddBatchModal;
    },
    toggleShowEditBatchModal(state) {
      state.showEditBatchModal = !state.showEditBatchModal;
    },
  },
});

export const {
  setBatches,
  setSelectedBatch,
  setLoading,
  setSubmitting,
  toggleShowAddBatchModal,
  toggleShowEditBatchModal,
} = batchesSlice.actions;

export default batchesSlice.reducer;
