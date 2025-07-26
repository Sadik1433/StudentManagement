import "./Home.css";
import { Link } from "react-router-dom";

const stuData = [
  {
    id: 1,
    name: "Student List",
    description: "View and edit student profile information.",
    link: "/students",
  },
  {
    id: 2,
    name: "Attendance",
    description: "View exam schedules and results.",
    link: "/attend",
  },
  {
    id: 3,
    name: "Course Management",
    description: "Search all Teachers Data",
    link: "/course",
  },  
  {
    id: 4,
    name: "TeachersData",
    description: "Search all Teachers Data",
    link: "/teachers",
  },
  {
    id: 5,
    name: "Settings",
    description: "Manage your account settings.",
    link: "/settings",
  },
];

const Home = () => {
  return (
    <div className="Home-container">
      <h1 className="home-header"></h1>
      <ul className="home-list">
        {stuData.map((item) => (
          <li key={item.id} className="home-item">
            <h2 className="item-head">{item.name}</h2>
            <p className="item-desc">{item.description}</p>
            <div className="item-btn-container">
              <Link to={item.link}>
                <button className="item-btn">Open</button>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
