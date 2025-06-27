import "./CssFile/AddStudent.css";
import { useState } from "react";

const AddStudent = () => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    gender: "",
    bloodGroup: "",
    nationality: "",
    religion: "",
    caste: "",
    aadhaar: "",
    phone: "",
    email: "",
    presentAddress: "",
    permanentAddress: "",
    guardianName: "",
    guardianRelationship: "",
    guardianPhone: "",
    rollNo: "",
    admissionNo: "",
    class: "",
    section: "",
    yearOfAdmission: "",
    schoolName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="add-student-container">
      <form onSubmit={handleSubmit} className="form-container">
        <h2 className="form-heading">Student Bio Data Form</h2>
        {[
          ["name", "1. Full Name"],
          ["dob", "2. Date of Birth"],
          ["gender", "3. Gender"],
          ["bloodGroup", "4. Blood Group"],
          ["nationality", "5. Nationality"],
          ["religion", "6. Religion"],
          ["caste", "7. Caste"],
          ["aadhaar", "8. Aadhaar Number"],
          ["phone", "9. Phone Number"],
          ["email", "10. Email Address"],
          ["presentAddress", "11. Present Address"],
          ["permanentAddress", "12. Permanent Address"],
          ["guardianName", "13. Guardian Name"],
          ["guardianRelationship", "14. Guardian Relationship"],
          ["guardianPhone", "15. Guardian Phone"],
          ["rollNo", "16. Roll Number"],
          ["admissionNo", "17. Admission Number"],
          ["class", "18. Class"],
          ["section", "19. Section"],
          ["yearOfAdmission", "20. Year of Admission"],
          ["schoolName", "21. School Name"],
        ].map(([name, label]) => (
          <table border="0">
            <tbody>
              <tr key={name} border="0">
                <td className="label-text" htmlFor={name}>
                  {label} :-
                </td>
                <td>
                  <input
                    type="text"
                    id={name}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    className="input-field"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        ))}
        <div className="btn-container">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStudent;
