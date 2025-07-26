import { useState } from "react";
import "./AddStudentForm.css";

const AddStudentForm = ({ onAdd, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    className: "",
    dob: "",
    phone: "",
    email: "",
    address: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      ...formData,
      id: Date.now(),
    };

    onAdd(newStudent);
    setFormData({
      name: "",
      rollNumber: "",
      className: "",
      dob: "",
      phone: "",
      email: "",
      address: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-student-form">
      <h2>Add New Student</h2>

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
        type="date"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
       
      />
      <textarea
        name="address"
        value={formData.address}
        onChange={handleChange}
        placeholder="Address"
       
      />

      <div className="Addform-container">
        <button  className="Addform add">
          Add
        </button>
        <button className="Addform cancel"
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddStudentForm;
