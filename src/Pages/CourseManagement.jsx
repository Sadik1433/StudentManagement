import { useContext, useState } from "react";
import './CssFile/CourseManagement.css'
import CourseForm from '../Component/CourseForm/CourseForm.jsx';
import CourseList from '../Component/CourseList/CourseList.jsx';
// import ClassAssignmentForm from '../Component/ClassAssignmentForm/ClassAssignmentForm.jsx';
// import ClassAssignmentList from '../Component/ClassAssignmentList/ClassAssignmentList.jsx';
import { StudentContext } from "../Context/StudentContext.jsx";

const CourseManagement = () => {
 const {courses, handleAddOrUpdate, handleDelete,handleEdit, selectedCourse, setSelectedCourse} = useContext(StudentContext);


  // const handleEdit = (course) => {
  //   setSelectedCourse(course);
  // };

  //   const handleDelete = (id) => {
  //   setCourses((prev) => prev.filter((course) => course.id !== id));
  //   setAssignments((prev) => prev.filter((a) => parseInt(a.courseId) !== id));
  //   if (selectedCourse?.id === id) {
  //     setSelectedCourse(null);
  //   }
  // };
  
  // const handleAssign = (assign) => {
  //   setAssignments((prev) => [...prev, assign]);
  // };

  // const handleUnassign = (index) => {
  //   setAssignments((prev) => prev.filter((_, i) => i !== index));
  // };

  return (
    <div className="course-management-page">
      <h1 className="course-head">Class & Course Management</h1>
    <div className="course-management-container">

      <CourseForm
        onSubmit={handleAddOrUpdate}
        selectedCourse={selectedCourse}
        clearSelection={() => setSelectedCourse(null)}
      />

      <CourseList
        courses={courses}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

    </div>
      {/* <ClassAssignmentForm courses={courses} onAssign={handleAssign} />

      <ClassAssignmentList
        assignments={assignments}
        courses={courses}
        onDelete={handleUnassign}
      /> */}
    </div>
  );
};

export default CourseManagement;
