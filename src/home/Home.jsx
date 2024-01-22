import React, { useEffect } from "react";
import useDashboard from "../api/hooks/useDashboard";
import { useSelector } from "react-redux";
import { Summery } from "./components";
import "./styles/main-content.css";

function Home() {
  const { handleFetchDashboardData,handleFetchStats } = useDashboard();
  useEffect(() => {
    handleFetchDashboardData();
    handleFetchStats();
  }, []);

  return (
    <div>
      <Summery />
    </div>
  );
}

export default Home;
