import { NavLink } from "react-router";
import "./NavButton.css";

const NavButton = ({ path, text }) => {
  return (
    <NavLink to={path} className="navlink">
      {text}
    </NavLink>
  );
};

export default NavButton;
