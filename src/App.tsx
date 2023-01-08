import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import StudentList from "./components/StudentList";

function App() {
  return (
    <>
      <div>
        <h1 className="text-right bg-wine text-[#ffffff] text-2xl text-red-400 px-6 py-5 font-bold">
          سامانه مدیریت دانشجویان
        </h1>

        <div className="flex justify-center gap-x-3 w-full bg-black p-2"></div>

        <div className="flex">
          <div>
            <Link
              to="/add"
              className="bg-[#f0f0f0] w-[400px] justify-center p-5"
            >
              افزودن دانشجو
            </Link>
          </div>
          <div>
            <Link to="/" className="bg-[#f0f0f0] w-[400px] justify-center p-5">
              لیست دانشجویان
            </Link>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<StudentList />} />
          {/* <Route path="/students" element={<StudentsList />} /> */}
          <Route path="/add" element={<AddStudent />} />
          {/* <Route path="/students/:id" element={<Student />} /> */}
        </Routes>
      </div>
      <div className="flex justify-center gap-x-3 w-full bg-black p-2"></div>
      <div className="text-center mt-2 font-semibold">ⓒ 202 Mahdi Hamldar</div>
    </>
  );
}

export default App;
