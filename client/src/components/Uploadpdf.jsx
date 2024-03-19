import { useState } from "react";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { Card, Button } from "@mui/material";
import uploadAnimation from "../assets/uploadAnimation.json";
import lineAnimation from "../assets/lineAnimation.json";
import Lottie from "lottie-react";

function Uploadpdf() {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  return (
    <>
      <div style={{ marginTop: ".5rem" }} id="upload">
        {/* This is an empty div */}
      </div>
      <br />
      <div
        style={{
          marginTop: "1rem",
          marginLeft: "8vw",
          marginRight: "8vw",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontFamily: "Plus Jakarta Sans",
            wordSpacing: ".7rem",
          }}
        >
          Upload Your PDF!
        </h1>
        <p
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "2rem",
            paddingLeft: "9vw",
            paddingRight: "9vw",
            fontSize: "18px",
          }}
        >
          Upload your PDF file here and get the summary of the document in a few
          seconds!
        </p>
      </div>
      <div>
        <div
          style={{
            marginTop: "6vh",
            display: "flex",
            justifyContent: "space-evenly",
            marginLeft: "8vw",
            gap: "1rem",
            fontFamily: "Plus Jakarta Sans",
          }}
        >
          <div
            style={{ marginRight: "vw", position: "relative", right: "8vw" }}
          >
            <Lottie style={{ height: 500 }} animationData={uploadAnimation} />
          </div>
          <div style={{ marginRight: "8vw", marginTop: "2vh" }}>
            <Card
              style={{
                backgroundColor: "#171C31",
                minWidth: 450,
                minHeight: 400,
                padding: 20,
              }}
            >
              <div
                style={{
                  fontFamily: "DM sans",
                  color: "white",
                  marginBottom: 8,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>
                  <ion-icon
                    // size="large"
                    style={{ marginRight: ".5rem", fontSize: 24 }}
                    name="folder-open-outline"
                  ></ion-icon>
                </div>
                <div style={{ fontSize: "1.2rem" }}>Upload files</div>
              </div>
              <div>
                <form
                  onClick={() => document.querySelector(".input-field").click()}
                >
                  <input
                    type="file"
                    accept="pdf"
                    className="input-field"
                    style={{ backgroundColor: "white" }}
                    hidden
                    onChange={({ target: { files } }) => {
                      files[0] && setFileName(files[0].name);
                      if (files) {
                        setImage(URL.createObjectURL(files[0]));
                      }
                    }}
                  />

                  {image ? (
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <AiFillFileImage
                        style={{ fontSize: 60 }}
                        color="#1475cf"
                      />
                      <div style={{ color: "white" }}>{fileName}</div>
                    </div>
                  ) : (
                    <>
                      <MdCloudUpload color="#1475cf" size={60} />
                      <p style={{ color: "white" }}>
                        Click here to choose files
                      </p>
                    </>
                  )}
                </form>

                <section className="uploaded-row">
                  <AiFillFileImage style={{ fontSize: 20 }} color="#1475cf" />
                  <span className="upload-content">
                    {fileName} -
                    <MdDelete
                      className="delete"
                      style={{ fontSize: 20, cursor: "pointer" }}
                      onClick={() => {
                        setFileName("No selected File");
                        setImage(null);
                      }}
                    />
                  </span>
                </section>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <Button style={{ marginTop: "1rem" }} variant="contained">
                    Submit Pdf
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Lottie animationData={lineAnimation} />
    </>
  );
}

export default Uploadpdf;
