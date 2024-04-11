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
  ResponsiveContainer,
  LineChart,
  Brush,
  ScatterChart,
  Scatter,
  ComposedChart,
  Area,
} from "recharts";
import { Typography, Paper, Box, Card, Grid } from "@mui/material";
import { useSelector } from "react-redux";
const SummeryBarChart = () => {
  const RADIAN = Math.PI / 180;

  const radius = 10 + (100 - 10) * 0.5;
  const data = useSelector((state) => state.dashboard.stats);
  const data1 = [
    {
      name: "January",
      DONE: 20,
      TODO: 11,
      IN_PROGRESS: 10,
    },
    {
      name: "February",
      DONE: 50,
      TODO: 10,
      IN_PROGRESS: 2,
    },
    {
      name: "March",
      DONE: 6,
      TODO: 19,
      IN_PROGRESS: 12,
    },
  ];
  return (
    <ResponsiveContainer width="100%" height={250}>
      <ComposedChart data={data1}>
        <Scatter dataKey="DONE" fill="#00C49F" />
        <Scatter dataKey="TODO" fill="#FFBB28" />
        <Scatter dataKey="IN_PROGRESS" fill="#87CEEB" />

        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />

        <Line
          type="monotone"
          dataKey="TODO"
          stroke="#FFBB28"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="DONE" stroke="#00C49F" />
        <Line type="monotone" dataKey="IN_PROGRESS" stroke="#87CEEB" />

        <Tooltip />

        <Brush dataKey="name" height={30} stroke="#8884d8" />
        <Legend />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default SummeryBarChart;
