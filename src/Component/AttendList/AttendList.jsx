import "./AttendList.css";

const AttendanceList = ({ records }) => {
  
  return (
    <div className="attend-lists-page">
      <h1>Attendance Records</h1>
    <div className="attend-lists-container">
      {records.length === 0 ? (
        <p>No attendance records found.</p>
      ) : (
        records.map((entry, i) => (
          <div key={i} className="attend-list-display">
            <h3 className="attend-list-date">Date: {new Date(entry.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
             year: "numeric"
              })}</h3>
            <table className="present-table-data">
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
                    <td >{j+1}</td>
                    <td >{r.studentName}</td>
                    <td  className={`result ${
                r.status === "Present" ? "stupresent" : "stuabsent"
              }`}>{r.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))
      )}
       </div>
    </div>
  );
};

export default AttendanceList;
