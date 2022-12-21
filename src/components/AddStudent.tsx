import React, { useState } from "react";
import StudentDataService from "../services/student.service";
import AddStudentImage from "../images/add-student-img.jpg";

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
    <div className="container [direction:rtl] mx-auto my-12 flex flex-row justify-center bg-gray-100">
      <div className="my-16 pl-3">
        {submitted ? (
          <div>
            <div>دانشجو موردنظر افزوده شد</div>
            <button onClick={newStudent} className="font-medium">
              ثبت دانشجو جدید
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            <div>
              <label htmlFor="firstName" className="text-black">
                نام
              </label>
              <input
                type="text"
                className="border-2 border-wine outline-none rounded mx-2 py-1 px-2 w-[265px] bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                id="firstName"
                value={student.firstName}
                onChange={handleInputChange}
                name="firstName"
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">نام خانوادگی</label>
              <input
                type="text"
                className="border-2 border-wine outline-none rounded mx-2 py-1 px-2 w-[200px] bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                id="lastName"
                value={student.lastName}
                onChange={handleInputChange}
                name="lastName"
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber">تلفن همراه</label>
              <input
                type="text"
                className="border-2 border-wine outline-none rounded mx-2 py-1 px-2 w-[212px] bg-white shadow text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                value={student.phoneNumber}
                onChange={handleInputChange}
                name="phoneNumber"
                required
              />
            </div>
            <button
              className="text-[#ffffff] font-thin bg-wine p-2 rounded-[8px] w-[292px]"
              onClick={saveStudent}
            >
              افزودن دانشجو
            </button>
          </div>
        )}
      </div>
      <div className="h-full border-r-2 border-r-wine pr-5">
        <img src={AddStudentImage} className="w-[500px]" />
      </div>
    </div>
  );
};

export default AddStudent;
