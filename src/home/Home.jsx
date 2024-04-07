import React, { useEffect } from "react";
import useDashboard from "../api/hooks/useDashboard";
import { useSelector } from "react-redux";
import { Summery } from "./components";
import "./styles/main-content.css";
import useTasks from "../api/hooks/useTasks";
function Home() {
  const { handleFetchDashboardData, handleFetchStats } = useDashboard();
  const { handleFetchTasks } = useTasks();
  const statType = useSelector((state) => state.dashboard.statType);
  useEffect(() => {
    handleFetchDashboardData();
    // handleFetchStats(statType);
    handleFetchTasks();
  }, []);

  return (
    <div>
      <Summery />
    </div>
  );
}

export default Home;
