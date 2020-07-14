import React from "react";
//import {} from "@coreui/react";
//import CIcon from "@coreui/icons-react";
import MainWidget from "./widget";
import MainChart from "./charts";
import MainTable from "./table";

const Dashboard = () => {
  return (
    <>
      <MainWidget />
      <MainChart />
      <MainTable />
    </>
  );
};

export default Dashboard;
