import React from "react";
import {  setSuccess } from "../../redux/slices/notification.slice";
import { setBatches,setLoading,setSubmitting,toggleShowAddBatchModal } from "../../redux/slices/batches.slice";
import ApiClient from "../apiClient";
import useSetError from "./useSetError";
import { useDispatch,useSelector } from "react-redux";
function useBatches() {
  const dispatch = useDispatch();
  const api = new ApiClient();
  const { captureError } = useSetError();
  const {company}=useSelector(state=>state.auth)

  const handleFetchBatches = async () => {
    dispatch(setLoading(true));
    try {
      const response = await api._makeRequest("get", `batches/${company?.id}`);

      if (response.status === 200) {
        
        dispatch(setBatches(response.data));
      } else {
        captureError(response);
      }
      console.log(response)
    } catch (error) {
      console.log(error);
      captureError(error);
    }
    dispatch(setLoading(false));
  };

  const handleAddBatch = async (data) => {
    setSubmitting(true);
    try {
      const response = await api._makeRequest("post", "batches", data);
      if (response.status === 201) {
        dispatch(setSuccess(response.data.message));

        handleFetchBatches();
        dispatch(toggleShowAddBatchModal());
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    setSubmitting(false);
  };
  return { handleFetchBatches, handleAddBatch };
}

export default useBatches;
