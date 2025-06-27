import { useParams } from "react-router-dom";
import "./ProfileDetails.css";
import StudentBio from "../StudentBio/StudentBio";
import { useContext } from "react";
import { StudentContext } from "../../Context/StudentContext";
import Marks from "../Marks/Marks";
import Attendance from "../Attendance/Attendance";


const ProfileDetails = () => {
  const{students_data} = useContext(StudentContext);
  const { dataId } = useParams();
  const student = students_data.find((e) => e.id === Number(dataId));
  return (
    <div>
      <StudentBio student={student}/>
      <Marks student={student}/>
      <Attendance student={student}/>
    </div>
  );
};

export default ProfileDetails;
