import React from "react";
import {
  CBadge,
  CDataTable,
  CButton,
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CInput,
} from "@coreui/react";
import { UserListData } from "../../../mock";
import CIcon from "@coreui/icons-react";

const getBadge = (status) => {
  switch (status) {
    case "普通会员":
      return "primary";
    case "认证会员":
      return "success";
  }
};

//Data should be pass in, now using mock
const DataTable = ({
  userList = UserListData.data,
  fields = UserListData.fields,
}) => {
  return (
    <CRow>
      <CCol sm="12">
        <CCard>
          <CCardHeader>
            会员
            <CForm inline className="mr-sm-2 float-right">
              <CInput placeholder="输入会员名字或电邮地址" size="sm" />
              <CButton
                color="info"
                className="my-2 my-sm-0"
                type="submit"
                size="sm"
              >
                Search
              </CButton>
            </CForm>
            <CButton className="float-right mr-sm-2" color="primary" size="sm">
              下载报告
            </CButton>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={userList}
              fields={fields}
              itemPerPage={10}
              pagination
              hover
              striped
              bordered
              scopedSlots={{
                role: (item) => (
                  <td>
                    <CBadge color={getBadge(item.status)} shape="pill">
                      {item.status}
                    </CBadge>
                  </td>
                ),
                actions: (item) => (
                  <td>
                    <CButton block color="secondary" to={`/users/${item.id}`}>
                      观看资料
                    </CButton>
                  </td>
                ),
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default DataTable;
