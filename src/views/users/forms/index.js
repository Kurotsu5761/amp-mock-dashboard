import React from "react";

import {
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CForm,
  CFormGroup,
  CCol,
  CRow,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormText,
  CLabel,
  CInput,
  CDropdown,
  CSelect,
  CButton,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

const UserForm = ({ user }) => {
  return (
    <>
      <CRow>
        <CCol xs="12">
          <CCard>
            <CRow>
              <CCol xs="8">
                <CCardHeader>会员资料</CCardHeader>
                <CCardBody>
                  <CRow>
                    <CCol xs="12" sm="6">
                      <CLabel htmlFor="chineseName">中文名字</CLabel>
                      <CInput
                        id="chineseName"
                        defaultValue={user.chineseName}
                      />
                    </CCol>
                    <CCol xs="12" sm="6">
                      <CLabel htmlFor="englishName">英文名字</CLabel>
                      <CInput
                        id="englishName"
                        defaultValue={user.englishName}
                      />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="12" sm="6">
                      <CLabel htmlFor="email">电邮地址</CLabel>
                      <CInput id="email" defaultValue={user.email} />
                    </CCol>
                    <CCol xs="12" sm="6">
                      <CLabel htmlFor="joinDate">加入日期</CLabel>
                      <CInput id="joinDate" defaultValue={user.joinDate} />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="12" sm="6">
                      <CLabel htmlFor="gender">会员性别</CLabel>
                      <CSelect
                        custom
                        name="gender"
                        id="gender"
                        defaultValue={user.gender}
                      >
                        <option value="male">男性</option>
                        <option value="female">女性</option>
                      </CSelect>
                    </CCol>
                    <CCol xs="12" sm="6">
                      <CLabel htmlFor="age">会员岁数</CLabel>
                      <CInput
                        id="age"
                        defaultValue={`${user.age} 岁`}
                        placeholder="会员岁数"
                      />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol xs="12">
                      <CLabel htmlFor="status">会员身份</CLabel>
                      <CSelect
                        custom
                        name="status"
                        id="status"
                        defaultValue={user.status}
                      >
                        <option value="普通会员">普通会员</option>
                        <option value="认证会员">认证会员</option>
                      </CSelect>
                    </CCol>
                  </CRow>
                </CCardBody>
              </CCol>
              <CCol xs="4">
                <CCardHeader>会员头像</CCardHeader>
                <CCardBody>
                  <img
                    style={{
                      width: "100%",
                    }}
                    src={user.image}
                    className="img-thumbnail"
                  />
                  <CButton block type="button" color="primary" className="mt-3">
                    设定头像
                  </CButton>
                </CCardBody>
              </CCol>
            </CRow>
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

export default UserForm;
