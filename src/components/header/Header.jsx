import "./header.css";
import { NavLink } from "react";

export default function Header() {
  return (
    <header>
      <div className="logo">
        <h1>CSS Theme Generator</h1>
      </div>
      <h6>
        It's as easy as selecting a colour and letting the generator do the work
      </h6>
      <nav id="headerNavbar">
        {/* <NavLink to={"/"}>Home</NavLink> */}
        {/* <NavLink to={"/generator"}>Generator</NavLink> */}
        {/* <NavLink to={"/generator/saved"}>Saved Themes</NavLink> */}
      </nav>
    </header>
  );
}
