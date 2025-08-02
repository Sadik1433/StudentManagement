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
    <div className="marks-top-bar">
      <h2>Enter Student Marks</h2>
     <Link to='/display'>
      <button  className="marks-button">
       Marks
      </button>
     </Link>
    </div>
      <div className="marks-form-container">
      <form onSubmit={handleSubmit} >
      <div>
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
              {student.rollNumber}. {student.name}
            </option>
          ))}

        </select>
     
        <select
          value={formData.examType}
          onChange={(e) => setFormData({ ...formData, examType: e.target.value })}
          required
        >
          <option value="">Select Exam</option>
          <option value="Mid Term">Midterm</option>
          <option value="Final">Final</option>
          <option value="Unit Test">Unit Test</option>
        </select>
     </div>
        {formData.subjects.map((subj, index) => (
          <div key={index} className="marks-input-container">
            <label className="label-text">{subj.subject}:- </label>
            <input
              type="number"
              placeholder="Marks"
              value={subj.marks}
              onChange={(e) => handleMarksChange(e, index)}
              required
            />
          </div>
        ))}
         <div className="btn-container">
        {/* <button type="submit" className="add-marks-btn">
          {editIndex !== null ? "Update Marks" : "Add Marks"}
        </button> */}
         </div>
      </form>
         </div>
    </div>
  );
};

export default MarksManagement;
