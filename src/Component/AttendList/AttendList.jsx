import "./AttendList.css";

const AttendanceList = ({ records }) => {
  return (
    <div className="attend-lists-container">
      <h2>Attendance Records</h2>
      {records.length === 0 ? (
        <p>No attendance records found.</p>
      ) : (
        records.map((entry, i) => (
          <div key={i} className="attend-list-display">
            <h3 className="attend-list-date">Date: {entry.date}</h3>
            <table className="">
              <thead className="attend-table-head">
                <tr>
                  <th>R.No</th>
                  <th>Student</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {entry.records.map((r, j) => (
                  <tr key={j}>
                    <td>{j+1}</td>
                    <td >{r.studentName}</td>
                    <td >{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
    </div>
  );
};

export default AttendanceList;
