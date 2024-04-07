import React, { PureComponent } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  { name: "Completed", value: 400 },
  { name: "Over due", value: 300 },
  { name: "Todo", value: 300 },
  { name: "Pending", value: 200 },
];
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function CompletionRate() {
  return (
    <ResponsiveContainer width={"100%"} height={150}>
      <PieChart onMouseEnter={() => {}}>
        <Pie
          data={data}
          innerRadius={30}
          outerRadius={60}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>

        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
