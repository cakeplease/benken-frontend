import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import CubeProjectPage from "./pages/CubeProjectPage";
import SolarSystemPage from "./pages/SolarSystemPage";

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
