import { Link} from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-content">
        <h1 className="landing-head">Welcome to Our Application</h1>
        <p className="landing-para">Your journey starts here. Explore our features and services.</p>
      </div>
      <div className="landing-btn-container">
        <button className="landing-btn">Explore</button>
        <Link to="/login">
          <button className="landing-login-btn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
