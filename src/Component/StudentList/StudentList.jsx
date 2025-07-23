import { useState } from 'react';
import './StudentList.css';

const StudentList = ({ students, onView, onEdit }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClass, setSelectedClass] = useState('');

  const uniqueClasses = [...new Set(students.map((s) => s.className))];

  const filtered = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesClass = selectedClass
      ? student.className === selectedClass
      : true;

    return matchesSearch && matchesClass;
  });

  return (
    <div className="student-list-container ">
      <div>
        <input
          type="text"
          placeholder="Search by name or roll number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="p-2 border rounded w-full sm:w-1/2"
        />
        <select
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          <option value="">All Classes</option>
          {uniqueClasses.map((cls) => (
            <option key={cls} value={cls}>
              {cls}
            </option>
          ))}
        </select>
      </div>
      {filtered.length > 0 ? (
        <div className="student-list">
          {filtered.map((student) => (
            <div key={student.id}  className='student-card'>
              <h3>{student.name}</h3>
              <p>Roll No: {student.rollNumber}</p>
              <p>Class: {student.className}</p>
              <div >
                <button
                  onClick={() => onView(student)}
                >
                  View
                </button>
                <button
                  className="text-green-600 underline"
                  onClick={() => onEdit(student)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No students found.</p>
      )}
    </div>
  );
};

export default StudentList;
