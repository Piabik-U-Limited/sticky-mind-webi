import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { setUser } from "../redux/slices/auth.slice";
import { useDispatch } from "react-redux";
import Authenticating from "./Authenticating";
import { decode } from "base-64";
import { useNavigate } from "react-router-dom";
global.atob = decode; //decode tokens

const RequireAuth = ({ children }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const accessToken = Cookies.get("access_token");
        if (accessToken) {
          //if no token, redirect to login
          return navigation("/auth");
        } else {
          const decoded = jwtDecode(accessToken, { header: true });
          const currentDate = new Date().getTime() / 1000;
          if (currentDate >= decoded.exp + 2) {
            //Access Token expired
            return navigation("/auth");
          }
        }
      } catch (error) {
        //if error just naviagate to landing screen
        return navigation("/auth");
      } finally {
        setAuthChecked(true);
      }
    };

    checkAuth();
  }, [navigation]);

  const getUser = async () => {
    try {
      const user = Cookies.get("user");
      const data = JSON.parse(user);
      dispatch(setUser(data?.user));
    } catch (error) {
      return navigation("/auth");
    }
  };

  return authChecked ? children : <Authenticating />;
};

export default RequireAuth;
