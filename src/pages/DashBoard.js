import React, { useState } from "react";
import ChartPie from "../components/charts/ChartPie";
import ChartMedium from "../components/charts/ChartMedium";

function DashBoard() {
  const [chartPies] = useState([{ chartHeader: "Likes Overview" }]);
  const [chartMed] = useState([{ chartHeader: "Ad Revinue earned" }]);
  return (
    <section style={styles.pageDisplay}>
      <h1>DashBoard:</h1>
      <div style={styles.chartDiv}>
        <p>
          {chartPies.map((chartPies, id) => (
            <ChartPie key={id} id={id} chartPies={chartPies} />
          ))}
        </p>
        <p>
          {chartMed.map((chartMed, id) => (
            <ChartMedium key={id} id={id} chartMed={chartMed} />
          ))}
        </p>
      </div>
    </section>
  );
}

export default DashBoard;

const styles = {
  chartDiv: {
    display: "flex",
    gap: "5px",
    margin: "10px",
  },
  pageDisplay: {
    backgroundColor: "#e3fff3",
    display: "flex",
    flexDirection: "column",
  },
};
