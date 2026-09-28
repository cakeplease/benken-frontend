import kasiaImg from "../../assets/kasia.jpg";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div>
      <h1>Om meg</h1>
      <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
        <img
          src={kasiaImg}
          alt="Kasia"
          style={{ width: "200px", height: "200px", objectFit: "cover", borderRadius: "8px", flexShrink: 0 }}
        />
        <div>
          <p>
            Github:{" "}
            <a href="https://github.com/cakeplease" target="_blank">
              https://github.com/cakeplease
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
