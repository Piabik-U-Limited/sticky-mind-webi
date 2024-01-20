import React from "react";
import { useDispatch } from "react-redux";
import ApiClient from "../apiClient";
import { setSuccess } from "../../redux/slices/notification.slice";
import useSetError from "./useSetError";
import { setCompany,setLoading } from "../../redux/slices/auth.slice";
import { useNavigate } from "react-router-dom";
function useCompany() {
  const dispatch = useDispatch();
  const { captureError } = useSetError();
  const navigate = useNavigate();
  const apiClient = new ApiClient();
  const handleCreateCompany = async (data) => {
    dispatch(setLoading(true))
    try {
      const response = await apiClient._makeRequest("post", "companies", data);
      if (response.status === 201) {
        dispatch(setCompany(response.data.company));
        dispatch(setSuccess(response.data.message));
        return navigate("/", { replace: true });
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    dispatch(setLoading(false))
    
  };
  return {handleCreateCompany};
}

export default useCompany;
