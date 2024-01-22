import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { Typography, Paper, Box, Card, Grid } from "@mui/material";
import { useSelector } from "react-redux";
const SummeryBarChart = () => {
  const RADIAN = Math.PI / 180;

  const radius = 10 + (100 - 10) * 0.5;
  const data= useSelector((state) => state.dashboard.stats);
  // const data1 = [
  //   {
  //     name: "January",
  //     sales: 4000,
  //     stock: 2400,
  //     netIncome: 2400,
  //   },
  //   {
  //     name: "February",
  //     sales: 3000,
  //     stock: 1398,
  //     netIncome: 2210,
  //   },
  //   {
  //     name: "March",
  //     sales: 2000,
  //     stock: 9800,
  //     netIncome: 2290,
  //   },
  //   {
  //     name: "Apri",
  //     sales: 2780,
  //     stock: 3908,
  //     netIncome: 2000,
  //   },
  //   {
  //     name: "May",
  //     sales: 1890,
  //     stock: 4800,
  //     netIncome: 2181,
  //   },
  //   {
  //     name: "June",
  //     sales: 2390,
  //     stock: 3800,
  //     netIncome: 2500,
  //   },
  //   {
  //     name: "July",
  //     sales: 3490,
  //     stock: 4300,
  //     netIncome: 2100,
  //   },

  //   {
  //     name: "August",
  //     sales: 3490,
  //     stock: 4300,
  //     netIncome: 2100,
  //   },
  //   {
  //     name: "September",
  //     sales: 3490,
  //     stock: 4300,
  //     netIncome: 2100,
  //   },
  //   {
  //     name: "October",
  //     sales: 4000,
  //     stock: 4000,
  //     netIncome: 2100,
  //   },
  //   {
  //     name: "November",
  //     sales: 3490,
  //     stock: 8000,
  //     netIncome: 2100,
  //   },
  //   {
  //     name: "December",
  //     sales: 3090,
  //     stock: 3300,
  //     netIncome: 200,
  //   },
  // ];
  console.log(data)
  return (
    <Card sx={{ padding: 1 }}>
      <BarChart width={400} height={250} data={data}>
        <Bar dataKey="sales" fill="#0F9D58" />
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </BarChart>
    </Card>
  );
};

export default SummeryBarChart;
