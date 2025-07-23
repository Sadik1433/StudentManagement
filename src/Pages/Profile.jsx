import "./CssFile/Profile.css";
import { useContext, useState } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { StudentContext } from "../Context/StudentContext";

const Profile = () => {
  const { students_data } = useContext(StudentContext);
  const [searchclass, setSearchTerm] = useState("");
  const [classFilter, setClassFilter] = useState("");

  const filteredStudents = students_data.filter((student) => {
    return (
      (classFilter === "" || student.class === classFilter) &&
      student.name.toLowerCase().includes(searchclass.toLowerCase())
    );
  });
  return (
    <div className="profile-page">
      <div className="profile-header">
      <h1 className="student-list">Student Lists</h1>
        <div className="filter-container">
          <input
            type="text"
            placeholder="Search by name..."
            value={searchclass}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="name-input"
          />
          <select
            value={classFilter}
            onChange={(e) => setClassFilter(e.target.value)}
            className="select-filter"
          >
            <option value="" className="class-option">All Classes</option>
            <option value="8" className="class-option">Class 8</option>
            <option value="9" className="class-option">Class 9</option>
            <option value="10" className="class-option">Class 10</option>
          </select>
          <Link to="/add-student" className="add-link">
            <button className="add-btn">
              <IoPersonAddSharp size={20} />
            </button>
          </Link>
        </div>
      </div>
      <div className="profile-container">
        {filteredStudents.map((profile, id) => (
          <li className="card" key={id}>
            <div className="card-border-top"></div>
            <div className="img-container">
              <img
                src={profile.image}
                alt="Profile"
                className="student-image"
              />
            </div>
            <span>Name: {profile.name}</span>
            <span>Class: {profile.class}</span>
            <span>RollNo:-{profile.rollno}</span>
            <Link to={`/profile/${profile.id}`} key={id} className="link-tag">
              <button className="profile-btn">Open</button>
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Profile;
