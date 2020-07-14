import React, { useState, useRef, useMemo } from "react";
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody,
  CCardFooter,
  CButton,
  CLabel,
  CInput,
  CForm,
} from "@coreui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CIcon from "@coreui/icons-react";

const ArticleForm = ({}) => {
  const [value, setValue] = useState("");
  let quillRef = useRef();

  const apiPostNewsImage = () => {
    // API post, returns image location as string e.g. 'http://www.example.com/images/foo.png'
  };
  let imageHandler = useMemo(() => {});

  return (
    <>
      <CRow>
        <CCol xs="12">
          <CForm>
            <CCard>
              <CCardHeader>创作文章</CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs="12">
                    <CLabel htmlFor="title">标题</CLabel>
                    <CInput id="title" name="title" />
                  </CCol>
                </CRow>
                <CRow className="mt-4" style={{ height: 500 }}>
                  <CCol xs="12">
                    <CLabel htmlFor="content">文章内容</CLabel>
                    <ReactQuill
                      ref={(el) => {
                        quillRef = el;
                      }}
                      id="content"
                      theme="snow"
                      value={value}
                      onChange={(value) => setValue(value)}
                      style={{ height: 400 }}
                      modules={{
                        toolbar: {
                          container: [
                            [
                              { header: "1" },
                              { header: "2" },
                              { header: [3, 4, 5, 6] },
                              { font: [] },
                            ],
                            [{ size: [] }],
                            [
                              "bold",
                              "italic",
                              "underline",
                              "strike",
                              "blockquote",
                            ],
                            [{ list: "ordered" }, { list: "bullet" }],
                            ["link", "image", "video"],
                            ["clean"],
                            ["code-block"],
                          ],
                          handlers: {
                            image: imageHandler,
                          },
                        },
                      }}
                    />
                  </CCol>
                </CRow>
              </CCardBody>
              <CCardFooter>
                <CButton type="submit" size="sm" color="primary">
                  <CIcon name="cil-scrubber" /> 保存
                </CButton>
                <CButton type="reset" size="sm" color="danger" className="ml-4">
                  <CIcon name="cil-ban" /> 取消
                </CButton>
              </CCardFooter>
            </CCard>
          </CForm>
        </CCol>
      </CRow>
    </>
  );
};

export default ArticleForm;
