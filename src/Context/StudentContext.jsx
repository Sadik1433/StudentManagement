import { createContext } from "react";
import { useState } from "react";

const students_data = [
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
];

const course_data =[
  { id: 1, name: 'Mathematics', instructor: 'Dr. Smith', duration: '3' },
  { id: 2, name: 'Biology', instructor: 'Dr. Smith', duration: '3' },
  { id: 3, name: 'Science', instructor: 'Dr. Smith', duration: '3' },
]
 
export const StudentContext = createContext(null);

const StudentContextProvider = (props) => {
  const [students, setStudents] = useState(students_data);
  const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [assignments, setAssignments] = useState([]);
  const [courses, setCourses] = useState(course_data);
  const [selectedCourse, setSelectedCourse] = useState(null);
  
  const handleAddOrUpdate = (course) => {
    if (course.id) {
      setCourses((prev) =>
        prev.map((c) => (c.id === course.id ? course : c))
      );
    } else {
      const newCourse = { ...course, id: Date.now() };
      setCourses((prev) => [...prev, newCourse]);
    }
  };
   
  const handleDelete = (id) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
    setAssignments((prev) => prev.filter((a) => parseInt(a.courseId) !== id));
    if (selectedCourse?.id === id) {
      setSelectedCourse(null);
    }
  };
  
  const handleEdit = (course) => {
    setSelectedCourse(course);
  };

  const handleAssign = (assign) => {
    setAssignments((prev) => [...prev, assign]);
  };

  const handleUnassign = (index) => {
    setAssignments((prev) => prev.filter((_, i) => i !== index));
  };

    const handleAttendanceSubmit = (record) => {
    setAttendanceRecords((prev) => [...prev, record]);
  };
  
  const contextData = { students, attendanceRecords, setStudents,handleAttendanceSubmit, courses, handleAddOrUpdate, handleDelete, handleEdit, handleAssign, handleUnassign,assignments, selectedCourse, setSelectedCourse };
  return (
    <StudentContext.Provider value={contextData}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
