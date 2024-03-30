import { useState } from "react";
import { Card, Button } from "@mui/material";
import lineAnimation from "../assets/lineAnimation.json";
import Lottie from "lottie-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Select() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ marginTop: ".5rem" }} id="select">
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
          Select type of Document!
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
          Upload your PDF file here and get the summary of the document in a
          short time!
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
          onClick={() => {
            navigate("/upload/1");
          }}
          className="feature-card"
          variant="outlined"
          style={{
            backgroundColor: "#171C31",
            width: "18vw",
            height: "20vh",
            padding: "12 20 20 12",
            color: "white",
            borderRadius: 5,
            border: "2px solid #6E58F2",
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
            <h1
              className="font-bold"
              style={{
                textAlign: "center",
                marginTop: ".2rem",
                fontSize: "1.1rem",
              }}
            >
              Agreements and Contracts
            </h1>
            <p
              style={{
                textAlign: "center",
                marginTop: "1rem",
                marginLeft: ".3rem",
                marginRight: ".3rem",
              }}
            >
              {" "}
              Formal terms agreed upon for business, or employment transactions.
            </p>
          </div>
        </Card>
        <Card
          onClick={() => {
            navigate("/upload/2");
          }}
          className="feature-card"
          variant="outlined"
          style={{
            backgroundColor: "#171C31",
            width: "18vw",
            height: "20vh",
            padding: "12 20 20 12",
            color: "white",
            borderRadius: 5,
            border: "2px solid #6E58F2",
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
            <h1
              className="font-bold"
              style={{
                textAlign: "center",
                marginTop: ".2rem",
                fontSize: "1.1rem",
              }}
            >
              Licenses and Permits
            </h1>
            <p
              style={{
                textAlign: "center",
                marginTop: "1rem",
                marginLeft: ".5rem",
                marginRight: ".5rem",
              }}
            >
              Official approvals for specific authorized activities or
              operations as mandated.
            </p>
          </div>
        </Card>
        {/* <Card
          className="feature-card"
          variant="outlined"
          style={{
            backgroundColor: "#171C31",
            width: "18vw",
            height: "20vh",
            padding: "12 20 20 12",
            color: "white",
            borderRadius: 5,
            border: "2px solid #6E58F2",
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
            <h1
              className="font-bold"
              style={{
                textAlign: "center",
                marginTop: ".2rem",
                fontSize: "1.1rem",
              }}
            >
              Franchise Agreement
            </h1>
            <p style={{ textAlign: "center", marginTop: "1rem" }}>Definition</p>
          </div>
        </Card> */}
        <Card
          onClick={() => {
            navigate("/upload/3");
          }}
          className="feature-card"
          variant="outlined"
          style={{
            backgroundColor: "#171C31",
            width: "18vw",
            height: "20vh",
            padding: "12 20 20 12",
            color: "white",
            borderRadius: 5,
            border: "2px solid #6E58F2",
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
            <h1
              className="font-bold"
              style={{
                textAlign: "center",
                marginTop: ".2rem",
                fontSize: "1.1rem",
              }}
            >
              Court Documents
            </h1>
            <p
              style={{
                textAlign: "center",
                marginTop: "1rem",
                marginLeft: "1.5rem",
                marginRight: "1.5rem  ",
              }}
            >
              {" "}
              Papers filed in courts, including affidavits, judgments, and
              orders.
            </p>
          </div>
        </Card>
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
          onClick={() => {
            navigate("/upload/4");
          }}
          className="feature-card"
          variant="outlined"
          style={{
            backgroundColor: "#171C31",
            width: "18vw",
            height: "20vh",
            padding: "12 20 20 12",
            color: "white",
            borderRadius: 5,
            border: "2px solid #6E58F2",
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
            <h1
              className="font-bold"
              style={{
                textAlign: "center",
                marginTop: ".2rem",
                fontSize: "1.1rem",
              }}
            >
              Government Forms
            </h1>
            <p
              style={{
                textAlign: "center",
                marginTop: "1rem",
                marginLeft: ".5rem",
                marginRight: ".5rem",
              }}
            >
              Official documents for governmental purposes and transactions.
            </p>
          </div>
        </Card>
        <Card
          onClick={() => {
            navigate("/upload/5");
          }}
          className="feature-card"
          variant="outlined"
          style={{
            backgroundColor: "#171C31",
            width: "18vw",
            height: "20vh",
            padding: "12 20 20 12",
            color: "white",
            borderRadius: 5,
            border: "2px solid #6E58F2",
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
            <h1
              className="font-bold"
              style={{
                textAlign: "center",
                marginTop: ".2rem",
                fontSize: "1.1rem",
              }}
            >
              Notices
            </h1>
            <p
              style={{
                textAlign: "center",
                marginTop: "1rem",
                marginLeft: "1rem",
                marginRight: "1rem",
              }}
            >
              {" "}
              Formal notices asserting legal rights or demanding compliance and
              action.
            </p>
          </div>
        </Card>
        <Card
          onClick={() => {
            navigate("/upload/6");
          }}
          className="feature-card"
          variant="outlined"
          style={{
            backgroundColor: "#171C31",
            width: "18vw",
            height: "20vh",
            padding: "12 20 20 12",
            color: "white",
            borderRadius: 5,
            border: "2px solid #6E58F2",
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
            <h1
              className="font-bold"
              style={{
                textAlign: "center",
                marginTop: ".2rem",
                fontSize: "1.1rem",
              }}
            >
              Patents, Trademarks, and Copyrights
            </h1>
            <p style={{ textAlign: "center", marginTop: "1rem" }}>
              Legal protections for intellectual property.{" "}
            </p>
          </div>
        </Card>
        {/* <Card
          className="feature-card"
          variant="outlined"
          style={{
            backgroundColor: "#171C31",
            width: "18vw",
            height: "20vh",
            padding: "12 20 20 12",
            color: "white",
            borderRadius: 5,
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
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
            <h1
              className="font-bold"
              style={{
                textAlign: "center",
                marginTop: ".2rem",
                fontSize: "1.1rem",
              }}
            >
              Franchise Agreement
            </h1>
            <p style={{ textAlign: "center", marginTop: "1rem" }}>Definition</p>
          </div>
        </Card> */}
      </div>
      <Lottie animationData={lineAnimation} />
    </>
  );
}

export default Select;
