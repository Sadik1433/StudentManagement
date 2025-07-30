import React, { useContext, useState } from "react";
import { StudentContext } from "../../Context/StudentContext";
import './MarksDisplay.css'

const MarksDisplay = () => {
  const { students, marksData, setMarksData } = useContext(StudentContext);

  // State for filters
  const [selectedExamType, setSelectedExamType] = useState("Mid Term");
  const [selectedStudentId, setSelectedStudentId] = useState("all");
  const [showMarks, setShowMarks] = useState(true);

  // Get all subjects dynamically
  const allSubjects = Array.from(
    new Set(marksData.flatMap((record) => record.subjects.map((s) => s.subject)))
  );

  // Get all unique exam types for dropdown
  const examTypes = Array.from(new Set(marksData.map((r) => r.examType)));

  // Filter marks only when user clicks "Show Marks"
  const filteredMarks = marksData.filter((record) => {
    if (!showMarks) return false;

    if (selectedExamType && record.examType !== selectedExamType) return false;

    if (selectedStudentId !== "all" && record.studentId !== Number(selectedStudentId))
      return false;

    return true;
  });

  // Edit marks
  const handleMarksEdit = (index) => {
    const newMarks = [...marksData];
    const updatedSubjects = newMarks[index].subjects.map((sub) => {
      const newMark = prompt(`Enter marks for ${sub.subject}`, sub.marks);
      return { ...sub, marks: Number(newMark) || sub.marks };
    });
    newMarks[index].subjects = updatedSubjects;
    setMarksData(newMarks);
  };

  // Delete marks
  const handleMarksDelete = (index) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      const updatedMarks = marksData.filter((_, i) => i !== index);
      setMarksData(updatedMarks);
    }
  };

  return (
    <div className="marks-table-container">
      {/* Selection Form */}
      <div className="select-form">
      <h1>Student Marks</h1>
        <select
          value={selectedExamType}
          onChange={(e) => setSelectedExamType(e.target.value)}
        >
          <option value=""></option>
          {examTypes.map((exam, i) => (
            <option key={i} value={exam}>
              {exam}
            </option>
          ))}
        </select>

        <select
          value={selectedStudentId}
          onChange={(e) => setSelectedStudentId(e.target.value)}
        >
          <option value="all">All Students</option>
          {students.map((s) => (
            <option key={s.id} value={s.id}>
              {s.rollNumber}. {s.name}
            </option>
          ))}
        </select>
      </div>

      {/* Show table only after clicking "Show Marks" */}
        <h1 className="exam-type">{selectedExamType}</h1>
      {showMarks && filteredMarks.length > 0 ? (
        <table border="0" cellPadding="0">
          <thead>
            <tr>
              <th>Name</th>
              {/* <th>Exam Type</th> */}
              {allSubjects.map((sub) => (
                <th key={sub}>{sub}</th>
              ))}
              <th>Total Marks</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMarks.map((record, index) => {
              const student = students.find((s) => s.id === record.studentId);
              if (!student) return null;

              const subjectMarks = {};
              record.subjects.forEach((s) => {
                subjectMarks[s.subject] = s.marks;
              });

              const totalMarks = record.subjects.reduce(
                (sum, s) => sum + Number(s.marks),
                0
              );

              return (
                <tr key={index}>
                  <td>
                    {student.name} <br />
                  </td>
                  {/* <td>{record.examType}</td> */}
                  {allSubjects.map((sub) => (
                    <td key={sub}>{subjectMarks[sub] ?? "-"}</td>
                  ))}
                  <td>{totalMarks}</td>
                  <td>
                    <button onClick={() => handleMarksEdit(index)} className="btn edit-btn">Edit</button>
                    <button className="btn delete-btn "
                      onClick={() => handleMarksDelete(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        showMarks && <p>No records found for the selected filters.</p>
      )}
    </div>
  );
};

export default MarksDisplay;
