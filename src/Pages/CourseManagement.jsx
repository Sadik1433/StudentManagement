import { useState } from "react";
import CourseList from "../CourseList/CourseList";
import CourseForm from "../CourseForm/CourseForm";
import ClassAssignmentForm from "../ClassAssignmentForm/ClassAssignmentForm";
import ClassAssignmentList from "../ClassAssignmentList/ClassAssignmentList";


const CourseManagement = () => {
  const [courses, setCourses] = useState([
    { id: 1, name: 'Mathematics', instructor: 'Dr. Smith', duration: '3 months' },
  ]);

  const [assignments, setAssignments] = useState([]);

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

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-2xl font-bold text-center mb-6">Class & Course Management</h1>

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

      <ClassAssignmentForm courses={courses} onAssign={handleAssign} />

      <ClassAssignmentList
        assignments={assignments}
        courses={courses}
        onDelete={handleUnassign}
      />
    </div>
  );
};

export default CourseManagement;
