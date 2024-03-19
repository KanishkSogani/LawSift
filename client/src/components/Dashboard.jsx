import { Card } from "@mui/material";
import { useState, useEffect } from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

function Dashboard({ data }) {
  const [summary, setSummary] = useState([]);
  const [strpr, setStrpr] = useState();
  const [weakpr, setWeakpr] = useState();
  const [pro, setPro] = useState([]);
  const [con, setCon] = useState([]);

  useEffect(() => {
    if (data.length > 0) {
      setSummary(data[0].summary);
      setStrpr(data[3].Strength_Percentage);
      setWeakpr(data[4].weakness_percentage);
      setPro(data[5].additional_sections);
      setCon(data[6].missing_sections);
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
              // padding: 20,
              backgroundColor: " #CCCCFF",
              overflowY: "auto",
              className: "style-2",
              border: "2px solid #6E58F2",
              marginRight: "2vw",
              color: "black",
              fontSize: "20px",
              borderRadius: 5,
            }}
          >
            {summary.map((item) => (
              <p
                style={
                  item === ""
                    ? null
                    : { border: "1px solid black", padding: ".5rem" }
                }
              >
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
                    data: [strpr, weakpr],
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
      <div
        style={{
          marginTop: "10vh",
          marginLeft: "8vw",
          display: "flex",
          justifyContent: "space-between",
          marginRight: "8vw",
        }}
      >
        <div>
          <Card
            style={{
              margin: 0,
              padding: 20,
              width: "38vw",
              minHeight: "30vh",
              maxHeight: "60vh",
              // padding: 20,
              backgroundColor: " #CCCCFF",
              overflowY: "auto",
              className: "style-2",
              border: "2px solid green",
              color: "black",
              fontSize: "20px",
              borderRadius: 5,
            }}
          >
            <h2
              style={{
                fontFamily: "monospace",
                marginBottom: "2vh",
                color: "#008631",
              }}
            >
              PROS:
            </h2>
            <ul>
              {pro.map((item) => (
                <li>item</li>
              ))}
            </ul>
          </Card>
        </div>
        <div style={{ marginLeft: "11vw" }}>
          <Card
            style={{
              margin: 0,
              padding: 20,
              width: "38vw",
              minHeight: "30vh",
              maxHeight: "60vh",
              // padding: 20,
              backgroundColor: " #CCCCFF",
              overflowY: "auto",
              className: "style-2",
              border: "2px solid red",
              color: "black",
              fontSize: "20px",
              borderRadius: 5,
            }}
          >
            <h2
              style={{
                fontFamily: "monospace",
                marginBottom: "2vh",
                color: "red",
              }}
            >
              CONS:
            </h2>
            <ul>
              {con.map((item) => (
                <li>item</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
