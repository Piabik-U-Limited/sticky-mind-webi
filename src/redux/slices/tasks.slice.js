import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  selectedTask: {},
  loading: false,
  submitting: false,
  showAddTaskModal: false,
  showEditTaskModal: false,
  showDeleteTaskModal: false,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    setSelectedTask(state, action) {
      state.selectedTask = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSubmitting(state, action) {
      state.submitting = action.payload;
    },
    toggleShowAddTaskModal(state) {
      state.showAddTaskModal = !state.showAddTaskModal;
    },
    toggleShowEdittaskModal(state) {
      state.showEditTaskModal = !state.showEditTaskModal;
    },
  },
});

export const {
  setTasks,
  setSelectedTask,
  setLoading,
  setSubmitting,
  toggleShowAddTaskModal,
  toggleShowEditTaskModal,
} = tasksSlice.actions;

export default tasksSlice.reducer;
