import kasiaImg from "../../assets/kasia.jpg";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <h1>Om meg</h1>
      <div className="about-content">
        <div className="about-image-section">
          <img src={kasiaImg} alt="Kasia" className="about-image" />
        </div>
        <div className="about-text-section">
          <p className="about-intro">
            Hei! Mitt navn er Kasia. Så artig at du har funnet veien hit.
          </p>
          <section className="contact-section">
            <h2 className="contact-title">Let's connect!</h2>
            <ul className="contact-list">
              <li>
                <a
                  className="link"
                  href="https://github.com/cakeplease"
                  target="_blank"
                >
                  Github
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/katarzyna-szlejter/"
                  target="_blank"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
