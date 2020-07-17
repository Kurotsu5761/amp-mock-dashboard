import React from "react";
import {
  CDataTable,
  CBadge,
  CButton,
  CCard,
  CRow,
  CCardHeader,
  CCardBody,
  CCol,
  CInput,
  CForm,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

import { EventListData } from "../../mock";

const getBadge = (status) => {
  return status ? "success" : "warning";
};

const Articles = ({
  articles = EventListData.data,
  fields = EventListData.fields,
}) => {
  return (
    <>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>
              活动目录
              <CForm inline className="mr-sm-2 float-right">
                <CInputGroup className="mr-4">
                  <CInputGroupPrepend>
                    <CInputGroupText>
                      <CIcon name="cil-magnifying-glass" />
                    </CInputGroupText>
                  </CInputGroupPrepend>
                  <CInput placeholder="输入活动名称" />
                </CInputGroup>
                <CInputGroup>
                  <CButton to="/events/create" color="primary">
                    创作活动
                  </CButton>
                </CInputGroup>
              </CForm>
            </CCardHeader>
            <CCardBody>
              <CDataTable
                items={articles}
                fields={fields}
                itemPerPage={10}
                pagination
                hover
                striped
                bordered
                scopedSlots={{
                  actions: (item) => (
                    <td>
                      <CButton
                        color="warning"
                        className="mr-4"
                        to={`events/${item._id}/edit`}
                      >
                        修改
                      </CButton>
                      <CButton color="info" className="mr-4">
                        {item.published ? "撤回" : "发布"}
                      </CButton>
                      <CButton color="danger">删除</CButton>
                    </td>
                  ),
                  status: (item) => (
                    <td>
                      <CBadge color={getBadge(item.published)}>
                        {item.published ? "已发布" : "草稿"}
                      </CBadge>
                    </td>
                  ),
                  public: (item) => (
                    <td>
                      <CBadge color={getBadge(item.public)}>
                        {item.public ? "公开" : "会员"}
                      </CBadge>
                    </td>
                  ),
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Articles;
