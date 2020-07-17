import React from "react";
import { CRow, CCol, CButton, CLabel, CInput } from "@coreui/react";

const Attachments = ({ attachments, setAttachments }) => {
  return (
    <div>
      <p>附件</p>
      <div>
        {attachments.map((attachment) => (
          <CRow className="mt-4">
            <CCol xs="2">附件名称</CCol>
            <CCol xs="7">
              <CInput
                name="attachment"
                id={`attchment_${attachment.id}`}
                key={attachment.id}
              />
              <span>
                <a href="https://s2.q4cdn.com/175719177/files/doc_presentations/Placeholder-PDF.pdf">
                  attachment name
                </a>
              </span>
            </CCol>
            <CCol xs="3">
              <CButton color="primary">上载附件</CButton>
            </CCol>
          </CRow>
        ))}
      </div>

      {attachments.length <= 4 && (
        <div
          style={{
            height: "50px",
            width: "100%",
            padding: 5,
            marginTop: "10px",
          }}
          onClick={() => {
            setAttachments([...attachments, {}]);
          }}
        >
          <div
            style={{
              height: "100%",
              width: "100%",
              border: "1px dashed grey",
              fontSize: 25,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {"+"}
          </div>
        </div>
      )}
    </div>
  );
};

export default Attachments;
