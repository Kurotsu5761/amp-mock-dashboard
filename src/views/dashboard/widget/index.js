import React from "react";
import {
  CWidgetIcon,
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropDownItem,
  CDropdownToggle,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { WidgetData } from "../../../mock";

const MainWidgets = ({}) => {
  return (
    <CRow>
      <CCol sm="6" lg="4">
        <CWidgetIcon
          color="gradient-primary"
          header={WidgetData[0].count}
          text={WidgetData[0].type}
        >
          <CIcon name={"cil-user"} size={"2xl"} />
        </CWidgetIcon>
      </CCol>
      <CCol sm="6" lg="4">
        <CWidgetIcon
          color="gradient-success"
          header={WidgetData[1].count}
          text={WidgetData[1].type}
        >
          <CIcon name={"cil-check-circle"} size={"2xl"} />
        </CWidgetIcon>
      </CCol>
      <CCol sm="6" lg="4">
        <CWidgetIcon
          color="gradient-warning"
          header={WidgetData[2].count}
          text={WidgetData[2].type}
        >
          <CIcon name={"cil-people"} size={"2xl"} />
        </CWidgetIcon>
      </CCol>
    </CRow>
  );
};

export default MainWidgets;
