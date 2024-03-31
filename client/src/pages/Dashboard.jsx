import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactTyped } from "react-typed";
import { summary } from "../../../server/src/controllers/summary.controllers";
import dashloadingAnimation from "../assets/dashloadingAnimation.json";
import Lottie from "lottie-react";
import axios from "axios";

function Dashboard({ data }) {
  const [history, setHistory] = useState([]);
  const [currentQuery, setCurrentQuery] = useState("");
  const [summary, setSummary] = useState("");
  const [keypoints, setKeypoints] = useState("");
  const [restrictions, setRestrictions] = useState("");
  const [terms, setTerms] = useState("");
  const [license, setLicensee] = useState("");
  const [ans, setAns] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCurrentQuery(e.target.value);
  };

  const handleSubmit = async () => {
    const ans = await axios.post("https://lawsift.onrender.com/query", {
      query: currentQuery,
    });
    if (ans.data.data) {
      const responseData = ans.data.data;
      console.log(responseData);
      setAns((prevState) => [...prevState, responseData]);
    } else {
      setAns((prevState) => [
        ...prevState,
        "Sorry, Please enter a valid query.",
      ]);
    }

    if (currentQuery.trim() !== "") {
      // Add the current query to the history
      setHistory([...history, currentQuery]);

      // Clear the current query
      setCurrentQuery("");
    }
    if (!currentQuery) {
      alert("Please type a message!");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  // Maximum number of queries to keep in history
  const maxHistoryLength = 10;

  // if (!data) {
  //   return <h1 style={{ color: "white" }}>Loading...</h1>;
  // }

  useEffect(() => {
    if (data) {
      console.log(terms);
      setSummary(data.message);
      setKeypoints(data.response_1);
      setRestrictions(data.response_2);
      setTerms(data.response_3);
      setLicensee(data.response_4);
    }
  }, [data]);

  return (
    <div className="chat-container" style={{ backgroundColor: "#202021" }}>
      <div
        className="side-panel"
        style={{
          color: "white",
          backgroundColor: "#171717",
          fontFamily: "DM Sans",
        }}
      >
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <h1
            style={{
              fontSize: "1.5rem",
              marginBottom: "2rem",
              cursor: "pointer",
            }}
          >
            Lawsift
          </h1>
        </div>
        <h2
          className="color"
          style={{ fontSize: "1rem", fontWeight: "700", color: "gray" }}
        >
          History
        </h2>
        <ul>
          {history.slice(-maxHistoryLength).map((query, index) => (
            <li key={index}>{query}</li>
          ))}
        </ul>
      </div>

      <div className="chat-window">
        <div
          style={{
            marginTop: "5vh",
            minHeight: "83vh",
            maxHeight: "83vh",
            minWidth: "56vw",
            overflowY: "auto",
            marginLeft: "10vw",
            paddingRight: "15vw",
          }}
        >
          <p className="heading">
            <ReactTyped
              strings={["Summary :"]}
              typeSpeed={80}
              backDelay={950}
              showCursor={data ? false : true}
            />
          </p>
          <p className="answer"> {summary}</p>
          {!data && (
            <Lottie
              style={{
                height: "100px",
                position: "relative",
                top: "20vh",
                left: "8vw",
              }}
              animationData={dashloadingAnimation}
            />
          )}
          {data && (
            <>
              <p className="heading">
                <ReactTyped
                  strings={["Key Points :"]}
                  typeSpeed={80}
                  backDelay={950}
                  showCursor={false}
                />
              </p>
              <p className="answer"> {keypoints}</p>
              <p className="heading">
                <ReactTyped
                  strings={["Restrictions :"]}
                  typeSpeed={80}
                  backDelay={950}
                  showCursor={false}
                />
              </p>
              <p className="answer"> {restrictions}</p>
              <p className="heading">
                <ReactTyped
                  strings={["Terms :"]}
                  typeSpeed={80}
                  backDelay={950}
                  showCursor={false}
                />
              </p>
              <p className="answer"> {terms}</p>
              <p className="heading">
                <ReactTyped
                  strings={["License :"]}
                  typeSpeed={80}
                  backDelay={950}
                  showCursor={false}
                />
              </p>
              <p className="answer">{license}</p>
              <p style={{ fontSize: "1.2rem" }} className="answer">
                Please enter your queries!
              </p>
              {ans.map((item) => (
                <p className="answer">{item}</p>
              ))}
              ;
            </>
          )}
        </div>
        <div className="input-container">
          <input
            type="text"
            placeholder="Type your message..."
            value={currentQuery}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
          />

          <button onClick={handleSubmit}>
            <ion-icon
              className="icon"
              style={{
                display: "block",
                color: "white",
                fontSize: "24px",
                position: "relative",
                right: "3vw",
              }}
              name="send-outline"
            ></ion-icon>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
