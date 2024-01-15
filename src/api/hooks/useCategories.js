import React from "react";
import { setError, setSuccess } from "../../redux/slices/notification.slice";
import {
  setCategoriess,
  setLoading,
  toggleShowAddCategoryModal,
  setSubmitting,
} from "../../redux/slices/categories.slice";
import ApiClient from "../apiClient";
import useSetError from "./useSetError";
import { useDispatch } from "react-redux";
function useCategories() {
  const dispatch = useDispatch();
  const api = new ApiClient();
  const { captureError } = useSetError();

  const handleFetchCategories = async () => {
    dispatch(setLoading(true));
    try {
      const response = await api._makeRequest("get", "categories");

      if (response.status === 200) {
        console.log(response.data);
        dispatch(setCategoriess(response.data));
      } else {
        captureError(response);
      }
    } catch (error) {
      console.log(error);
      captureError(error);
    }
    dispatch(setLoading(false));
  };

  const handleAddCategory = async (data) => {
    setSubmitting(true);
    try {
      const response = await api._makeRequest("post", "categories", data);
      if (response.status === 201) {
        dispatch(setSuccess(response.data.message));

        handleFetchCategories();
        dispatch(toggleShowAddCategoryModal());
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    setSubmitting(false);
  };
  return { handleFetchCategories, handleAddCategory };
}

export default useCategories;
