import React from "react";
import { CRow, CCol, CCard, CCardHeader, CCardBody } from "@coreui/react";
import BarChart from "./barchart";
import PieChart from "./piechart";

const Charts = ({}) => {
  return (
    <>
      <CRow>
        <CCol sm="12" lg="8">
          <CCard>
            <CCardHeader>会员统计表</CCardHeader>
            <CCardBody>
              <BarChart />
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm="12" lg="4">
          <CCard>
            <CCardHeader>性别</CCardHeader>
            <CCardBody>
              <PieChart />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Charts;
