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
const SummeryPieChart = () => {
  // const data = [
  //   { name: "January", sales: 400 },
  //   { name: "February", sales: 300 },
  //   { name: "March", sales: 300 },
  //   { name: "April", sales: 200 },
  //   { name: "May", sales: 200 },
  //   { name: "June", sales: 800 },
  // ];

  const data= useSelector((state) => state.dashboard.stats);

  const COLORS = ["purple", "#87CEEB", "#FFBB28", "#0F9D58", "yellow", "blue"];
  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={true}
        label={"Data"}
        outerRadius={50}
        fill="#8884d8"
        dataKey="sales"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  );
};

export default SummeryPieChart;
