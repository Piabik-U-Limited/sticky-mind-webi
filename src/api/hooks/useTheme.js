import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../redux/slices/themeSlice";
import Cookies from "js-cookie";
function useTheme() {
  const dispatch = useDispatch();
  const themeMode = useSelector((state) => state.theme.mode);
  const toggleTheme = () => {
    if (themeMode === "dark") {
      dispatch(changeMode("light"));
      Cookies.remove("theme");
      Cookies.set("theme", "light");
    } else {
      dispatch(changeMode("dark"));
      Cookies.remove("theme");
      Cookies.set("theme", "dark");
    }
  };
  return {
    themeMode,
    toggleTheme,
  };
}

export default useTheme;
