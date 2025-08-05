import './StudentList.css';

const StudentList = ({ filtered, onView, onEdit, setAddStudent }) => {

  
  return (
    <div className="student-list-container ">
      {filtered.length > 0 ? (
        <div className="student-list">
          {filtered.map((student) => (
            <div key={student.id}  className='student-card'>
            <div className='profile-image-container'>
            <img src={student.imageUrl} alt='profile' className='profile-image' />
            </div>
            <div className='profile-data'>
              <h3>{student.name}</h3>
              <p>Roll No: {student.rollNumber}</p>
              <p>Class: {student.className}</p>
              <div className='profile-btn'>
                <button
                  onClick={() => onView(student)}
                >
                  View
                </button>
                <button
        
                onClick={() => onEdit(student)}
                >
                  Edit
                </button>
            </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

export default StudentList;
