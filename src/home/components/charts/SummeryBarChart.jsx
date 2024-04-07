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
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={data1}>
        <Bar dataKey="DONE" fill="#00C49F" />
        {/* <Bar dataKey="IN_PROGRESS" fill="#FFBB28" />
        <Bar dataKey="TODO" fill="#87CEEB" /> */}
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
    </ResponsiveContainer>
  );
};

export default SummeryBarChart;
