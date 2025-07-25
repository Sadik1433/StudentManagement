import './CourseList.css';

const CourseList = ({ courses, onEdit, onDelete }) => {
  return (
    <div >
      <h2>Course List</h2>
      <table >
        <thead>
          <tr>
            <th>#</th>
            <th>Course Name</th>
            <th>Instructor</th>
            <th>Duration</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {courses.map((course, index) => (
            <tr key={course.id}>
              <td>{index + 1}</td>
              <td>{course.name}</td>
              <td>{course.instructor}</td>
              <td>{course.duration}</td>
              <td>
                <button
                  onClick={() => onEdit(course)}
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(course.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseList;
