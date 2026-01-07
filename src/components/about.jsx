import { Link, useLocation } from "react-router-dom";
import "../components/styles.css";

function About() {
  const location = useLocation();

  return (
    <div className="head">
      <nav className="nav">
        <button><Link to="/" state={{ course: "CSE" }}>Main</Link></button>
        <button><Link to="/home"state={{ course: "CSE" }}>Home</Link></button>
        <button><Link to="/about"state={{ course: "CSE" }}>About</Link></button>
        <button><Link to="/contact" state={{ course: "CSE" }}>Contact</Link></button>
      </nav>

      <h1>This is the About page!</h1>

      <p>
        I belong to --- <b>{location.state?.course}</b>
      </p>
    </div>
  );
}

export default About;
