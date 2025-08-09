import "./LandingPage.css";
import Navbar from "../Navbar/Navbar.jsx";
 import { Link } from "react-router-dom";
const features = [
  { icon: "👤", title: "Add Students", desc: "Quickly add new student profiles." },
  { icon: "✏️", title: "Edit Records", desc: "Update student data in seconds." },
  { icon: "📅", title: "Track Attendance", desc: "Monitor and record daily attendance." },
  { icon: "📚", title: "Manage Courses", desc: "Assign and organize courses easily." }
];
const LandingPage = () => {
  return (
    <>
    <Navbar />
    <div className="hero-container">
    <section className="hero" id="hero">
      <div className="hero-text">
        <h1>Manage Student Data Easily</h1>
        <p>
          Streamline your academic workflow — add, edit, and track student records effortlessly.
        </p>
        <div className="btn-container">
        <Link to='login'>
        <button className="started-btn">
        Login
        </button>
        </Link>          
        <Link to='signup'>
        <button className="started-btn">
        SignUp
        </button>
        </Link>          
        </div>
      </div>
      <div className="hero-image">
        {/* <img src={} alt="Students illustration" /> */}
      </div>
    </section>
     <section className="features" id="features">
      <h2>Features</h2>
      <div className="feature-cards">
        {features.map((feat, idx) => (
          <article className="feature-card" key={idx}>
            <span className="feature-icon">{feat.icon}</span>
            <h3>{feat.title}</h3>
            <p>{feat.desc}</p>
          </article>
        ))}
      </div>
    </section>
    <section className="about" id="about">
    <div className="about-container">
      <h2>About Our System</h2>
      <p>
        Our Student Management System simplifies how institutions handle student data.
        With intuitive features and secure cloud storage, administrators and teachers
        can focus more on students and less on paperwork.
      </p>
    </div>
    <footer className="footer">
      <div className="footer-head-container">
        &copy; {new Date().getFullYear()} StudentSys. All rights reserved.
      </div>
      <div className="footer-links">
        <a href="#hero">Home</a>
        <a href="#features">Features</a>
        <a href="#about">About</a>
        <a href="mailto:contact@studentsys.com">Contact</a>
      </div>
      <div>
        Contact: <a href="mailto:contact@studentsys.com">contact@studentsys.com</a>
      </div>
    </footer>
    </section>
    </div>
    </>
  );
}
export default LandingPage;
