import React, { useState } from "react";
import StudentDataService from "../services/student.service";

const AddStudent = () => {
  const initialStudentState = {
    id: null,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    grade: "",
    graduated: false,
  };
  const [student, setStudent] = useState(initialStudentState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  const saveStudent = () => {
    var data = {
      firstName: student.firstName,
      lastName: student.lastName,
      phoneNumber: student.phoneNumber,
      grade: student.grade,
      graduated: student.graduated,
    };

    StudentDataService.create(data)
      .then((response) => {
        setStudent({
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          phoneNumber: response.data.phoneNumber,
          grade: response.data.grade,
          graduated: response.data.graduated,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const newStudent = () => {
    setStudent(initialStudentState);
    setSubmitted(false);
  };

  return (
    <div>
      {submitted ? (
        <div>
          <div>You submitted successfully!</div>
          <button onClick={newStudent}>Add</button>
        </div>
      ) : (
        <div>
          <div>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              value={student.firstName}
              onChange={handleInputChange}
              name="firstName"
              required
            />
          </div>
          <div>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              value={student.lastName}
              onChange={handleInputChange}
              name="lastName"
              required
            />
          </div>
          <button onClick={saveStudent}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default AddStudent;
