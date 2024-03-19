import { Card } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

function Dashboard(image, setImage) {
  useEffect(() => {
    async function fetchApi() {
      const formData = new FormData();
      formData.append("pdfFile", image);
      try {
        const response = await axios.post(
          "http://localhost:3000/analysis/summary",
          image,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchApi();
  }, []);
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
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus
          eligendi quo fugit deserunt a aperiam, suscipit optio officia
          recusandae perspiciatis ut incidunt possimus rem dolore? Sapiente,
          consectetur eum. Magni repudiandae voluptas quam qui nihil ipsa nobis
          possimus eius molestiae quis numquam hic repellat dolorem nisi, ipsam
          iusto ratione consequuntur dolore ea? Mollitia nam tempore minus est
          aut magnam quae laudantium repellendus, nobis voluptatibus ratione
          fugiat quam quas perferendis facilis? Dignissimos accusantium quisquam
          nihil ipsam! Cum totam ipsum autem non animi sunt tempore error culpa
          nam, at illum hic obcaecati nulla rerum quae excepturi. In animi
          veniam maxime excepturi enim dolore accusamus, incidunt rerum tenetur
          vero veritatis, dolores natus officiis rem deserunt ut ratione. Earum
          hic tenetur eos pariatur blanditiis excepturi nam nostrum, eveniet
          possimus nobis harum officiis consequatur ipsum! Ipsa voluptatem
          quaerat sint commodi enim dolorum pariatur consequatur placeat
          reiciendis. Similique dolor fugit fuga, tempore quasi cum deserunt
          quisquam, praesentium facere maxime debitis consequatur libero
          reprehenderit excepturi blanditiis eveniet velit at aperiam eligendi
          enim quos ducimus! Unde sunt fugit fuga aliquam soluta vel quos.
          Cupiditate doloribus dolorum itaque alias laboriosam neque, possimus
          error recusandae inventore. Nam, assumenda, porro exercitationem
          architecto recusandae illum totam optio quaerat placeat nulla,
          possimus quae. Totam.
        </Card>
      </div>
    </>
  );
}

export default Dashboard;
