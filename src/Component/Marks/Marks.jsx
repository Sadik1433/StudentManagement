import "./Marks.css";

const Marks = (props) => {
  const {student} = props;
  return (
    <div className="marks-container">
      <div className="marks-list">
        <h1 className="marks-list-header">Marks List</h1>
        <table border="2" cellPadding="10" cellSpacing="5">
          <thead>
            <tr>
              <th>S.no</th>
              <th>Subject</th>
              <th>Marks</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(student.marks).map(([subject, score], index) => (
              <tr key={subject}>
                <td>{index + 1}</td>
                <td>{subject}</td>
                <td>{score}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="marks-summary-container">
          <p className="marks-summary">
            <b>Total Marks:</b> {student.total_marks}
          </p>
          <p className="marks-summary">
            <b>Percentage:</b> {student.percentage}%
          </p>
          <p className="marks-summary">
            <b>Grade:</b> {student.grade}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Marks;
