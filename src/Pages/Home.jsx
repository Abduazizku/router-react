
import { Outlet } from "react-router-dom";
import Navbar from "../companents/Navbar";
import "../index.css"

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1 style={{ width: "100px", margin: "0 auto" }}>Home</h1>
      <Navbar />

      <div>
        <Outlet />
      </div>

      <footer>
        <h1>FOOTER</h1>
      </footer>
    </div>
  );
};

export default Home;