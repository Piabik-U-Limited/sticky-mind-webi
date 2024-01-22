import React from "react";
import ApiClient from "../apiClient";
import useSetError from "./useSetError";
import {
  setDashbaordData,
  setLoading,
} from "../../redux/slices/dashbard.slice";
import { useDispatch,useSelector } from "react-redux";

function useDashboard() {
  const api = new ApiClient();
  const dispatch = useDispatch();
  const { captureError } = useSetError();
  const {company} = useSelector((state) => state.auth);
  const handleFetchDashboardData = async () => {
    setLoading(true);
    try {
      const response = await api._makeRequest("get", `dashboard/${company?.id}`);
      if (response.status === 200) {
        console.log(response.data);
        dispatch(setDashbaordData(response.data));
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    setLoading(false);
  };
  return { handleFetchDashboardData };
}

export default useDashboard;
