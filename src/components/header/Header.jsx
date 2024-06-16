import "./header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <h1>CSS Palette Generator</h1>
      </div>
      <h6>
        It's as easy as selecting a colour and letting the generator do the work
      </h6>
      <nav id="headerNavbar">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/generator"}>Generator</NavLink>
      </nav>
    </header>
  );
}
