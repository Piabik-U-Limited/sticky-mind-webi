import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { setCompany, setTokens, setUser } from "../redux/slices/auth.slice";
import { useDispatch } from "react-redux";
import Authenticating from "./Authenticating";
import { useNavigate } from "react-router-dom";
import { changeMode } from "../redux/slices/themeSlice";
const RequireAuth = ({ children }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const accessToken = Cookies.get("access_token");
        const refreshToken = Cookies.get("refresh_token");
        if (!accessToken) {
          //if no token, redirect to login
          return navigation("/auth");
        } else {
          const decoded = jwtDecode(accessToken, { header: true });
          const currentDate = new Date().getTime() / 1000;
          if (currentDate >= decoded.exp + 2) {
            //Access Token expired
            return navigation("/auth");
          }
          dispatch(
            setTokens({
              access_token: accessToken,
              refresh_token: refreshToken,
            })
          );
          await getUser();
        }
      } catch (error) {
        //if error just naviagate to landing screen
        return navigation("/auth");
      } finally {
        setAuthChecked(true);
      }
    };
    setTimeout(() => {
      checkAuth();
    }, 1000);
  }, [navigation]);

  const getUser = async () => {
    try {
      const user = Cookies.get("user");
      if (typeof user === "undefined") {
        // Handle the missing cookie here
        navigation("/auth/signup");
        return;
      }
      const data = JSON.parse(user);
      if (!data) {
        navigation("/auth");
        return;
      }
      dispatch(setUser(data));

      //get theme cookie
      const theme = Cookies.get("theme");
      if (typeof theme === "undefined") {
        dispatch(changeMode("light"));
        return;
      }

      if (!theme) {
        dispatch(changeMode("light"));
        return;
      }
      dispatch(changeMode(theme));
    } catch (error) {
      dispatch(changeMode("light"));
      return;
    }
  };

  return authChecked ? children : <Authenticating />;
};

export default RequireAuth;
