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
import { useDispatch,useSelector } from "react-redux";
import useDashboard from "./useDashboard";
function useProducts() {
  const dispatch = useDispatch();
  const api = new ApiClient();
  const { captureError } = useSetError();
  const { handleFetchDashboardData } = useDashboard();
  const {company}=useSelector(state=>state.auth)

  const handleFetchProducts = async () => {
    dispatch(setLoading(true));
    try {
      const response = await api._makeRequest("get", `products/${company?.id}`);

      if (response.status === 200) {
        dispatch(setProducts(response.data));
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    dispatch(setLoading(false));
  };

  const handleAddProduct = async (data) => {
    setSubmitting(true);
    try {
      const response = await api._makeRequest("post", `products/${company?.id}`, data);
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
