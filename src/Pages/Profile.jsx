import "./CssFile/Profile.css";
import { useContext } from "react";
import { IoPersonAddSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { StudentContext } from "../Context/StudentContext";

const Profile = () => {
  const { students_data } = useContext(StudentContext);

  return (
    <div className="profile-page">
      <div className="profile-header">
        <h5 className="student-list-heading">StudentsList</h5>
        <div className="filter-container">
          <select className="filter-tab">
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
          <Link to="/add-student" className="add-link">
            <button className="add-btn">
              <IoPersonAddSharp size={20} />
            </button>
          </Link>
        </div>
      </div>
      <div className="profile-container">
        {students_data.map((profile, id) => (
          <li className="card">
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
