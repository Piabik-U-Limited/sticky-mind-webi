import React from "react";
import {
  Typography,
  Box,
  Card,
  Grid,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import "./styles/summery.css";
import { setStatType } from "../../redux/slices/dashbard.slice";
import { useSelector, useDispatch } from "react-redux";
import {
  SummeryBarChart,
  SummeryPieChart,
  SummeryData,
  CompletionRate,
} from "./charts";
import { Calendar } from "./calendars";
import useDashboard from "../../api/hooks/useDashboard";
function Summary() {
  const dispatch = useDispatch();
  const { handleFetchStats } = useDashboard();
  const statType = useSelector((state) => state.dashboard.statType);

  const handleFetchStatsType = async (value) => {
    dispatch(setStatType(value));
    handleFetchStats(value);
  };
  return (
    <Box>
      <Box className="grid-container">
        <Grid container className="graphWrapper">
          <div
            className="lineGraph"
            //style={{ maxHeight: "400px", overflowY: "auto" }}
          >
            <SummeryData />
            {/* <div className="chart-heading" style={{ padding: 10 }}>
              <Typography
                style={{ fontWeight: "600" }}
                variant="h6"
                textTransform={"capitalize"}
              >
                {statType} Sales
              </Typography>
              <FormControl sx={{ minWidth: 120 }} size="small">
                <InputLabel id="toggle">Stat Type</InputLabel>
                <Select
                  labelId="toggle"
                  value={statType}
                  label="Statstics"
                  onChange={(e) => handleFetchStatsType(e.target.value)}
                  //sx={{color:'#00C49F'}}
                  size="small"
                >
                  <MenuItem value={"hourly"}>Hourly</MenuItem>
                  <MenuItem value={"daily"}>Daily</MenuItem>
                  <MenuItem value={"weekly"}>Weekly</MenuItem>
                  <MenuItem value={"monthly"}>Monthly</MenuItem>
                </Select>
              </FormControl>
            </div> */}
            <Card sx={{ marginTop: 1 }}>
              <Calendar />
              {/* <SummeryPieChart /> */}
            </Card>
          </div>

          <Card
            className="pieChart"
            sx={{
              padding: 1,
            }}
          >
            <Grid item xs={12} container>
              <Grid item xs={12} sm={12} md={12}>
                <CompletionRate />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <SummeryBarChart />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Box>
    </Box>
  );
}

export default Summary;
