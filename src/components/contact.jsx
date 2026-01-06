import { Link } from "react-router-dom";
import "../components/styles.css";

function Contact() {
  return (
    <div className="head">
      <nav className="nav">
        <Link to="/">Main</Link>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
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
    </div>
  );
}

export default Contact;
