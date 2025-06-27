import "./Home.css";
import { Link } from "react-router-dom";

const stuData = [
  {
    id: 1,
    name: "Attendance",
    description: "View and manage student attendance records.",
    link: "/attend",
  },
  {
    id: 2,
    name: "Student List",
    description: "View and edit student profile information.",
    link: "/student",
  },
  {
    id: 3,
    name: "Exam Schedules",
    description: "View exam schedules and results.",
    link: "/exams",
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
