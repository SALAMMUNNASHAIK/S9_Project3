import { Link, useLocation } from "react-router-dom";
import "../components/styles.css";

function Home() {
  const location = useLocation();

  return (
    <div className="head">
      <button><Link to="/" state={{ course: "CSE" }}>Main</Link></button>
        <button><Link to="/home"state={{ course: "CSE" }}>Home</Link></button>
        <button><Link to="/about"state={{ course: "CSE" }}>About</Link></button>
        <button><Link to="/contact" state={{ course: "CSE" }}>Contact</Link></button>
      <br />

      <h1>This is the Home page u know!!!!</h1>
      <p>I belong to --- {location.state?.course}</p>
    </div>
  );
}

export default Home;
