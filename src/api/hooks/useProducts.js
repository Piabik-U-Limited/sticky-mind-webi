import React from "react";
import { setSuccess } from "../../redux/slices/notification.slice";
import {
  setProducts,
  setLoading,
  toggleShowAddProductModal,
  setSubmitting,
} from "../../redux/slices/products.slice";
import ApiClient from "../apiClient";
import useSetError from "./useSetError";
import { useDispatch } from "react-redux";
import useDashboard from "./useDashboard";
function useProducts() {
  const dispatch = useDispatch();
  const api = new ApiClient();
  const { captureError } = useSetError();
  const { handleFetchDashboardData } = useDashboard();

  const handleFetchProducts = async () => {
    dispatch(setLoading(true));
    try {
      const response = await api._makeRequest("get", "products");

      if (response.status === 200) {
        console.log(response.data);
        dispatch(setProducts(response.data));
      } else {
        captureError(response);
      }
    } catch (error) {
      console.log(error);
      captureError(error);
    }
    dispatch(setLoading(false));
  };

  const handleAddProduct = async (data) => {
    setSubmitting(true);
    try {
      const response = await api._makeRequest("post", "products", data);
      if (response.status === 201) {
        dispatch(setSuccess(response.data.message));

        handleFetchProducts(); //fetch products after adding new profuct to be in sync
        handleFetchDashboardData(); // fetch dashboard stats be in sync
        dispatch(toggleShowAddProductModal());
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    setSubmitting(false);
  };
  return { handleFetchProducts, handleAddProduct };
}

export default useProducts;
