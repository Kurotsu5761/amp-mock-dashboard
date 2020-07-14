import React from "react";
import { CChartPie } from "@coreui/react-chartjs";
import { getColor, deepObjectMerge } from "@coreui/utils/src";
import { PieChartData } from "../../../mock";

const PieChart = (props) => {
  return (
    <CChartPie
      type="pie"
      datasets={PieChartData}
      labels={["男性", "女性"]}
      options={{
        tooltips: {
          enabled: true,
        },
      }}
    />
  );
};

export default PieChart;
