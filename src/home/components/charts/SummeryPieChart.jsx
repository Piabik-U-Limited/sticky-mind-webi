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

const SummeryPieChart = () => {
  const data = [
    { name: "January", value: 400 },
    { name: "February", value: 300 },
    { name: "March", value: 300 },
    { name: "April", value: 200 },
    { name: "May", value: 200 },
    { name: "June", value: 500 },
  ];

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
        dataKey="value"
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
