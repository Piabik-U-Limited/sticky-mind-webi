import React from "react";
import useSetError from "./useSetError";
import { setSuccess } from "../../redux/slices/notification.slice";
import { useDispatch } from "react-redux";
import { setUser, setTokens, setLoading } from "../../redux/slices/auth.slice";
import ApiClient from "../apiClient";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
function useRegister() {
  const dispatch = useDispatch();
  const { captureError } = useSetError();
  const navigate = useNavigate();

  const apiClient = new ApiClient();

  const handleRegister = async (data) => {
    try {
      dispatch(setLoading(true));
      const response = await apiClient._makeRequest(
        "post",
        "auth/signup",
        data
      );

      if (response.status === 201) {
        dispatch(setUser(response.data.user));
        dispatch(setTokens(response.data.tokens));
        dispatch(setSuccess(response.data.message));
        Cookies.remove("refresh_token");
        Cookies.remove("access_token");
        Cookies.remove("user");
        Cookies.set("refresh_token", response.data.tokens.refresh_token);
        Cookies.set("access_token", response.data.tokens.access_token);
        Cookies.set("user", JSON.stringify(response.data.user));

        dispatch(setLoading(false));
        navigate("/", { replace: true });
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    dispatch(setLoading(false));
  };

  const handleRequestpasswordreset = async (data) => {
    dispatch(setLoading(true));
    try {
      const response = await apiClient._makeRequest(
        "post",
        "auth/forgot-password",
        data
      );
      if (response.status === 201) {
        dispatch(setLoading(false));
        dispatch(setSuccess(response.data.message));
        navigate("/auth/email-sent", { replace: true });
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    dispatch(setLoading(false));
  };
  const handleResetpassword = async (data) => {
    dispatch(setLoading(true));
    try {
      const response = await apiClient._makeRequest(
        "patch",
        "auth/reset-password",
        data
      );
      if (response.status === 200) {
        dispatch(setLoading(false));
        dispatch(setSuccess(response.data.message));
        navigate("/auth", { replace: true });
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    dispatch(setLoading(false));
  };
  return { handleRegister, handleRequestpasswordreset, handleResetpassword };
}

export default useRegister;
