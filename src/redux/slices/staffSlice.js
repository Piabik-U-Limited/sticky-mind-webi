import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staffHierarchy: [],
  staffMembers: [
    {
      id: "90",
      role: "Board of Directors (BOD)",
      name: "Sylvia Mugereka",
      subordinates: [
        {
          id: "1",
          role: "Chief Excecutive Officer (CEO)",
          name: "Kevin Wangira",
          subordinates: [
            {
              id: "2",
              role: "Chief Financial Officer (CFO)",
              name: "Juliet Nekesa",
              subordinates: [
                {
                  id: "52",
                  role: "Internal Audit",
                  name: "Nalujja Jacinta",
                  subordinates: [],
                },
                {
                  id: "53",
                  role: "Accountant",
                  name: "Adong Holga",
                  subordinates: [],
                },
              ],
            },
            {
              id: "3",
              role: "Chief Operating Officer (COO)",
              name: "Kenneth Bwire",
              subordinates: [
                {
                  id: "8",
                  role: "Human Resources",
                  name: "Janet Nalukwago",
                  subordinates: [],
                },
                {
                  id: "9",
                  role: "Operations Manager",
                  name: "Micheal Smith",
                  subordinates: [],
                },
              ],
            },
            {
              id: "4",
              role: "Chief Technology Officer (CTO)",
              name: "Osborn Mukasa",
              subordinates: [
                {
                  id: "098",
                  role: "IT Security Officer",
                  name: "Paul Ongaba",
                  subordinates: [],
                },
                {
                  id: "5",
                  role: "Technical Lead",
                  name: "Bob Tumukunde",
                  subordinates: [
                    {
                      id: "508",
                      role: "Lead Software Developer",
                      name: "Wandera Henry",
                      subordinates: [
                        {
                          id: "7808",
                          role: "Frontend Developer",
                          name: "Julie Mbinga",
                          subordinates: [],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  userList: [],
  selectedStaff: {},
  loading: true,
  submitting: false,
  error: "",
  success: false,
  message: "",
  showAddModal: false,
  showEditModal: false,
  showDeleteModal: false,
  showViewModal: false,
};

const staffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    setStaffHierarchy(state, action) {
      state.staffHierarchy = action.payload;
    },
    setStaffMembers(state, action) {
      state.staffMembers = action.payload;
    },
    setUserList(state, action) {
      state.userList = action.payload;
    },
    setSelectedStaff(state, action) {
      state.selectedStaff = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setSubmitting(state, action) {
      state.submitting = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setSuccess(state, action) {
      state.success = action.payload;
    },
    setMessage(state, action) {
      state.message = action.payload;
    },
    toggleShowAddModal(state) {
      state.showAddModal = !state.showAddModal;
    },
    toggleShowDeleteModal(state) {
      state.showDeleteModal = !state.showDeleteModal;
    },
    toggleShowEditModal(state) {
      state.showEditModal = !state.showEditModal;
    },
    toggleShowViewModal(state) {
      state.showViewModal = !state.showViewModal;
    },
  },
});
export const {
  setStaffHierarchy,
  setStaffMembers,
  setUserList,
  setSelectedStaff,
  setLoading,
  setSubmitting,
  setError,
  setSuccess,
  setMessage,
  toggleShowAddModal,
  toggleShowDeleteModal,
  toggleShowEditModal,
  toggleShowViewModal,
} = staffSlice.actions;

export default staffSlice.reducer;
