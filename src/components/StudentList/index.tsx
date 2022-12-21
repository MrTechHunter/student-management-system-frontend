import React, { useState, useEffect, ReactNode } from "react";
import StudentDataService from "../../services/student.service";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [searchPhoneNumber, setSearchPhoneNumber] = useState("");

  useEffect(() => {
    retrieveStudents();
  });

  const onChangeSearchPhoneNumber = (e: any) => {
    const searchPhoneNumber = e.target.value;
    setSearchPhoneNumber(searchPhoneNumber);
  };

  const retrieveStudents = () => {
    StudentDataService.getAll()
      .then((response) => {
        setStudents(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const refreshList = () => {
    retrieveStudents();
    setCurrentStudent(null);
    setCurrentIndex(-1);
  };

  const setActiveStudent = (student: any, index: number) => {
    setCurrentStudent(student);
    setCurrentIndex(index);
  };

  const removeAllStudents = () => {
    StudentDataService.deleteAll()
      .then((response) => {
        console.log(response.data);
        refreshList();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findByPhoneNumber = () => {
    StudentDataService.findByPhoneNumber()
      .then((response) => {
        setStudents(response.data);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <input
            type="text"
            value={searchPhoneNumber}
            onChange={onChangeSearchPhoneNumber}
            className="mr-3"
          />
        </div>
        <div>
          <button
            onClick={findByPhoneNumber}
            className="bg-wine text-[#ffffff] p-[6px] rounded-md"
          >
            جست و جو
          </button>
        </div>
      </div>
      <div>
        {/* <ul>
          {students &&
            students.map((student: any, index: number) => (
              <li
                className={index === currentIndex ? "text-green" : ""}
                onClick={() => setActiveStudent(student, index)}
                key={index}
              >
                {student.firstName}
              </li>
            ))}
        </ul> */}

        {/* Beginning of table section */}
        <div className="py-8 [direction:rtl]">
          <div>
            <h2 className="mr-4 text-2xl font-semibold leading-tight">
              لیست دانشجویان
            </h2>
          </div>
          <div className="mx-8 sm:mx-4 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      نام
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      نام خانوادگی
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      تلفن همراه
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
                      وضعیت تحصیل
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100"></th>
                  </tr>
                </thead>
                <tbody>
                  {students &&
                    students.map((student: any, index: number) => {
                      return (
                        <tr>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="ml-3">{student.firstName}</div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="ml-3">{student.lastName}</div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="ml-3">{student.phoneNumber}</div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                            <div className="ml-3">
                              {student.graduated
                                ? "فارغ التحصیل"
                                : "در حال تحصیل"}
                            </div>
                          </td>
                          <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
                            test
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        {/* End of table section */}

        <button onClick={removeAllStudents}>حذف همه</button>

        <div>
          {currentStudent ? (
            <div>
              <h4>دانشجو</h4>
              <div>
                <label>
                  <strong>نام:</strong>
                </label>
                {currentStudent.firstName}
              </div>
              <div>
                <label>
                  <strong>نام خانوادگی:</strong>
                </label>
                {currentStudent.lastName}
              </div>
              <div>
                <label>
                  <strong>وضعیت فارغ التحصیلی:</strong>
                </label>
                {currentStudent.graduated ? "فارغ التحصیل" : "در حال تحصیل"}
              </div>

              <Link to={"/students/" + currentStudent.id}>ویرایش</Link>
            </div>
          ) : (
            <div>
              <br />
              <p>لطفا بر روی دانشجو موردنظر کلیک کنید</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default StudentList;
