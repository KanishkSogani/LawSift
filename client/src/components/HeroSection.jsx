import { ReactTyped } from "react-typed";
import lineAnimation from "../assets/lineAnimation.json";
import Lottie from "lottie-react";

function HeroSection() {
  return (
    <>
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
            <span>Your Personal AI Assistant for</span>{" "}
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
            documents, it helps users grasp their implications, making
            navigating the legal landscape accessible to all.
          </p>
          <div>
            <button
              onClick={() => {
                const element = document.getElementById("upload");
                element.scrollIntoView({ behavior: "smooth" });
              }}
              className="btn mt-[2.5rem]"
              // style={{ marginTop: "2.5rem" }}
            >
              Get Started
            </button>
          </div>
        </div>
        <div style={{ marginRight: "8vw" }}>
          <img
            className="min-w-[30vw] mb-[5vh]"
            src="./upload1.svg"
            alt="landing page"
          />
        </div>
      </div>
      <Lottie animationData={lineAnimation} />
    </>
  );
}

export default HeroSection;
