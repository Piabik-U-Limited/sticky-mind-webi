import React from "react";
import { setSuccess } from "../../redux/slices/notification.slice";
import {
  setSales,
  setLoading,
  toggleShowAddSaleModal,
  setSubmitting,
} from "../../redux/slices/sales.slice";
import ApiClient from "../apiClient";
import useSetError from "./useSetError";
import { useDispatch, useSelector } from "react-redux";
import useDashboard from "./useDashboard";
import useProducts from "./useProducts";
function useSales() {
  const dispatch = useDispatch();
  const api = new ApiClient();
  const { captureError } = useSetError();
  const { handleFetchDashboardData } = useDashboard();
  const { handleFetchProducts } = useProducts();
  const {company} = useSelector((state) => state.auth);

  const handleFetchSales = async () => {
    dispatch(setLoading(true));
    try {
      const response = await api._makeRequest("get", `sales/${company?.id}`);

      if (response.status === 200) {
        dispatch(setSales(response.data));
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    dispatch(setLoading(false));
  };

  const handleAddSale = async (data) => {
    setSubmitting(true);
    try {
      const response = await api._makeRequest("post", "sales", data);
      if (response.status === 201) {
        dispatch(setSuccess(response.data.message));

        handleFetchSales(); //fetch Sales after adding new sale to be in sync
        handleFetchDashboardData(); // fetch dashboard stats be in sync
        handleFetchProducts(); //fetch products after adding new sale to be in sync
        dispatch(toggleShowAddSaleModal());
       
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    setSubmitting(false);
  };
  return { handleFetchSales, handleAddSale };
}

export default useSales;
