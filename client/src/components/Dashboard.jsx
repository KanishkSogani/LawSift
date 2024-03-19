import { Card } from "@material-ui/core";

function Dashboard() {
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
      <div>
        <Card
          style={{
            margin: 0,
            width: 440,
            minHeight: 180,
            maxHeight: 180,
            padding: 20,
            backgroundColor: " #F7F9FE",
            overflowY: "auto",
            className: "style-2",
          }}
        ></Card>
      </div>
    </>
  );
}

export default Dashboard;
