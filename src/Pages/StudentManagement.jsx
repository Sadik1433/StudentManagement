import { useState } from "react";
import AddStudentForm from "../Component/AddStudentForm/AddStudentForm.jsx";
import EditStudentForm from "../Component/EditStudentForm/EditStudentForm.jsx";
import StudentList from "../Component/StudentList/StudentList.jsx";
import StudentProfile from "./StudentProfile.jsx";
import "./CssFile/StudentManagement.css";

const StudentManagement = () => {
  const [addingStudent, setAddingStudent] = useState(false);

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Sana Sheikh",
      rollNumber: "1",
      className: "Class 10-A",
      dob: "2009-05-14",
      phone: "9876543210",
      email: "sana@example.com",
      address: "123, MG Road, Mumbai",
      imageUrl:
        "https://res.cloudinary.com/dnarxeess/image/upload/v1746763169/WhatsApp_Image_2025-05-09_at_09.27.50_29081efb-removebg-preview_zxthzd.png",
    },
    {
      id: 2,
      name: "Rahul Verma",
      rollNumber: "2",
      className: "Class 10-A",
      dob: "2009-06-22",
      phone: "9123456789",
      email: "rahul@example.com",
      address: "22, Nehru Street, Delhi",
      imageUrl:
        "https://res.cloudinary.com/dnarxeess/image/upload/v1746763169/WhatsApp_Image_2025-05-09_at_09.27.50_29081efb-removebg-preview_zxthzd.png",
    },
    {
      id: 3,
      name: "Rahul Sharma",
      rollNumber: "3",
      className: "Class 10-A",
      dob: "2009-06-22",
      phone: "9123456789",
      email: "rahul@example.com",
      address: "22, Nehru Street, Delhi",
      imageUrl:
        "https://res.cloudinary.com/dnarxeess/image/upload/v1746763169/WhatsApp_Image_2025-05-09_at_09.27.50_29081efb-removebg-preview_zxthzd.png",
    },
  ]);

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
