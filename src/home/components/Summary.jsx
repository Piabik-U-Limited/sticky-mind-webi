import React from "react";
import { Typography, Paper, Box, Card, Grid } from "@mui/material";
import "./styles/summery.css";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { products, income, sales, stock } from "../../assets/icons";
function Summary() {
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];

  const COLORS = ["purple", "#87CEEB", "#FFBB28", "#0F9D58"];

  const RADIAN = Math.PI / 180;

  const radius = 10 + (100 - 10) * 0.5;

  const data1 = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div>
      <Grid container spacing={2} alignItems="stretch">
        {/* Alumni Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            className="card-content"
            sx={{
              borderRadius: 1,
              backgroundColor: "purple",
              padding: 1,
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="left">
              <img src={sales} alt="Sales" width={50} />
            </div>
            <div>
              <Typography variant="subtitle1">Sales</Typography>
              <Typography variant="h6">250</Typography>
            </div>
          </Card>
        </Grid>

        {/* Students Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            className="card-content"
            sx={{
              borderRadius: 1,
              backgroundColor: "#87CEEB",
              padding: 1,
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="left">
              <img src={products} alt="products" width={50} />
            </div>
            <div className="right students">
              <Typography variant="subtitle1">Products</Typography>
              <Typography variant="h6">100s</Typography>
            </div>
          </Card>
        </Grid>

        {/* Programs Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            className="card-content"
            sx={{
              borderRadius: 1,
              backgroundColor: "#0F9D58",
              padding: 1,
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="left">
              <img src={income} alt="Income" width={50} />
            </div>
            <div>
              <Typography variant="subtitle1">Net Income</Typography>
              <Typography variant="h6">100</Typography>
            </div>
          </Card>
        </Grid>

        {/* Applicants Card */}
        <Grid item xs={12} sm={6} md={3}>
          <Card
            className="card-content"
            sx={{
              borderRadius: 1,
              backgroundColor: "#FFBB28",
              padding: 1,
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div className="left">
              <img src={stock} alt="Stock" width={50} />
            </div>
            <div className="right staff">
              <Typography variant="subtitle1">Stock</Typography>
              <Typography variant="h6">100</Typography>
            </div>
          </Card>
        </Grid>
      </Grid>
      <Box className="grid-container">
        <Grid container className="graphWrapper">
          <div className="lineGraph">
            <div className="chart-heading" style={{ padding: 10 }}>
              <Typography style={{ fontWeight: "600" }}>
                Sales per month
              </Typography>
            </div>
            <Card>
              <BarChart width={400} height={250} data={data1}>
                <Bar dataKey="uv" fill="#0F9D58" />
              </BarChart>
            </Card>
          </div>

          <Card className="pieChart" sx={{ padding: 1 }}>
            <div>
              <Typography>Sales</Typography>
              {/* <RingChart applicants={applicants} gender={genderCount} /> */}
            </div>
            <PieChart width={200} height={200}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={"Data"}
                outerRadius={50}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
          </Card>
        </Grid>
      </Box>
    </div>
  );
}

export default Summary;
