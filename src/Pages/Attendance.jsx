import { useContext, useState } from "react";
import "./CssFile/Attendance.css";
import AttendForm from "../Component/AttendForm/AttendForm.jsx";
import AttendList from "../Component/AttendList/AttendList.jsx";
import { StudentContext } from "../Context/StudentContext.jsx";
import { Link } from "react-router-dom";
// import MonthlyAttendanceView from "../Component/MonthlyView/MonthlyView.jsx";

const Attendance = () => {
  // const [attendanceRecords, setAttendanceRecords] = useState([]);

  const [showMonthlyView, setShowMonthlyView] = useState(false);
  
  const {students,attendanceRecords, handleAttendanceSubmit} = useContext(StudentContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
 

  return (
    <div className="Attendance-container">
      <div className="topbar">
        <h1 className="attend-heading">Attendance Management</h1>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? "Attendance List" : "Attendance List"}
        </button>
        <Link to='/monthlyView'>
        <button className="toggle-button">
          {showMonthlyView ? "Monthly" : "Monthly "}
        </button>
        </Link>
      </div>
      <div className="attend-display">
      <div className="attendance-form-container">
        <AttendList records={attendanceRecords} />
      </div>
      </div>
      <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <AttendForm students={students} onSubmit={handleAttendanceSubmit} />
      </div>
    </div>
  );
};

export default Attendance;
