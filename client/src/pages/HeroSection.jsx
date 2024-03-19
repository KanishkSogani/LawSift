import { ReactTyped } from "react-typed";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        marginTop: "20vh",
        display: "flex",
        justifyContent: "space-evenly",
        color: "white",
        marginLeft: "8vw",
        gap: "15rem",
        fontFamily: "Plus Jakarta Sans",
      }}
    >
      <div>
        <h1 style={{ wordSpacing: ".7rem" }}>
          {" "}
          <span>Your Personal AI Assistant For</span>{" "}
          <div style={{ content: "transparency", color: "#6E58F2" }}>
            <ReactTyped
              className="text-primary"
              strings={["Analyzing", "Summarizing"]}
              typeSpeed={80}
              loop
              backDelay={950}
              showCursor={true}
            />
          </div>
          <span>Legal Documents.</span>
        </h1>
        <p style={{ marginTop: "5vh", wordSpacing: ".5rem" }}>
          LawSift is a tool that utilizes AI to simplify the understanding of
          legal documents and contracts. By analyzing and summarizing these
          documents, it helps users grasp their implications, making navigating
          the legal landscape accessible to all.
        </p>
        <div>
          <button
            onClick={() => {
              navigate("/upload");
            }}
            className="btn"
            style={{ marginTop: "2.5rem" }}
          >
            Get Started
          </button>
        </div>
      </div>
      <div style={{ marginRight: "8vw", marginLeft: "8vw" }}>
        <img style={{ height: 500 }} src="./contract.svg" alt="landing page" />
      </div>
    </div>
  );
}

export default LandingPage;
