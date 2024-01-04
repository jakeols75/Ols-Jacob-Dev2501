import React from "react";
import { PieChart, Pie } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];
const data02 = [
  { name: "Post1", value: 57 },
  { name: "Post2", value: 253 },
  { name: "Post3", value: 28 },
  { name: "Post4", value: 30 },
  { name: "Post5", value: 752 },
  { name: "Post6", value: 342 },
  { name: "Post7", value: 1153 },
  { name: "Post8", value: 802 },
  { name: "Post9", value: 1237 },
  { name: "Post10", value: 2347 },
  { name: "Post11", value: 5124 },
];

const ChartPie = ({ chartPies }) => {
  return (
    <article key={chartPies.id}>
      <h1 style={styles.headerStyle}>{chartPies.chartHeader}</h1>

      <PieChart width={400} height={400} style={styles.pieChartStyle}>
        <Pie
          data={data01}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={80}
          outerRadius={100}
          fill="#303030"
          label
        />
      </PieChart>
    </article>
  );
};

export default ChartPie;

const styles = {
  headerStyle: {
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
  pieChartStyle: {
    border: "solid",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    color: "black",
  },
};
