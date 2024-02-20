import React from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
} from "recharts";
import { useSelector } from "react-redux";
import { Card, Grid } from "@mui/material";
const SummeryPieChart = () => {
  // const data = [
  //   { name: "January", sales: 400 },
  //   { name: "February", sales: 300 },
  //   { name: "March", sales: 300 },
  //   { name: "April", sales: 200 },
  //   { name: "May", sales: 200 },
  //   { name: "June", sales: 800 },
  // ];

  const data = useSelector((state) => state.dashboard.stats);
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  const COLORS = [
    "purple",
    "#87CEEB",
    "#FFBB28",
    "#0F9D58",
    "#000080",
    "blue",
    "pink",
  ];
  return (
    <Grid container spacing={2} alignItems="center" justifyContent={"center"}>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="sales"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
       
      </PieChart>
    </Grid>
  );
};

export default SummeryPieChart;
