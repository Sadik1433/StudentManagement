import { useState } from "react";
import "./CssFile/Attendance.css";
import AttendForm from "../Component/AttendForm/AttendForm.jsx";
import AttendList from "../Component/AttendList/AttendList.jsx";
import MonthlyAttendanceView from "../Component/MonthlyView/MonthlyView.jsx";

const Attendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [showMonthlyView, setShowMonthlyView] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleMonthlyview = () => setShowMonthlyView(!showMonthlyView);

  const students = [
    { id: 1, name: "Amit Kumar" },
    { id: 2, name: "Sana Sheikh" },
    { id: 3, name: "Rahul Verma" },
  ];

  const handleAttendanceSubmit = (record) => {
    setAttendanceRecords((prev) => [...prev, record]);
  };

  return (
    <div className="Attendance-container">
      <div className="topbar">
        <h1 className="attend-heading">Attendance Management</h1>
        <button className="toggle-button" onClick={toggleSidebar}>
          {isOpen ? "Attendance List" : "Attendance List"}
        </button>
        <button className="toggle-button" onClick={toggleMonthlyview}>
          {showMonthlyView ? "Monthly" : "Monthly "}
        </button>
      </div>
      <div className="attend-display">
      <div className="attendance-form-container">
        <AttendList records={attendanceRecords} />
      </div>
        <div className="monthly-view">
          {showMonthlyView ? (
              <MonthlyAttendanceView
                attendanceRecords={attendanceRecords}
                students={students}
              />
          ) : (
            <div className="no-monthly-view">
              <p>Click the button to view monthly attendance.</p>
            </div>
          )}
        </div>
      </div>
      <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <AttendForm students={students} onSubmit={handleAttendanceSubmit} />
      </div>
    </div>
  );
};

export default Attendance;
