import React, { useState } from "react";
function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setEmploymentStatus] = useState(false);

  const updateName = () => {
    setName("Rakib");
  };

  const updateAge = () => {
    setAge(age + 1);
  };

  const updateEmploymentStatus = () => {
    setEmploymentStatus(!isEmployed);
  };

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
      </div>
      <div>
        <p>Age: {age}</p>
        <button onClick={updateAge}>Increment Age</button>
      </div>
      <div>
        <p>Is-Employed: {isEmployed ? "True" : "False"}</p>
        <button onClick={updateEmploymentStatus}>
          Change Employment Status
        </button>
      </div>
    </>
  );
}

export default MyComponent;
