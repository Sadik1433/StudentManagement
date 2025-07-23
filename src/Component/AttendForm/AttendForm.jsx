import { useState } from "react";
import "./AttendForm.css";

const AttendForm = ({ students, onSubmit }) => {
  const [date, setDate] = useState("");
  const [records, setRecords] = useState({});

  const handleToggle = (id) => {
    setRecords((prev) => ({
      ...prev,
      [id]: prev[id] === "Present" ? "Absent" : "Present",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date) return alert("Please select a date");
    const attendance = students.map((student) => ({
      studentId: student.id,
      studentName: student.name,
      status: records[student.id] || "Absent",
    }));
    onSubmit({ date, records: attendance });
    setDate("");
    setRecords({});
  };

  return (
    <form onSubmit={handleSubmit} className="attendForm-container">
      <h2>Mark Attendance</h2>
      <div className="attend-btn-container">
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          className="date-input"
        />
        <button className="attend-btn save">Save Attendance</button>
      </div>
      <div className="attend-student-list">
        {students.map((student) => (
          <div key={student.id} className="attend-each-student">
            <span>
              {student.id} . {student.name}
            </span>
            <button
              type="button"
              onClick={() => handleToggle(student.id)}
              className={`attend-btn ${
                records[student.id] === "Present" ? "present" : "absent"
              }`}
            >
              {records[student.id] || "Absent"}
            </button>
          </div>
        ))}
      </div>
    </form>
  );
};

export default AttendForm;
