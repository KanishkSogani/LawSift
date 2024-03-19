import { useEffect, useState } from "react";
import axios from "axios";

function Footer() {
  const [apiCode, setApiCode] = useState();
  useEffect(() => {
    async function fetchApi() {
      try {
        const response = await axios.post("http://localhost:3000/api/footer");
        setApiCode(response.data.api_code);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchApi();
  }, []);
  return (
    <footer style={{ backgroundColor: "#0E1525", paddingTop: "4rem" }}>
      <p
        style={{
          color: "white",
          marginLeft: "6vw",
          paddingBottom: "1rem",
          textAlign: "center",
        }}
      >
        {`Built By Team Tech Wizards. ${apiCode}`}
      </p>
      {/* <button
        onClick={async () => {
          const response = await axios.post("http://localhost:3000/api/footer");
          console.log(response.data);
        }}
      >
        click me
      </button> */}
    </footer>
  );
}

export default Footer;
