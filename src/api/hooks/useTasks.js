import React from "react";
import { setError, setSuccess } from "../../redux/slices/notification.slice";

import {
  setTasks,
  setSubmitting,
  setLoading,
  toggleShowAddTaskModal,
} from "../../redux/slices/tasks.slice";
import ApiClient from "../apiClient";
import useSetError from "./useSetError";
import { useDispatch, useSelector } from "react-redux";
function useTasks() {
  const dispatch = useDispatch();
  const api = new ApiClient();
  const { captureError } = useSetError();

  const handleFetchTasks = async () => {
    dispatch(setLoading(true));
    try {
      const response = await api._makeRequest("get", `tasks`);

      if (response.status === 200) {
        dispatch(setTasks(response.data));
        console.log(response.data);
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    dispatch(setLoading(false));
  };

  const handleAddTask = async (data) => {
    setSubmitting(true);
    try {
      const response = await api._makeRequest("post", `tasks`, data);
      if (response.status === 201) {
        dispatch(setSuccess(response.data.message));

        handleFetchTasks();
        dispatch(toggleShowAddTaskModal());
      } else {
        captureError(response);
      }
    } catch (error) {
      captureError(error);
    }
    setSubmitting(false);
  };
  return { handleFetchTasks, handleAddTask };
}

export default useTasks;
