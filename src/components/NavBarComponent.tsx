import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarComponent() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/">Hjem</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Prosjekter</NavLink>
          </li>
          <li>
            <NavLink to="/about">Om meg</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
