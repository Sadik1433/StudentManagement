import { useContext, useState } from "react";
import './CssFile/CourseManagement.css'
import CourseForm from '../Component/CourseForm/CourseForm.jsx';
import CourseList from '../Component/CourseList/CourseList.jsx';
import { StudentContext } from "../Context/StudentContext.jsx";

const CourseManagement = () => {
 const {courses, handleAddOrUpdate, handleDelete,handleEdit, selectedCourse, setSelectedCourse} = useContext(StudentContext);
 const [isOpen, setIsOpen] = useState(false);
  const toggleform = () => setIsOpen(!isOpen);

  return (
    <div className="course-management-page">
    <div className="course-topbar">
      <h1 className="course-head">Class & Course Management</h1>
       <button className="form-sidebar-btn" onClick={toggleform}>
          {isOpen ? "close" : "Add"}
        </button>
    </div>
    <div className="course-management-container">
       <div className={`course-form ${isOpen ? "open" : "collapsed"}`}>      
      <CourseForm
        onSubmit={handleAddOrUpdate}
        selectedCourse={selectedCourse}
           toggleform = {toggleform}
        clearSelection={() => setSelectedCourse(null)}
      />

      </div>
      <CourseList
        courses={courses}
        onEdit={handleEdit}
        toggleform = {toggleform}
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
