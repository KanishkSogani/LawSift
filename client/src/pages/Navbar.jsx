import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        position: "absolute",
        top: "1.5rem",
        display: "flex",
        justifyContent: "space-evenly",
        marginLeft: "8vw",
        fontFamily: "DM Sans",
        marginBottom: "2rem",
      }}
    >
      <div>
        <Link
          style={{ marginTop: 0, color: "white", fontSize: "1.5rem" }}
          to={"/"}
        >
          LawSift
        </Link>
      </div>
      <div style={{ marginLeft: "25vw", fontSize: "1rem" }}>
        <Link className="navlink" to={"/"}>
          Home
        </Link>
        <Link
          className="navlink"
          onClick={() => {
            const element = document.getElementById("features");
            element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Features
        </Link>
        <Link
          className="navlink"
          onClick={() => {
            const element = document.getElementById("about");
            element.scrollIntoView({ behavior: "smooth" });
          }}
        >
          About Us
        </Link>
      </div>
      <div style={{ marginLeft: "19vw" }}>
        <button className="button" role="button">
          Sign Up
        </button>
        <button className="button" role="button" style={{ marginLeft: "2rem" }}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;
