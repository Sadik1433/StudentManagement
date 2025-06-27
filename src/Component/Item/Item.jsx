import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  const { student } = props;
  return (
    <Link to={`/student/${student.id}`}  className="link-tag">
      <div className="item-container">
        <div className="stu-img-container">
          <img src={student.image} alt={student.name} className="stu-img" />
        </div>
        <div className="attend-data-container">
          <h4>Name:-{student.name}</h4>
          <p>Roll No:- {student.rollno}</p>
          <p>Class:- {student.class}</p>
          <p>Section:- {student.section}</p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
