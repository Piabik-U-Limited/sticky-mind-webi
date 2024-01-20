import React from "react";
import useSetError from "./useSetError";
import { setSuccess } from "../../redux/slices/notification.slice";
import { useDispatch } from "react-redux";
import { setUser, setTokens, setLoading } from "../../redux/slices/auth.slice";
import ApiClient from "../apiClient";
import { Navigate,useNavigate } from "react-router-dom";
function useRegister() {
  const dispatch = useDispatch();
  const { captureError } = useSetError();
const navigate=useNavigate()

  const apiClient = new ApiClient();

  const handleRegister = async (data) => {
    try {
      dispatch(setLoading(true));
      const response = await apiClient._makeRequest("post", "auth/register", data);
      dispatch(setUser(response.data.user));
      dispatch(setTokens(response.data.tokens));
      dispatch(setSuccess(response.data.message));
      return navigate("/create-company");
    } catch (error) {
      captureError(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  return { handleRegister };
}

export default useRegister;
