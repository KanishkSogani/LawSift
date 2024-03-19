import { Card } from "@mui/material";
import { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function Dashboard({ data }) {
  const [summary, setSummary] = useState([]);
  const [strpr, setStrpr] = useState();
  const [weakpr, setWeakpr] = useState();
  useEffect(() => {
    if (data.length > 0) {
      setSummary(data[0].summary);
      setStrpr(data[3].Strength_Percentage);
      setWeakpr(data[4].weakness_percentage);
    }
  }, [data]);
  return (
    <>
      <div
        style={{
          marginLeft: "8vw",
          marginTop: "9rem",
          color: "white",
        }}
      >
        <h1 style={{ fontFamily: "Plus Jakarta Sans" }}>Summary</h1>
      </div>
      <div
        style={{
          marginLeft: "8vw",
          marginTop: "1.5rem",
          marginRight: "8vw",
          display: "flex",
        }}
      >
        <div>
          <Card
            style={{
              margin: 0,
              width: "60vw",
              minHeight: "60vh",
              maxHeight: "60vh",
              padding: 20,
              backgroundColor: " #CCCCFF",
              overflowY: "auto",
              className: "style-2",
              border: "2px solid #6E58F2",
              marginRight: "2vw",
              color: "black",
              fontSize: "20px",
              borderRadius: 20,
            }}
          >
            {summary.map((item) => (
              <p style={{ border: "1px dotted black", padding: ".5rem" }}>
                {item}
              </p>
            ))}
          </Card>
        </div>
        <div>
          <h2 style={{ color: "white", marginTop: "5vh" }}>Chart</h2>
          <Card
            // className="feature-card"
            variant="outlined"
            style={{
              backgroundColor: "#171C31",
              width: "25vw",
              height: "50vh",
              padding: 20,
              color: "white",
              borderRadius: 20,
              border: "2px solid #6E58F2",
              marginTop: ".8vh",
            }}
          >
            <Doughnut
              data={{
                labels: ["Strength", "Weakness"],
                datasets: [
                  {
                    data: [10, 20],
                    backgroundColor: [
                      "rgb(207, 159, 255)",
                      "rgb(218, 112, 214)",
                    ],
                    hoverOffset: 4,
                  },
                ],
              }}
            />
          </Card>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
