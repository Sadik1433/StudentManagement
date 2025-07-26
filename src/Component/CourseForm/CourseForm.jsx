import { useState, useEffect } from 'react';
import './CourseForm.css'; 

const CourseForm = ({ onSubmit, selectedCourse, clearSelection }) => {
  const [formData, setFormData] = useState({
    name: '',
    instructor: '',
    duration: '',
  });

  useEffect(() => {
    if (selectedCourse) {
      setFormData(selectedCourse);
    } else {
      setFormData({ name: '', instructor: '', duration: '' });
    }
  }, [selectedCourse]);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ name: '', instructor: '', duration: '' });
    console.log('Form submitted:', formData);
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <div className='course-form-container'>
    <form onSubmit={handleSubmit} className='course-form'>
      <h3 className='course-form__title'>
        {selectedCourse ? 'Edit Course' : 'Add New Course'}
      </h3>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Course Name"
        required
      />
      <input
        name="instructor"
        value={formData.instructor}
        onChange={handleChange}
        placeholder="Instructor Name"
        required
      />
      <input
        name="duration"
        value={formData.duration}
        onChange={handleChange}
        placeholder="Duration (e.g. 3 months)"
        required
      />
      <div className='selected-btn-container'>
        <button>
          {selectedCourse ? 'Update' : 'Add'}
        </button>
        {selectedCourse && (
          <button
            type="button"
            onClick={clearSelection}
          >
            Cancel
          </button>
        )}
      </div>
    </form>
        </div>

  );
};

export default CourseForm;
