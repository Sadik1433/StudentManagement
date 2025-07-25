import { useState } from 'react';
import './ClassAssignmentForm.css';

const ClassAssignmentForm = ({ courses, onAssign }) => {
  const [assignment, setAssignment] = useState({
    className: '',
    courseId: '',
  });

  const handleChange = (e) => {
    setAssignment({ ...assignment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!assignment.className || !assignment.courseId) return;
    onAssign(assignment);
    setAssignment({ className: '', courseId: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Assign Course to Class</h3>
      <input
        name="className"
        value={assignment.className}
        onChange={handleChange}
        placeholder="Class Name (e.g., Class 10-A)"
        required
      />
      <select
        name="courseId"
        value={assignment.courseId}
        onChange={handleChange}
        required
      >
        <option value="">-- Select Course --</option>
        {courses.map((course) => (
          <option key={course.id} value={course.id}>
            {course.name}
          </option>
        ))}
      </select>
      <button>
        Assign
      </button>
    </form>
  );
};

export default ClassAssignmentForm;
