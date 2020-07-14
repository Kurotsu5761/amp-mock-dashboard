import React from "react";
import { CChartBar } from "@coreui/react-chartjs";
import { getColor, deepObjectMerge } from "@coreui/utils/src";
import { BarChartData } from "../../../mock";

const BarChart = (props) => {
  return (
    <CChartBar
      type="bar"
      datasets={BarChartData}
      labels={[
        "<20",
        "21-30",
        "31-40",
        "41-50",
        "51-60",
        "61-70",
        "71-80",
        ">80",
      ]}
      options={{
        tooltips: {
          enabled: true,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      }}
    />
  );
};

export default BarChart;
