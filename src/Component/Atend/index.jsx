import  { useState } from "react";

const students = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "John" },
];


const Atend = () => {
  const [attendance, setAttendance] = useState({});

  const handleToggle = (id) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Attendance</h2>
      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Present</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={attendance[student.id] || false}
                  onChange={() => handleToggle(student.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Attendance Summary</h3>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - {attendance[student.id] ? "Present" : "Absent"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Atend;
