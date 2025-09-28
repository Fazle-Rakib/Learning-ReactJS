// ---Props---
import PropTypes from "prop-types";



function Student(props) {
  const { name = "Guest", age = 0, isStudent = false } = props;
  return (
    <div className="student">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Is-Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

// PropTypes do not work
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool,
};

export default Student;
