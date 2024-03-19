import { Card } from "@mui/material";
import docAnalysis from "../assets/docAnalysis.json";
import docSummarization from "../assets/docSummarization.json";
import Lottie from "lottie-react";
import lineAnimation from "../assets/lineAnimation.json";

function Features() {
  return (
    <>
      <div
        style={{
          marginTop: "2rem",
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
          We Provide You Two Main Features
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
          We offer modern solutions for legal analysis. You can go through
          contracts, spot potential issues, and simplify dense legal documents
          into easy-to-read summaries.
        </p>
      </div>
      <div
        style={{
          marginLeft: "16vw",
          marginRight: "16vw",
          marginTop: "6rem",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Card
          variant="outlined"
          style={{
            backgroundColor: "#171C31",
            width: "25vw",
            height: 400,
            padding: 20,
            color: "white",
            borderRadius: 20,
            border: "2px solid #6E58F2",
          }}
        >
          <Lottie
            animationData={docAnalysis}
            style={{ height: 200, position: "relative", bottom: "2.5rem" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              bottom: "4rem",
              flexDirection: "column",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Document Analysis</h3>
            <p style={{ textAlign: "center", marginTop: "1rem" }}>
              Utilize our advanced AI technology to analyze contracts and legal
              documents, identifying potential risks with precision. Gain
              invaluable insights to make confident decisions, ensuring clarity
              and mitigating potential issues before they arise.
            </p>
          </div>
        </Card>

        <Card
          variant="outlined"
          style={{
            backgroundColor: "#171C31",
            width: "25vw",
            height: 400,
            padding: 20,
            color: "white",
            borderRadius: 20,
            border: "2px solid #6E58F2",
          }}
        >
          <Lottie
            animationData={docSummarization}
            style={{ height: 180, position: "relative", bottom: "2rem" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
              bottom: "3rem",
              flexDirection: "column",
            }}
          >
            <h3 style={{ textAlign: "center" }}>Document Summarization</h3>
            <p style={{ textAlign: "center", marginTop: "1rem" }}>
              Harness the capabilities of our cutting-edge AI technology, which
              thoroughly analyzes contracts and legal documents to uncover
              potential risks and pitfalls with exceptional precision. By
              leveraging this advanced tool, you can gain invaluable insights
              into any potential issues before making critical decisions,
            </p>
          </div>
        </Card>
      </div>
      <Lottie animationData={lineAnimation} />
    </>
  );
}

export default Features;