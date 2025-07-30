import { createContext } from "react";
import { useState } from "react";

const teachers_data = [
  {
    id: 1,
    name: "John Doe",
    subject: "Mathematics",
    email: "john@example.com",
    age: 35,
    gender: "Male",
    experience: "10 Years",
    phone: "9876543210",
  },
];

const students_data = [
  {
    id: 1,
    studentId: 1,
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
    studentId: 2,
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
    studentId: 3,
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

const marks_data = [
  {
    studentId: 1, // Sana Sheikh
    examType: "Mid Term",
    subjects: [
      { subject: "Math", marks: 85 },
      { subject: "Science", marks: 90 },
      { subject: "English", marks: 88 },
      { subject: "History", marks: 76 },
      { subject: "Geography", marks: 80 },
      { subject: "Computer", marks: 92 },
    ],
  },
  {
    studentId: 1, // Sana Sheikh
    examType: "Final Exam",
    subjects: [
      { subject: "Math", marks: 89 },
      { subject: "Science", marks: 93 },
      { subject: "English", marks: 91 },
      { subject: "History", marks: 82 },
      { subject: "Geography", marks: 87 },
      { subject: "Computer", marks: 95 },
    ],
  },
  {
    studentId: 2, // Rahul Verma
    examType: "Mid Term",
    subjects: [
      { subject: "Math", marks: 78 },
      { subject: "Science", marks: 82 },
      { subject: "English", marks: 74 },
      { subject: "History", marks: 70 },
      { subject: "Geography", marks: 75 },
      { subject: "Computer", marks: 88 },
    ],
  },
  {
    studentId: 2, // Rahul Verma
    examType: "Final Exam",
    subjects: [
      { subject: "Math", marks: 81 },
      { subject: "Science", marks: 85 },
      { subject: "English", marks: 79 },
      { subject: "History", marks: 73 },
      { subject: "Geography", marks: 77 },
      { subject: "Computer", marks: 90 },
    ],
  },
  {
    studentId: 3, // Rahul Sharma
    examType: "Mid Term",
    subjects: [
      { subject: "Math", marks: 88 },
      { subject: "Science", marks: 84 },
      { subject: "English", marks: 80 },
      { subject: "History", marks: 78 },
      { subject: "Geography", marks: 82 },
      { subject: "Computer", marks: 89 },
    ],
  },
  {
    studentId: 3, // Rahul Sharma
    examType: "Final Exam",
    subjects: [
      { subject: "Math", marks: 92 },
      { subject: "Science", marks: 89 },
      { subject: "English", marks: 85 },
      { subject: "History", marks: 80 },
      { subject: "Geography", marks: 83 },
      { subject: "Computer", marks: 95 },
    ],
  },
];

const course_data =[
  { id: 1, name: 'Mathematics', instructor: 'Dr. Smith', duration: '3', startDate: '2025-01-01',time: '10:00 - 11:30 AM', courseCode: 'A134',  coursedescription: 'nothing at present' },
  { id: 2, name: 'Biology', instructor: 'Dr. Smith', duration: '3' ,startDate: '2025-01-01', time: '10:00 - 11:30 AM',courseCode: 'A134',  coursedescription: 'nothing at present'},
  { id: 3, name: 'Science', instructor: 'Dr. Smith', duration: '3',startDate: '2025-01-01' ,time: '10:00  - 11:30 AM',courseCode: 'A134',  coursedescription: 'nothing at present'},
]
 
export const StudentContext = createContext(null);

const StudentContextProvider = (props) => {
  const [students, setStudents] = useState(students_data);
  const [attendanceRecords, setAttendanceRecords] = useState([]);
    const [assignments, setAssignments] = useState([]);
  const [courses, setCourses] = useState(course_data);
  const [selectedCourse, setSelectedCourse] = useState(null);
   const [marksData, setMarksData] = useState(marks_data);

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
  
  const handleMarksEdit = (index) => {
    setFormData(marksData[index]);
    setEditIndex(index);
  };

  const handleMarksDelete = (index) => {
    setMarksData(marksData.filter((_, i) => i !== index));
  };
  
  const contextData = { students_data,students, attendanceRecords, setStudents,handleAttendanceSubmit, courses, handleAddOrUpdate, handleDelete, handleEdit, handleAssign, handleUnassign,assignments, selectedCourse, setSelectedCourse,marksData, setMarksData, handleMarksEdit, handleMarksDelete };
  return (
    <StudentContext.Provider value={contextData}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
