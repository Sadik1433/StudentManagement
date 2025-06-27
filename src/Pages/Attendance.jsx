import Item from "../Component/Item/Item";
import "./CssFile/Attendance.css";
import { IoPersonAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const stuDetails = [
  {
    id: "S1",
    name: "Rahul Sharma",
    Roll: "101",
    class: "10th Grade",
    section: "A",
    marks: {
      Mathematics: 88,
      English: 76,
      Science: 91,
      SocialStudies: 82,
      Hindi: 79,
      ComputerScience: 95,
    },
    total_marks: 511,
    percentage: 85.17,
    grade: "A",
  },
  {
    id: "S2",
    name: "Rahul Sharma",
    Roll: "102",
    class: "10th Grade",
    section: "A",
    marks: {
      Mathematics: 88,
      English: 76,
      Science: 91,
      SocialStudies: 82,
      Hindi: 79,
      ComputerScience: 95,
    },
    total_marks: 511,
    percentage: 85.17,
    grade: "A",
  },
];

const Attendance = () => {
  return (
    <div className="attend-page">
      <div className="attend-header">
        <h1 className="attend-heading">Attendance</h1>
        <div className="date-container">
          <input type="date" className="date-input" />
        </div>
        <Link to="/add-student" className="add-link">
          <button className="add-btn">
            <IoPersonAddSharp size={20} />
          </button>
        </Link>
      </div>
      <div className="attend-container">
        <div className="attend-register">
          {stuDetails.map((student) => (
            <Item key={student.id} details={student} />
          ))}
        </div>
        <div className="attend-display">
          <h1>Attend-Display</h1>
        </div>
      </div>
    </div>
  );
};
export default Attendance;
