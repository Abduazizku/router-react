import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <ol>
      <li>
        <NavLink 
          to="/posts" 
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/comments" 
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Comments
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/albums" 
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Albums
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/photos" 
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Photos
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/todos" 
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Todos
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/users" 
          style={({ isActive }) => ({ color: isActive ? "red" : "black" })}
        >
          Users
        </NavLink>
      </li>
    </ol>
  );
};

export default Navbar;
