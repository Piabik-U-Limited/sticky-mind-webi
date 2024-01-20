import { useDispatch } from "react-redux";
import { setLoading } from "../../redux/slices/auth.slice";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import ApiClient from "../apiClient";
import useSetError from "./useSetError";
function useLogin() {
  const navigate = useNavigate();
  const { captureError } = useSetError();
  const dispatch = useDispatch();
  const from = navigate.state?.from?.pathname || { pathname: "/" };
  const apiClient = new ApiClient();

  const handleLogin = async (data) => {
    dispatch(setLoading(true));
    const response = await apiClient._makeRequest("post", "auth/login", data);
    if (response.status === 201) {
      Cookies.remove("refresh_token");
      Cookies.remove("access_token");
      Cookies.remove("user");
      Cookies.set("refresh_token", response.data.tokens.refresh_token);
      Cookies.set("access_token", response.data.tokens.access_token);
      Cookies.set("company", JSON.stringify(response.data.user.company));
      Cookies.set("user", JSON.stringify(response.data.user));
      navigate("/", { replace: true });
    } else {
      captureError(response);
    }
    dispatch(setLoading(false));
  };
  return { handleLogin };
}

export default useLogin;
