import { useContext, useState } from "react";
import AddStudentForm from "../Component/AddStudentForm/AddStudentForm.jsx";
import EditStudentForm from "../Component/EditStudentForm/EditStudentForm.jsx";
import StudentList from "../Component/StudentList/StudentList.jsx";
import StudentProfile from "./StudentProfile.jsx";
import "./CssFile/StudentManagement.css";
import { StudentContext } from "../Context/StudentContext.jsx";

const StudentManagement = () => {
  const{students, setStudents}= useContext(StudentContext);
  const [addingStudent, setAddingStudent] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [editingStudent, setEditingStudent] = useState(null);

  const handleSaveEdit = (updatedStudent) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
    );
    setEditingStudent(null);
    setSelectedStudent(updatedStudent);
  };

  return (
    <div className="StudentManagementContainer ">
      <h1>Student Management</h1>

      {addingStudent ? (
        <AddStudentForm
          onAdd={(newStudent) => {
            setStudents((prev) => [...prev, newStudent]);
            setAddingStudent(false);
          }}
          onCancel={() => setAddingStudent(false)}
        />
      ) : editingStudent ? (
        <EditStudentForm
          student={editingStudent}
          onSave={handleSaveEdit}
          onCancel={() => setEditingStudent(null)}
        />
      ) : selectedStudent ? (
        <StudentProfile student={selectedStudent} />
      ) : (
        <>
          <div className="AddStudentButtonContainer">
            <button
              className="AddStudentButton"
              onClick={() => setAddingStudent(true)}
            >
              + Add Student
            </button>
          </div>
          <StudentList
            students={students}
            onView={setSelectedStudent}
            onEdit={setEditingStudent}
          />
        </>
      )}
    </div>
  );
};

export default StudentManagement;
