import React from "react";
import {
  CCard,
  CRow,
  CCardHeader,
  CCol,
  CCardBody,
  CCardFooter,
  CInput,
  CButton,
  CLabel,
  CForm,
  CTextarea,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

const Settings = ({}) => {
  return (
    <>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CCardHeader>设定</CCardHeader>
            <CCardBody>
              <CForm>
                <CRow>
                  <CCol xs="6">
                    <CLabel htmlFor="website">网址</CLabel>
                    <CInput name="website" placeholder="网址" type="text" />
                  </CCol>
                  <CCol xs="6">
                    <CLabel htmlFor="website">电话</CLabel>
                    <CInput name="website" placeholder="电话" type="text" />
                  </CCol>
                </CRow>
                <CRow className="mt-4">
                  <CCol xs="12">
                    <CLabel htmlFor="aboutUs">关于我们</CLabel>
                    <CTextarea name="aboutUs" type="textarea" rows="9" />
                  </CCol>
                </CRow>
                <CRow className="mt-4">
                  <CCol xs="12">
                    <CLabel>
                      <b>会馆介绍文章</b>
                    </CLabel>
                    <table style={{ width: "100%" }}>
                      <tr
                        style={{
                          borderTop: "1px solid black",
                          backgroundColor: "lightGrey",
                        }}
                      >
                        <td style={{ padding: "10px", width: "95%" }}>
                          我们的历史
                        </td>
                        <td>
                          <CButton type="button" size="sm" color="warning">
                            修改
                          </CButton>
                        </td>
                      </tr>
                      <tr
                        style={{
                          borderTop: "1px solid black",
                        }}
                      >
                        <td style={{ padding: "10px", width: "95%" }}>
                          会馆构造
                        </td>
                        <td>
                          <CButton type="button" size="sm" color="warning">
                            修改
                          </CButton>
                        </td>
                      </tr>
                      <tr
                        style={{
                          borderTop: "1px solid black",
                          borderBottom: "1px solid black",
                          backgroundColor: "lightGrey",
                        }}
                      >
                        <td style={{ padding: "10px", width: "95%" }}>
                          会馆服务
                        </td>
                        <td>
                          <CButton type="button" size="sm" color="warning">
                            修改
                          </CButton>
                        </td>
                      </tr>
                      <tr
                        style={{
                          borderBottom: "1px solid black",
                        }}
                      >
                        <td style={{ padding: "10px", width: "95%" }}>
                          会馆详情
                        </td>
                        <td>
                          <CButton type="button" size="sm" color="warning">
                            修改
                          </CButton>
                        </td>
                      </tr>
                    </table>
                  </CCol>
                </CRow>
              </CForm>
            </CCardBody>
            <CCardFooter>
              <CButton type="submit" size="sm" color="primary">
                <CIcon name="cil-scrubber" /> 确定
              </CButton>
              <CButton type="reset" size="sm" color="danger" className="ml-4">
                <CIcon name="cil-ban" /> 取消
              </CButton>
            </CCardFooter>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

export default Settings;
