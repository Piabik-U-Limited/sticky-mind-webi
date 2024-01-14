import axios from "axios";
import { API_URL } from "../constants/contants";

export default class ApiClient {
  constructor() {
    this.base_url = API_URL;
  }
  //get staff hierarchy
  async getStaffHierarchy() {
    try {
      const response = await axios({
        method: "get",
        url: `${this.base_url}/staff/hierarchy`,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return response;
    } catch (error) {
      return error;
    }
  }
  //Post Staff Member
  async postStaff(values) {
    try {
      const response = await axios({
        method: "post",
        url: `${this.base_url}/staff/`,
        data: values,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  //Return all staff members registered
  async getAllStaff() {
    try {
      const response = await axios({
        method: "get",
        url: `${this.base_url}/staff/`,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  //edit staff
  async editStaff(values, staffId) {
    try {
      const response = await axios({
        method: "put",
        url: `${this.base_url}/staff/${staffId}`,
        data: values,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return response;
    } catch (error) {
      return error;
    }
  }

  //delete staff member
  async deleteStaff(staffId) {
    try {
      const response = await axios({
        method: "delete",
        url: `${this.base_url}/staff/${staffId}`,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      return response;
    } catch (error) {
      return error;
    }
  }
}
