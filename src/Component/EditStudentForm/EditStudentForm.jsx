import React, { useState, useEffect } from 'react';
import './EditStudentForm.css'; 

const EditStudentForm = ({ student, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ ...student });

  useEffect(() => {
    setFormData({ ...student });
  }, [student]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="edit-student-form ">
      <h2 className='edit-student-heading'>Edit Student Profile</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        className="block w-full p-2 border mb-2"
        required
      />
      <input
        name="rollNumber"
        value={formData.rollNumber}
        onChange={handleChange}
        placeholder="Roll Number"
        className="block w-full p-2 border mb-2"
        required
      />
      <input
        name="className"
        value={formData.className}
        onChange={handleChange}
        placeholder="Class Name"
        className="block w-full p-2 border mb-2"
      />
      <input
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        type="date"
        className="block w-full p-2 border mb-2"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
        className="block w-full p-2 border mb-2"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="block w-full p-2 border mb-2"
      />
      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
        className="block w-full p-2 border mb-2"
      />
      <div className="flex gap-2">
        <button className="bg-green-600 text-white px-4 py-2 rounded">
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditStudentForm;
