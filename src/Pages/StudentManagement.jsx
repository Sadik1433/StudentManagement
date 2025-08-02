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
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const handleSaveEdit = (updatedStudent) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === updatedStudent.id ? updatedStudent : s))
    );
    setEditingStudent(null);
    setSelectedStudent(updatedStudent);
  };
  
  const uniqueClasses = [...new Set(students.map((s) => s.className))];

  const filtered = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesClass = selectedClass
      ? student.className === selectedClass
      : true;

    return matchesSearch && matchesClass;
  });
  return (
    <div className="StudentManagementContainer ">
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
            <div className='student-search-container '>
          <input
           type="text"
           placeholder="Search by name or roll number"
           value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
          />
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">All Classes</option>
          {uniqueClasses.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>
        </div>
        <div>
            <button
              className="AddStudentButton"
              onClick={() => setAddingStudent(true)}
            >
              + Add Student
            </button>
      </div>
          </div>
          <StudentList
            students={students}
            onView={setSelectedStudent}
            onEdit={setEditingStudent}
            filtered={filtered}
          />
        </>
      )}
    </div>
  );
};

export default StudentManagement;
