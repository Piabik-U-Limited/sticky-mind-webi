import axios from "axios";
import { API_URL, API_KEY } from "../constants/contants";
import store from "../redux/store";
import useTokens from "./hooks/useTokens";
export default class ApiClient {
  constructor() {
    this.base_url = API_URL;
    this.api_key = API_KEY;
  }

  //Resubale methods
  async _makeRequest(method, endpoint, data) {
    const tokens = store.getState().auth.tokens || null;
    try {
      const response = await axios({
        method: method,
        url: `${this.base_url}/${endpoint}`,
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": this.api_key,
          Authorization: `Bearer ${tokens?.access_token}`,
        },
        withCredentials: true,
        data: data,
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  async _submitFile(method, endpoint, data) {
    const tokens = store.getState().auth.tokens || "None";
    try {
      const response = await axios({
        method: method,
        url: `${this.base_url}/${endpoint}`.replace("localhost", "127.0.0.1"),
        headers: {
          "Content-Type": "multipart/form-data",
          "X-API-KEY": this.api_key,
          Authorization: `Bearer ${tokens?.access_token}`,
        },
        withCredentials: true,
        data: data,
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}
