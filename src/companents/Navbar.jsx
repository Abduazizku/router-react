import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkStyle = ({ isActive }) => ({
    background: isActive ? "red" : "white",
    color: isActive ? "white" : "black",
    padding: "8px 16px",
    border: "1px solid gray",
    borderRadius: "6px",
    cursor: "pointer",
  });

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
      <NavLink to="/posts" style={linkStyle}>
        Posts
      </NavLink>
      <NavLink to="/comments" style={linkStyle}>
        Comments
      </NavLink>
      <NavLink to="/albums" style={linkStyle}>
        Albums
      </NavLink>
      <NavLink to="/photos" style={linkStyle}>
        Photos
      </NavLink>
      <NavLink to="/todos" style={linkStyle}>
        Todos
      </NavLink>
      <NavLink to="/users" style={linkStyle}>
        Users
      </NavLink>
    </div>
  );
};

export default Navbar;
