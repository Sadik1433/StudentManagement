import { Link } from "react-router-dom";
import "./CssFile/Profile.css";
import { useContext } from "react";
import { StudentContext } from "../Context/StudentContext";

const Profile = () => {
  const{students_data} = useContext(StudentContext);
  
  return (
    <div className="profile-page">
      {students_data.map((profile,id) => (
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
            <button className="profile-btn">
             Open
             </button>
        </Link>
          </li>
      ))}
    </div>
  );
};

export default Profile;
