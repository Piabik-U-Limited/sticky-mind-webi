import React from "react";
import { Typography, Box, Card, Grid } from "@mui/material";
import "./styles/summery.css";

import { SummeryBarChart, SummeryPieChart, SummeryData } from "./charts";
function Summary() {
  return (
    <div>
      <SummeryData />
      <Box className="grid-container">
        <Grid container className="graphWrapper">
          <div className="lineGraph">
            <div className="chart-heading" style={{ padding: 10 }}>
              <Typography style={{ fontWeight: "600" }} variant="h6">
                Monthly Sales
              </Typography>
            </div>
            <SummeryBarChart />
          </div>

          <Card className="pieChart" sx={{ padding: 1 }}>
            <div>
              <Typography>Sales</Typography>
              {/* <RingChart applicants={applicants} gender={genderCount} /> */}
            </div>
            <SummeryPieChart />
          </Card>
        </Grid>
      </Box>
    </div>
  );
}

export default Summary;
