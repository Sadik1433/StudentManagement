import './ClassAssignmentList.css';

const ClassAssignmentList = ({ assignments, courses, onDelete }) => {
  const getCourseName = (id) => courses.find((c) => c.id === parseInt(id))?.name || 'Unknown';

  return (
    <div className="p-4 bg-white rounded shadow-md mt-6">
      <h3 className="text-lg font-bold mb-3">Class Assignments</h3>
      <ul className="list-disc pl-6 space-y-2">
        {assignments.map((assign, idx) => (
          <li key={idx} className="flex justify-between items-center">
            <span>
              <strong>{assign.className}</strong> → {getCourseName(assign.courseId)}
            </span>
            <button
              onClick={() => onDelete(idx)}
              className="text-red-500 hover:underline"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClassAssignmentList;
