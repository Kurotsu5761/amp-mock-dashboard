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
  CForm,
} from "@coreui/react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import CIcon from "@coreui/icons-react";
import ReactPlayer from "react-player";
import { EventListData } from "../../../mock";
import Attachments from "./attachments";

const EventForm = ({ match }) => {
  const [value, setValue] = useState("");
  const [cover, setCover] = useState("image");
  const [videoUrl, setVideoUrl] = useState(
    "    https://www.youtube.com/watch?v=OCWj5xgu5Ng"
  );
  const [attachments, setAttachments] = useState([]);

  let quillRef = useRef();

  const event = EventListData.data.find(
    (event) => event._id.toString() === match.params.id
  );

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
              <CCardHeader>创作活动</CCardHeader>
              <CCardBody>
                <CRow>
                  <CCol xs="11">
                    <CLabel htmlFor="title">标题</CLabel>
                    <CInput
                      id="title"
                      name="title"
                      defaultValue={event?.title}
                    />
                  </CCol>
                  <CCol xs="1">
                    <CLabel htmlFor="public">隐私</CLabel>
                    <CSelect
                      custom
                      name="public"
                      id="public"
                      defaultValue={event?.public ? "public" : "member"}
                    >
                      <option value="public">公开</option>
                      <option value="member">会员</option>
                    </CSelect>
                  </CCol>
                </CRow>
                <CRow className="mt-4">
                  <CCol xs="12" sm="6">
                    <CLabel htmlFor="eventDate">活动日期</CLabel>
                    <CInput
                      type="date"
                      name="eventDate"
                      defaultValue={event?.eventDate}
                    />
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CLabel htmlFor="eventLocation">活动地点</CLabel>
                    <CInput
                      type="text"
                      name="eventLocation"
                      defaultValue={event?.eventLocation}
                    />
                  </CCol>
                </CRow>
                <CRow className="mt-4">
                  <CCol xs="12" sm="6">
                    <CLabel htmlFor="eventStartTime">开始时间</CLabel>
                    <CInput
                      type="time"
                      name="eventStartTime"
                      defaultValue={event?.eventStartTime}
                    />
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CLabel htmlFor="eventEndTime">结束时间</CLabel>
                    <CInput
                      type="time"
                      name="eventEndTime"
                      defaultValue={event?.eventStartTime}
                    />
                  </CCol>
                </CRow>
                <CRow className="mt-4">
                  <CCol xs="4">
                    <img
                      style={{
                        width: "100%",
                      }}
                      src={event?.image}
                      className="img-thumbnail"
                    />
                    <CButton
                      block
                      type="button"
                      color="primary"
                      className="mt-3"
                    >
                      设定活动图
                    </CButton>
                  </CCol>
                  <CCol xs="8">
                    <Attachments
                      attachments={attachments}
                      setAttachments={setAttachments}
                    />
                  </CCol>
                </CRow>
                <CRow className="mt-4" style={{ height: 500 }}>
                  <CCol xs="12">
                    <CLabel htmlFor="content">活动内容</CLabel>
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

export default EventForm;
