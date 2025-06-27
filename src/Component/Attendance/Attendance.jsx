import "./Attendance.css";

const Attendance = (props) => {
  const { student } = props;
  console.log(student);
  return (
    <div className="attendance-container">
      <h2>Attendance Details</h2>

      <div className="month-attendance">
        <h3>April</h3>
        <p>Total Days: {student.attendance.April.total_days}</p>
        <p>Active Days: {student.attendance.April.active}</p>
        <p>Absent Days: {student.attendance.April.absent}</p>
      </div>

      <div className="month-attendance">
        <h3>May</h3>
        <p>Total Days: {student.attendance.May.total_days}</p>
        <p>Active Days: {student.attendance.May.active}</p>
        <p>Absent Days: {student.attendance.May.absent}</p>
      </div>

      <div className="month-attendance">
        <h3>June</h3>
        <p>Total Days: {student.attendance.June.total_days}</p>
        <p>Active Days: {student.attendance.June.active}</p>
        <p>Absent Days: {student.attendance.June.absent}</p>
      </div>

      <div className="cumulative">
        <h3>Cumulative Summary</h3>
        <p>Total Present: {student.totalPresent}</p>
        <p>Total Absent: {student.totalAbsent}</p>
        <p>
          Cumulative Percentage: {student.attendance.cumulative_percentage}%
        </p>
      </div>
    </div>
  );
};

export default Attendance;
