import { Card } from "@mui/material";

function About() {
  return (
    <>
      <div style={{ marginTop: ".5rem" }} id="about">
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
          Why To Use Our Product?
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
          On a average a lawyer spends around 20hrs/week to manually Analyize
          legal documents. Now you can use our tool to save your precious time
          and get all important points in just one go!
        </p>
      </div>
      <div
        style={{
          marginTop: "6rem",
          display: "flex",
          justifyContent: "space-evenly",
          marginBottom: "5rem",
        }}
      >
        <Card
          className="feature-card"
          variant="outlined"
          style={{
            backgroundColor: "#171C31",
            width: "18vw",
            height: 350,
            padding: 20,
            color: "white",
            borderRadius: 20,
            border: "2px solid #6E58F2",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <ion-icon size="large" name="flash-outline"></ion-icon>
            <h2 style={{ textAlign: "center", marginTop: "1rem" }}>Rapid</h2>
            <p style={{ textAlign: "center", marginTop: "1rem" }}>
              Unlock the power of speed with our product, enabling users to
              condense hours of tedious research into mere minutes, harnessing
              the internet wealth of information efficiently and effectively.
            </p>
          </div>
        </Card>
        <Card
          className="feature-card"
          variant="outlined"
          style={{
            backgroundColor: "#171C31",
            width: "18vw",
            height: 350,
            padding: 20,
            color: "white",
            borderRadius: 20,
            border: "2px solid #6E58F2",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <ion-icon size="large" name="document-lock-outline"></ion-icon>
            <h2 style={{ textAlign: "center", marginTop: "1rem" }}>Privacy</h2>
            <p style={{ textAlign: "center", marginTop: "1rem" }}>
              We prioritize user privacy by implementing stringent data
              protection measures, ensuring that your personal information
              remains secure and confidential throughout your interaction with
              our product.
            </p>
          </div>
        </Card>
        <Card
          className="feature-card"
          variant="outlined"
          style={{
            backgroundColor: "#171C31",
            width: "18vw",
            height: 350,
            padding: 20,
            color: "white",
            borderRadius: 20,
            border: "2px solid #6E58F2",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <ion-icon size="large" name="search-circle-outline"></ion-icon>
            <h2 style={{ textAlign: "center", marginTop: "1rem" }}>
              Easy Search
            </h2>
            <p style={{ textAlign: "center", marginTop: "1rem" }}>
              Navigate through lengthy citations effortlessly. Our product
              empowers users to pinpoint essential information quickly and
              precisely, allowing for focused exploration within expansive
              texts.
            </p>
          </div>
        </Card>
        <Card
          className="feature-card"
          variant="outlined"
          style={{
            backgroundColor: "#171C31",
            width: "18vw",
            height: 350,
            padding: 20,
            color: "white",
            borderRadius: 20,
            border: "2px solid #6E58F2",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <ion-icon size="large" name="disc-outline"></ion-icon>
            <h2 style={{ textAlign: "center", marginTop: "1rem" }}>
              Precision
            </h2>
            <p style={{ textAlign: "center", marginTop: "1rem" }}>
              Say goodbye to the frustration of incomplete information in your
              PDFs. Our product identifies missing elements, providing clarity
              and ensuring your documents are comprehensive and accurate.
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}

export default About;
