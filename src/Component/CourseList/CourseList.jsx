import './CourseList.css';

const CourseList = ({ courses, onEdit, onDelete }) => {

  return (
    <div className='course-list-container'>
      <h2>Course List</h2>
      <table className='course-list' >
        <thead>
          <tr>
            <th>S.No</th>
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
              <td>{course.duration} Months</td>
              <td className='btn-row'>
                <button
                className='courselist-btn edit-btn'
                  onClick={() => onEdit(course)}
                >
                  Edit
                </button>
                <button
                className='courselist-btn  delete-btn'
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
