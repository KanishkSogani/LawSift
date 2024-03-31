import { useState } from "react";
import { Link } from "react-router-dom";
import { MdCloudUpload, MdDelete } from "react-icons/md";
import { AiFillFileImage } from "react-icons/ai";
import { Card, Button } from "@mui/material";
import uploadAnimation from "../assets/uploadAnimation.json";
import lineAnimation from "../assets/lineAnimation.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
// import { Document, Page, pdfjs } from "react-pdf";

function Uploadpdf({ setData }) {
  // pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
  // pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  //   "pdfjs-dist/build/pdf.worker.min.js",
  //   import.meta.url
  // ).toString();

  const { docID } = useParams();
  const [fileName, setFileName] = useState("No selected file");
  const navigate = useNavigate();
  const [selectedFile, setSelectedFile] = useState(null);
  // const [pdfData, setPdfData] = useState(null);
  // const [numPages, setNumPages] = useState(null);
  // const [pageNumber, setPageNumber] = useState(1);

  // const onFileLoad = (event) => {
  //   const file = event.target.files[0];
  //   setFileName(event.target.files[0].name);
  //   const reader = new FileReader();

  // reader.onload = async (e) => {
  //   const pdfData = e.target.result;
  //   setPdfData(pdfData);
  // };

  //   reader.onload = (e) => {
  //     setPdfData(e.target.result);
  //   };

  //   reader.readAsDataURL(file);
  //   setSelectedFile(file);
  //   console.log("Success");
  // };

  // const onDocumentLoadSuccess = ({ numPages }) => {
  //   setNumPages(numPages);
  // };
  // Function to handle file selection
  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setFileName(event.target.files[0].name);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    navigate("/Dashboard");

    const formData = new FormData();
    formData.append("pdf", selectedFile);

    try {
      const queryParams = {
        id_px: "1",
      };
      const response = await axios.post(
        "https://lawsift.onrender.com/analysis/summary" +
          "?" +
          new URLSearchParams(queryParams),
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("File uploaded successfully:", response.data);
      setData(response.data.data);
    } catch (error) {
      console.error("Error uploading file:", error.response.data);
    }
  };

  return (
    <>
      <div className="mt-[1.5rem]">
        <Link
          className="ml-[8vw]  text-3xl "
          style={{ color: "white", fontSize: "1.5rem", fontFamily: "DM Sans" }}
          to={"/"}
        >
          LawSift
        </Link>
      </div>
      <div id="upload">{/* This is an empty div */}</div>
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
          Transform your document analysis experience! Simply upload your PDF
          file here and unlock the power of instant summarization.
        </p>
      </div>
      <div>
        <div
          style={{
            marginTop: "8vh",
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
                  onSubmit={handleSubmit}
                  onClick={(event) => {
                    // Check if the event target is not the button
                    if (!event.target.closest("button")) {
                      document.querySelector(".input-field").click();
                    }
                  }}
                >
                  <input
                    type="file"
                    accept=".pdf"
                    className="input-field"
                    required={true}
                    style={{ backgroundColor: "white" }}
                    hidden
                    // onChange={(e) => {
                    //   setFileName(e.target.files[0].name);
                    //   setImage(e.target.files[0]);
                    //   setPdf(e.target.files[0]);
                    // }}
                    onChange={handleFileInputChange}
                  />

                  {selectedFile ? (
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
                  <Button
                    type="submit"
                    style={{
                      marginTop: "1rem",
                      position: "relative",
                      top: "9.8rem",
                      left: "9rem",
                    }}
                    variant="contained"
                    // onClick={() => {
                    //   !selectedFile
                    //     ? alert("Please select a file!")
                    //     : navigate("/Dashboard");
                    // }}
                    // onClick={() => {
                    //   handleSubmit();
                    // }}
                  >
                    Submit Pdf
                  </Button>
                </form>

                <section className="uploaded-row">
                  <AiFillFileImage style={{ fontSize: 20 }} color="#1475cf" />
                  <span className="upload-content">
                    {fileName} -
                    <MdDelete
                      className="delete"
                      style={{ fontSize: 20, cursor: "pointer" }}
                      onClick={() => {
                        setFileName("No selected file");
                        setSelectedFile(null);
                      }}
                    />
                  </span>
                </section>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  {/* <Button
                    type="submit"
                    style={{ marginTop: "1rem" }}
                    variant="contained"
                    // onClick={() => {
                    //   !image
                    //     ? alert("Please select a file!")
                    //     : navigate("/Dashboard");
                    // }}
                    // onClick={() => {
                    //   handleSubmit();
                    // }}
                  >
                    Submit Pdf
                  </Button> */}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      {/* <div>
        {selectedFile && (
          <Document
            className="pdfcontainer"
            file={pdfData}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
        )}
      </div> */}
    </>
  );
}

export default Uploadpdf;
