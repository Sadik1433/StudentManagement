import "./Home.css";
import { Link } from "react-router-dom";

const studentData = [
  {
    id: 1,
    name: "Student List",
    description: "Browse, add, edit, and manage student profiles and personal details.",
    link: "/students",
  },
  {
    id: 2,
    name: "Attendance",
    description: "Track and update student attendance records with real-time insights.",
    link: "/attend",
  },
  {
    id: 3,
    name: "Student Marks",
    description: "Add, edit, and view student marks, grades, and academic performance.",
    link: "/marks",
  },
  {
    id: 4,
    name: "Course Management",
    description: "Create, update, and manage available courses and subject details.",
    link: "/course",
  },
  {
    id: 5,
    name: "Settings",
    description: "Customize your account preferences, security, and dashboard settings.",
    link: "/settings",
  },
];

const Home = () => {
  return (
    <div className="Home-container">
      <h1 className="home-header">School Management Dashboard</h1>
      <ul className="home-list">
        {studentData.map((item) => (
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
