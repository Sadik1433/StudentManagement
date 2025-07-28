import { useContext, useState } from "react";
import "./MonthlyView.css";
import { StudentContext } from "../../Context/StudentContext";

const MonthlyView = () => {
  
  const {attendanceRecords, students} = useContext(StudentContext);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const getDaysInMonth = () => {
    if (!month || !year) return 0;
    return new Date(year, month, 0).getDate();
  };

  const filteredRecords = attendanceRecords.filter((r) => {
    const [y, m] = r.date.split("-");
    return m === month && y === year;
  });

  const buildTableData = () => {
    const days = getDaysInMonth();
    const table = students.map((student) => {
      const row = { name: student.name, days: {}, presentCount: 0 };

      for (let i = 1; i <= days; i++) {
        const day = i.toString().padStart(2, "0");
        const dateKey = `${year}-${month}-${day}`;
        const attendance = filteredRecords.find((rec) => rec.date === dateKey);
        const studentRecord = attendance?.records.find(
          (r) => r.studentId === student.id
        );
        const status = studentRecord?.status === "Present" ? "P" : "A";

        if (status === "P") row.presentCount++;
        row.days[day] = attendance ? status : "-";
      }

      return row;
    });

    return table;
  };

  const tableData = buildTableData();
  const daysInMonth = getDaysInMonth();

  return (
    <div className="monthly-attendance-view">
      <h2>Monthly Attendance View</h2>
      <div>
        <select
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          <option value="">Select Month</option>
          {Array.from({ length: 12 }, (_, i) => {
            const m = String(i + 1).padStart(2, "0");
            return (
              <option key={m} value={m}>
                {m}
              </option>
            );
          })}
        </select>

        <select
          className="p-2 border"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="">Select Year</option>
          {["2024", "2025", "2026"].map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>

      {month && year ? (
        <div className="monthly-table">
          <table >
            <thead>
              <tr>
                <th>Student</th>
                {Array.from({ length: daysInMonth }, (_, i) => (
                  <th key={i + 1} className="border p-1">
                    {String(i + 1).padStart(2, "0")}
                  </th>
                ))}
                <th>Present</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, i) => (
                <tr key={i}>
                  <td >{row.name}</td>
                  {Array.from({ length: daysInMonth }, (_, d) => {
                    const dayKey = String(d + 1).padStart(2, "0");
                    return (
                      <td key={d}>
                        {row.days[dayKey] || "-"}
                      </td>
                    );
                  })}
                  <td >{row.presentCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Please select month and year.</p>
      )}
    </div>
  );
};

export default MonthlyView;
