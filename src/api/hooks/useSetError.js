import React from "react";
import { setError } from "../../redux/slices/notification.slice";
import { useDispatch } from "react-redux";

function useSetError() {
  const dispatch = useDispatch();
  const captureError = (error) => {
    if (error.response) {
      const message = error.response.data.message;
      if (Array.isArray(message) && message.length > 0) {
        // If it's an array, get the first element
        dispatch(setError(message[0]));
      } else if (typeof message === "string") {
        // If it's a string, set it directly
        dispatch(setError(message));
      } else {
        // Handle other cases if needed
        dispatch(setError(response.message));
      }
    } else {
      dispatch(setError("An unknown error occured!"));
    }
  };
  return { captureError };
}

export default useSetError;
