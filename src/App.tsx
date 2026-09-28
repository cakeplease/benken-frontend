import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent/NavBarComponent";
import HomePage from "./pages/HomePage/HomePage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import CubeProjectPage from "./pages/CubeProjectPage/CubeProjectPage";
import SolarSystemPage from "./pages/SolarSystemPage/SolarSystemPage";

function App() {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects/cube" element={<CubeProjectPage />} />
        <Route path="/projects/solarsystem" element={<SolarSystemPage />} />
      </Routes>
    </div>
  );
}

export default App;
