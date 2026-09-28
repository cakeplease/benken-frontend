import { NavLink } from "react-router-dom";
import "./ProjectList.css";

export default function ProjectList() {
  return (
    <div>
      <ul className="project-list">
        <li>
          <NavLink to="/projects/cube">ThreeJS Cube</NavLink>
        </li>

        <li>
          <NavLink to="/projects/solarsystem">ThreeJS Solar system</NavLink>
        </li>
      </ul>
    </div>
  );
}
