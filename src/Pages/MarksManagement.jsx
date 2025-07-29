import { useContext, useState } from "react";
import { StudentContext } from "../Context/StudentContext";
import './CssFile/MarksManagement.css'
import { Link } from "react-router-dom";

const MarksManagement = () => {
  const { students, marksData, setMarksData } = useContext(StudentContext);

  const emptySubjects = [
    { subject: "Math", marks: "" },
    { subject: "Science", marks: "" },
    { subject: "English", marks: "" },
    { subject: "History", marks: "" },
    { subject: "Geography", marks: "" },
    { subject: "Computer", marks: "" }
  ];

  const [formData, setFormData] = useState({
    studentId: "",
    examType: "",
    subjects: emptySubjects
  });
  const [editIndex, setEditIndex] = useState(null);

  const handleMarksChange = (e, index) => {
    const updatedSubjects = [...formData.subjects];
    updatedSubjects[index].marks = e.target.value;
    setFormData({ ...formData, subjects: updatedSubjects });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editIndex !== null) {
      const updatedMarks = [...marksData];
      updatedMarks[editIndex] = formData;
      setMarksData(updatedMarks);
      setEditIndex(null);
    } else {
      setMarksData([...marksData, formData]);
    }

    setFormData({ studentId: "", examType: "", subjects: emptySubjects });
  };

  
  return (
    <div className="marks-page">
    <Link to='/display'>Marks</Link>
      <h2>🎓 Marks Management</h2>
      <div className="marks-form-container">
      
      <form onSubmit={handleSubmit} className="marks-form">
      <div className="select-container">
        <select
          value={formData.studentId}
          onChange={(e) =>
            setFormData({ ...formData, studentId: parseInt(e.target.value) })
          }
          required
        >
          <option value="">Select Student</option>
          {students.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name} (Roll: {student.rollNumber})
            </option>
          ))}

        </select>
     
        <select
          value={formData.examType}
          onChange={(e) => setFormData({ ...formData, examType: e.target.value })}
          required
        >
          <option value="">Select Exam</option>
          <option value="Midterm">Midterm</option>
          <option value="Final">Final</option>
          <option value="Unit Test">Unit Test</option>
        </select>
     </div>
        {formData.subjects.map((subj, index) => (
          <div key={index} className="marks-input-container">
            <label>{subj.subject}: </label>
            <input
              type="number"
              placeholder="Marks"
              value={subj.marks}
              onChange={(e) => handleMarksChange(e, index)}
              required
            />
          </div>
        ))}

        <button type="submit">
          {editIndex !== null ? "Update Marks" : "Add Marks"}
        </button>
      </form>
      

     {/* <hr /> */}

      {/* <h3>📋 Marks Records</h3>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Student</th>
            <th>Exam Type</th>
            <th>Subjects</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {marksData.map((record, index) => {
            const student = students.find((s) => s.id === record.studentId);
            return (
              <tr key={index}>
                <td>{student ? student.name : "Unknown"}</td>
                <td>{record.examType}</td>
                <td>
                  {record.subjects.map((s, i) => (
                    <div key={i}>
                      {s.subject}: {s.marks}
                    </div>
                  ))}
                </td>
                <td>
                  <button onClick={() => handleEdit(index)}>✏ Edit</button>
                  <button onClick={() => handleDelete(index)}>🗑 Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
    </div>
  );
};

export default MarksManagement;
