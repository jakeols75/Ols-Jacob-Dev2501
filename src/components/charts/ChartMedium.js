import React from "react";
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from "recharts";

const data = [
  {
    name: "Post One",
    uv: 100,
    pv: 250,
    amt: 250,
    cnt: 225,
  },
  {
    name: "Post Two",
    uv: 500,
    pv: 550,
    amt: 500,
    cnt: 500,
  },
  {
    name: "Post Three",
    uv: 400,
    pv: 650,
    amt: 400,
    cnt: 400,
  },
  {
    name: "Post Four",
    uv: 1000,
    pv: 1200,
    amt: 1000,
    cnt: 960,
  },
];

const ChartMedium = ({ chartMed }) => {
  return (
    <article key={chartMed.id}>
      <h1>{chartMed.chartHeader}</h1>
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}
        style={styles.chartMedStyle}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" scale="band" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
        <Bar dataKey="pv" barSize={20} fill="#413ea0" />
        <Line type="monotone" dataKey="uv" stroke="#ff7300" />
        <Scatter dataKey="cnt" fill="red" />
      </ComposedChart>
    </article>
  );
};

export default ChartMedium;

const styles = {
  headerStyle: {
    fontSize: "1.3rem",
    fontWeight: "bold",
  },
  chartMedStyle: {
    border: "solid",
    borderRadius: "10px",
    backgroundColor: "#94eaff",
    color: "black",
    paddingTop: "3px",
  },
};
