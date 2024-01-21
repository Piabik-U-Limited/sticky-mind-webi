import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { setCompany, setUser } from "../redux/slices/auth.slice";
import { useDispatch } from "react-redux";
import Authenticating from "./Authenticating";
import { decode } from "base-64";
import { useNavigate } from "react-router-dom";

const Authentic = ({ children }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const accessToken = Cookies.get("access_token");
        if (!accessToken) {
          return;
        } else {
          const decoded = jwtDecode(accessToken, { header: true });
          const currentDate = new Date().getTime() / 1000;
          if (currentDate >= decoded.exp + 2) {
            //Access Token expired
            return 
          }
          else{
            await getUser();
            navigation("/",{replace:true});
          }
          await getUser();
        }
      } catch (error) {
        //if error just naviagate to landing screen
        return 
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
      const data = JSON.parse(user);
      if (!data) {
        return 
      }
      dispatch(setUser(data));
      const company = Cookies.get("company");
      const comapanyData = JSON.parse(company);
      if (!comapanyData) {
        navigation("/company/create");
      }
      dispatch(setCompany(comapanyData));
      
    } catch (error) {
      return 
    }
  };

  return authChecked ? children : <Authenticating />;
};

export default Authentic;
