import { useState } from "react";
import "./Item.css";

const Item = ({ details }) => {
  const [attendance, setAttendance] = useState(false);
  const { name, Roll } = details;

  const handleToggle = () => {
    setAttendance((prev) => !prev);
    console.log(attendance);
  };

  return (
    <div className="item-container">
      <div className="item-content">
        <span className="roll-no">{Roll}.</span>
        <p className="stu-name">{name}</p>
        <div className="checkbox-container">
          <button
            onClick={handleToggle}
            className={`status ${attendance ? "present" : "absent"}`}
          >
            {attendance ? "Present" : "Absent"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
