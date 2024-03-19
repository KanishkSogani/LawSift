import { Card } from "@mui/material";
import { useState } from "react";

function Dashboard({ data }) {
  const [summary, setSummary] = useState([]);
  if (data.length > 0) {
    setSummary(data[0].summary);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "6rem",
          color: "white",
        }}
      >
        <h1>Dashboard</h1>
      </div>
      <div style={{ marginLeft: "8vw", marginTop: "6rem" }}>
        <Card
          style={{
            margin: 0,
            width: 500,
            minHeight: 400,
            maxHeight: 400,
            padding: 20,
            backgroundColor: " #F7F9FE",
            overflowY: "auto",
            className: "style-2",
          }}
        >
          {summary[0]}
        </Card>
      </div>
    </>
  );
}

export default Dashboard;
