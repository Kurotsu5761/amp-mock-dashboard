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
  CSelect,
  CSwitch,
  CForm,
} from "@coreui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import ReactPlayer from "react-player";
import CIcon from "@coreui/icons-react";

const ArticleForm = ({}) => {
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("image");
  const [videoUrl, setVideoUrl] = useState(
    "https://www.youtube.com/watch?v=OCWj5xgu5Ng"
  );
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
                  <CCol xs="10">
                    <CLabel htmlFor="title">标题</CLabel>
                    <CInput id="title" name="title" />
                  </CCol>
                  <CCol xs="1">
                    <CLabel htmlFor="public">隐私</CLabel>
                    <CSelect custom name="public" id="public">
                      <option value="true">公开</option>
                      <option value="false">会员</option>
                    </CSelect>
                  </CCol>
                  <CCol xs="1">
                    <CLabel htmlFor="public">封面</CLabel>
                    <CSelect
                      custom
                      name="cover"
                      id="cover"
                      onChange={(e) => {
                        setCover(e.target.value);
                      }}
                    >
                      <option value="image">图片</option>
                      <option value="video">影片</option>
                    </CSelect>
                  </CCol>
                </CRow>
                <CRow className="mt-4">
                  {cover === "image" ? (
                    <CCol xs="4">
                      <img
                        style={{
                          width: "100%",
                        }}
                        src="https://carikami.com/wp-content/uploads/2019/10/placeholder.png"
                        className="img-thumbnail"
                      />
                      <CButton
                        block
                        type="button"
                        color="primary"
                        className="mt-3"
                      >
                        设定文章图
                      </CButton>
                    </CCol>
                  ) : (
                    <CCol xs="4">
                      <ReactPlayer url={videoUrl} />
                      <CInput
                        id="videoUrl"
                        name="videoUrl"
                        onChange={(event) => setVideoUrl(event.target.value)}
                        className="mt-3"
                      />
                    </CCol>
                  )}
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
