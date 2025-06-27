import "./StudentBio.css";

const StudentBio = (props) => {
  const { student } = props;
  return (
    <div className="bio-page">
      <div className="student-container">
        <div className="student-details">
          <h1 className="student-container-head">About</h1>
          <img src={student.image} alt={student.name} className="img" />
          <div className="details-container">
            <h5 className="student-name">
              <strong>Name : </strong>
              {student.name}
            </h5>
            <p className="class">
              <strong>Class : </strong>
              {student.class}
            </p>
            <span  className="section">
              <strong>Section : </strong>
              {student.section}
            </span>
            <span  className="section">
              <strong>RollNo : </strong>
              {student.rollno}
            </span>
          </div>
        </div>
      </div>
      <div className="perosnal-details">
      <h1 className="personal-heading">Personal Information</h1>
        <table className="info-table" border='0'>
          <tbody>
            <tr>
              <td>
                <strong>Admission No</strong>
              </td>
              <td>{student.admission_number}</td>
            </tr>
            <tr>
              <td>
                <strong>DOB</strong>
              </td>
              <td>{student.dob}</td>
            </tr>
            <tr>
              <td>
                <strong>Gender</strong>
              </td>
              <td>{student.gender}</td>
            </tr>
            <tr>
              <td>
                <strong>Blood Group</strong>
              </td>
              <td>{student.bloodgroup}</td>
            </tr>
            <tr>
              <td>
                <strong>Nationality</strong>
              </td>
              <td>{student.nationality}</td>
            </tr>

            <tr>
              <td>
                <strong>Caste</strong>
              </td>
              <td>{student.caste}</td>
            </tr>
            <tr>
              <td>
                <strong>Phone</strong>
              </td>
              <td>{student.mobileno}</td>
            </tr>
            <tr>
              <td>
                <strong>Email</strong>
              </td>
              <td>{student.email}</td>
            </tr>
            <tr>
              <td>
                <strong>Guardian Name</strong>
              </td>
              <td>{student.guardianName}</td>
            </tr>

            <tr>
              <td>
                <strong>Year of Admission</strong>
              </td>
              <td>{student.year_of_joining}</td>
            </tr>
            <tr>
              <td>
                <strong>School Name</strong>
              </td>
              <td>{student.schoolname}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  );
};

export default StudentBio;
