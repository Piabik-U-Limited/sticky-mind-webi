import React from "react";
import ApiClient from "../apiClient";
import { useDispatch, useSelector } from "react-redux";
import {
  setStaffHierarchy,
  setError,
  toggleShowAddModal,
  toggleShowDeleteModal,
  setLoading,
  setSubmitting,
  setSuccess,
  setMessage,
  setUserList,
  toggleShowEditModal,
} from "../../redux/slices/staffSlice";

function useStaff() {
  const apiClient = new ApiClient();
  const dispatch = useDispatch();

  //staff hierarchy
  const fetchHierarchy = async () => {
    dispatch(setLoading(true));
    const response = await apiClient.getStaffHierarchy();
    if (response.status === 200) {
      dispatch(setStaffHierarchy(response.data));
    } else {
      if (response.response) dispatch(setError(response.response.data.message));
      else dispatch(setError("An unknown error occured!"));
    }
    dispatch(setLoading(false));
  };

  //Submitting Staff
  const handleSubmit = async (values) => {
    dispatch(setSubmitting(true));
    const response = await apiClient.postStaff(values);
    if (response.status === 201) {
      handleFetch();
      fetchHierarchy();
      dispatch(setMessage(response.data.message));
      dispatch(toggleShowAddModal());
    } else {
      if (response.response) dispatch(setError(response.response.data.message));
      else dispatch(setError("An unknown error occured!"));
    }
    dispatch(setSubmitting(false));
  };

  //Fetching all staff
  const handleFetch = async () => {
    dispatch(setLoading(true));
    const response = await apiClient.getAllStaff();
    if (response.status === 200) {
      dispatch(setUserList(response.data));
    } else {
      if (response.response) dispatch(setError(response.response.data.message));
      else dispatch(setError("An unknown error occured!"));
    }
    dispatch(setLoading(false));
  };

  //Delete
  const handleDelete = async (id) => {
    dispatch(setSubmitting(true));
    const response = await apiClient.deleteStaff(id);
    if (response.status === 200) {
      handleFetch();
      fetchHierarchy();
      dispatch(setMessage(response.data.message));
    } else {
      if (response.response) dispatch(setError(response.response.data.message));
      else dispatch(setError("An unknown error occured!"));
    }
    dispatch(setSubmitting(false));
    dispatch(toggleShowDeleteModal());
  };

  //Edit
  const handleEdit = async (values, id) => {
    dispatch(setSubmitting(true));
    const response = await apiClient.editStaff(values, id);
    if (response.status === 200) {
      handleFetch();
      fetchHierarchy();
      dispatch(setMessage(response.data.message));
      dispatch(toggleShowEditModal());
    } else {
      if (response.response) dispatch(setError(response.response.data.message));
      else dispatch(setError("An unknown error occured!"));
    }
    dispatch(setSubmitting(false));
  };

  return {
    handleSubmit,
    handleFetch,
    handleDelete,
    fetchHierarchy,
    handleEdit,
  };
}

export default useStaff;
