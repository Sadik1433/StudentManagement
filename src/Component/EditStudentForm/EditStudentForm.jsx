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
    <div className='edit-student-page'>    
    <form onSubmit={handleSubmit} className="edit-student-form ">
      <h2 className='edit-student-heading'>Edit Student Profile</h2>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Full Name"
        required
      />
      <input
        name="rollNumber"
        value={formData.rollNumber}
        onChange={handleChange}
        placeholder="Roll Number"
        required
      />
      <input
        name="className"
        value={formData.className}
        onChange={handleChange}
        placeholder="Class Name"
      />
      <input
        name="dob"
        value={formData.dob}
        onChange={handleChange}
        type="date"/>
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone" />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"/>
      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"/>
      <div className="edit-btn-container">
        <button className="">
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>   
    </form>
    </div>
  );
};

export default EditStudentForm;
