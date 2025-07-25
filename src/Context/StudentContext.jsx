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

export const StudentContext = createContext(null);

const StudentContextProvider = (props) => {
  const [students, setStudents] = useState(students_data);
  const [attendanceRecords, setAttendanceRecords] = useState([]);

    const handleAttendanceSubmit = (record) => {
    setAttendanceRecords((prev) => [...prev, record]);
  };
  
  const contextData = { students, attendanceRecords, setStudents,handleAttendanceSubmit };
  return (
    <StudentContext.Provider value={contextData}>
      {props.children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
