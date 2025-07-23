import './CssFile/StudentProfile.css';


const StudentProfile = ({ student }) => {
  if (!student) return <p>No student selected.</p>;

  return (
    <div className="student-profile">
      <div className="profile-image-container">
        {student.imageUrl ? (
          <img
            src={student.imageUrl}
            alt="Profile"
            className='profile-photo'
          />
        ) : (
          <div className="profile-photo placeholder">
            {student.name.charAt(0)}
          </div>
        )}
        <h2 className='profile-name'>{student.name}</h2>
        <p className='roll-no' >Roll No: {student.rollNumber}</p>
      </div>

      <div className="profile-details">
        <p><strong>Class:</strong> {student.className}</p>
        <p><strong>Date of Birth:</strong> {student.dob}</p>
        <p><strong>Phone:</strong> {student.phone}</p>
        <p><strong>Address:</strong> {student.address}</p>
        <p><strong>Email:</strong> {student.email}</p>
      </div>
    </div>
  );
};

export default StudentProfile;
