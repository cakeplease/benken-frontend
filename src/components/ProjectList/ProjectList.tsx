import { NavLink } from "react-router-dom";
import "./ProjectList.css";

export default function ProjectList() {
  return (
    <div>
      <ul className="project-list">
        <li>
          <NavLink className="link" to="/projects/cube">
            ThreeJS Cube
          </NavLink>
        </li>

        {/* <li>
          <NavLink className="link" to="/projects/solarsystem">
            ThreeJS Solar system
          </NavLink>
        </li> */}
      </ul>
    </div>
  );
}
