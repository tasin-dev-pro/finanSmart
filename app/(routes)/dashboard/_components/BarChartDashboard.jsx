import React from "react";
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const BarChartDashboard = ({ budgetList }) => {
  return (
    <div className="border rounded-2xl p-5">
      <h2 className="font-bold text-lg">Activity</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={budgetList}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            tick={{ fill: '#666' }}
          />
          <YAxis
            tick={{ fill: '#666' }}
            width={80}
            domain={[0, 'auto']}
          />
          <Tooltip />
          <Legend
            verticalAlign="top"
            height={36}
          />
          <Bar
            dataKey="totalSpend"
            stackId="a"
            fill="#4845d2"
            name="Total Spend"
          />
          <Bar
            dataKey="amount"
            stackId="a"
            fill="#C3C2FF"
            name="Amount"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartDashboard;
