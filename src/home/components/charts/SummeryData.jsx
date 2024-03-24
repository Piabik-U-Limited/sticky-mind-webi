import React from "react";
import { Typography, Card, Grid } from "@mui/material";
import { products, income, sales, stock } from "../../../assets/icons";
import { PulseLoader } from "react-spinners";
import { useSelector } from "react-redux";
import {
  CalendarMonth,
  CalendarToday,
  DataArray,
  DataUsage,
} from "@mui/icons-material";
function SummeryData() {
  const state = useSelector((state) => state.dashboard);
  return (
    <Grid container spacing={2} alignItems="stretch">
      {/* Due Today */}
      <Grid item xs={12} sm={6} md={3}>
        <Card
          className="card-content"
          sx={{
            borderRadius: 1,
            backgroundColor: "#00C49F",
            padding: 1,
            height: "100%",
          }}
        >
          {state.loading ? (
            <PulseLoader color="#fff" height={30} width={15} />
          ) : (
            <div
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="left">
                <CalendarToday />
              </div>
              <div>
                <Typography variant="subtitle1">Due Today</Typography>
                <Typography variant="h6">
                  {state.dashboardData?.todoTasksToday?.length}
                </Typography>
              </div>
            </div>
          )}
        </Card>
      </Grid>
      {/* Products Card */}
      <Grid item xs={12} sm={6} md={3}>
        <Card
          className="card-content"
          sx={{
            borderRadius: 1,
            backgroundColor: "#FF8042",
            padding: 1,
            height: "100%",
          }}
        >
          {state.loading ? (
            <PulseLoader color="#fff" height={30} width={15} />
          ) : (
            <div
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="left">
                <DataUsage />
              </div>
              <div className="right students">
                <Typography variant="subtitle1">Over due</Typography>
                <Typography variant="h6">
                  {state.dashboardData?.overDueTasks?.length}
                </Typography>
              </div>
            </div>
          )}
        </Card>
      </Grid>
      {/* This Month */}
      <Grid item xs={12} sm={6} md={3}>
        <Card
          className="card-content"
          sx={{
            borderRadius: 1,
            backgroundColor: "#FFBB28",
            padding: 1,
            height: "100%",
          }}
        >
          {state.loading ? (
            <PulseLoader color="#fff" height={30} width={15} />
          ) : (
            <div
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="left">
                <CalendarMonth />
              </div>
              <div>
                <Typography variant="subtitle1">This Month</Typography>
                <Typography variant="h6">
                  {state.dashboardData?.todoThisMonth?.length}
                </Typography>
              </div>
            </div>
          )}
        </Card>
      </Grid>
      {/* Completed Today */}
      <Grid item xs={12} sm={6} md={3}>
        <Card
          className="card-content"
          sx={{
            borderRadius: 1,
            backgroundColor: "#0088FE",
            padding: 1,
            height: "100%",
          }}
        >
          {state.loading ? (
            <PulseLoader color="#fff" height={30} width={15} />
          ) : (
            <div
              style={{
                color: "#fff",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div className="left">
                <DataArray />
              </div>
              <div className="right staff">
                <Typography variant="subtitle1">Done Today</Typography>
                <Typography variant="h6">
                  {state.dashboardData?.completedTasksToday?.length}
                </Typography>
              </div>
            </div>
          )}
        </Card>
      </Grid>
    </Grid>
  );
}

export default SummeryData;
