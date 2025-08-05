import { useContext, useState } from "react";
import "./CssFile/Attendance.css";
import { FaClipboardList, FaCalendarAlt } from 'react-icons/fa';
import AttendForm from "../Component/AttendForm/AttendForm.jsx";
import AttendList from "../Component/AttendList/AttendList.jsx";
import { StudentContext } from "../Context/StudentContext.jsx";
import { Link } from "react-router-dom";

const Attendance = () => {

  const [showMonthlyView, setShowMonthlyView] = useState(false);
  
  const {students,attendanceRecords, handleAttendanceSubmit} = useContext(StudentContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
 
  return (
    <div className="Attendance-container">
      <div className="topbar">
      <div className="top-bar-btn-container"> 
        <button className="toggle-button" onClick={toggleSidebar}>
            <FaClipboardList />
            <span>Attend</span>
        </button>
        <Link to='/monthlyView'>
        <button className="toggle-button">
           <FaCalendarAlt  />
            <span>Monthly</span>
        </button>
        </Link>
      </div>
      </div>
      <div className="attendance-form-container">
        <AttendList records={attendanceRecords} />
      </div>
      <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <AttendForm students={students} onSubmit={handleAttendanceSubmit} />
      </div>
    </div>
  );
};

export default Attendance;
