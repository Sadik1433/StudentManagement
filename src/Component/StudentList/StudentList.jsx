import { useState } from 'react';
import './StudentList.css';

const StudentList = ({ students, onView, onEdit, setAddStudent }) => {
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
      <div className='studednt-search-container'>
        <input
          type="text"
          placeholder="Search by name or roll number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
            <div className='profile-image'>
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
