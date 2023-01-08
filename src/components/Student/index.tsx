import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import StudentDataService from "../../services/student.service";

const Student = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const initialStudentState = {
    id: null,
    firstName: "",
    lastName: "",
    phoneNumber: "",
    graduated: false,
  };
  const [currentStudent, setCurrentStudent] = useState(initialStudentState);
  const [message, setMessage] = useState("");

  const getStudent = (id: any) => {
    StudentDataService.get(id)
      .then((response) => {
        setCurrentStudent(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    if (id) getStudent(id);
  }, [id]);

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setCurrentStudent({ ...currentStudent, [name]: value });
  };

  const updateGraduated = (status: any) => {
    var data = {
      id: currentStudent.id,
      firstName: currentStudent.firstName,
      lastname: currentStudent.lastName,
      phoneNumber: currentStudent.phoneNumber,
      graduated: status,
    };

    StudentDataService.update(currentStudent.id, data)
      .then((response) => {
        setCurrentStudent({ ...currentStudent, graduated: status });
        console.log(response.data);
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const updateStudent = () => {
    StudentDataService.update(currentStudent.id, currentStudent)
      .then((response) => {
        console.log(response.data);
        setMessage("The student was updated successfully!");
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  const deleteStudent = () => {
    StudentDataService.delete(currentStudent.id)
      .then((response) => {
        console.log(response.data);
        navigate("/");
      })
      .catch((e: any) => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentStudent ? (
        <div>
          <h4>Student</h4>
          <form>
            <div>
              <label htmlFor="firstName">FirstName</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={currentStudent.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="lastName">LastName</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={currentStudent.lastName}
                onChange={handleInputChange}
              />
            </div>

            <div>
              <label>
                <strong>Status:</strong>
              </label>
              {currentStudent.graduated ? "فارغ التحصیل شده" : "در حال تحصیل"}
            </div>
          </form>

          {currentStudent.graduated ? (
            <button onClick={() => updateGraduated(false)}>UnGraduated</button>
          ) : (
            <button onClick={() => updateGraduated(true)}>Graduated</button>
          )}

          <button onClick={deleteStudent}>Delete</button>

          <button type="submit" onClick={updateStudent}>
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Student...</p>
        </div>
      )}
    </div>
  );
};

export default Student;
