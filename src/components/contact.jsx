import { Link, useLocation } from "react-router-dom";
import "../components/styles.css";

function Contact() {
  const location = useLocation();

  return (
    <div className="head">
      <nav className="nav">
        <button><Link to="/" state={{ course: "CSE" }}>Main</Link></button>
        <button><Link to="/home"state={{ course: "CSE" }}>Home</Link></button>
        <button><Link to="/about"state={{ course: "CSE" }}>About</Link></button>
        <button><Link to="/contact" state={{ course: "CSE" }}>Contact</Link></button>
      </nav>

      <h1>Welcome to Contact Page!</h1>

      <div className="contact-card">
        <img
          src="/photo1.jpg"
          alt="Profile"
          className="profile-pic"
        />

        <p><b>Name:</b> Salam Munna Shaik</p>
        <p><b>ID Number:</b> 2500030221</p>
        <p><b>Year:</b> 1st Year</p>
        <p><b>Branch:</b> CSE</p>
        <p><b>Address:</b> Tenali</p>
      </div>

      <p>I belong to --- {location.state?.course}</p>
    </div>
  );
}

export default Contact;
