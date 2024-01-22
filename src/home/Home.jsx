import React, { useEffect } from "react";
import useDashboard from "../api/hooks/useDashboard";
import { useSelector } from "react-redux";
import { Summery } from "./components";
import "./styles/main-content.css";

function Home() {
  const { handleFetchDashboardData,handleFetchStats } = useDashboard();
  const  statType= useSelector((state) => state.dashboard.statType);
  useEffect(() => {
    handleFetchDashboardData();
    handleFetchStats(statType);
  }, []);

  return (
    <div>
      <Summery />
    </div>
  );
}

export default Home;
