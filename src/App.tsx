import React from "react";
import { Route, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import AddStudentImage from "./images/add-student-img.jpg";

function App() {
  return (
    <>
      <div>
        <h1 className="text-right bg-wine text-[#ffffff] text-2xl text-red-400 px-6 py-5 font-bold">
          سامانه مدیریت دانشجویان
        </h1>

        <div className="flex justify-center gap-x-3 w-full bg-black p-2"></div>

        <div className="flex justify-end gap-x-3 w-full">
          <div className="bg-[#f0f0f0] w-[400px] justify-center"></div>
          <div className="bg-[#f0f0f0] w-[400px] justify-center"></div>
          <div className="bg-[#f0f0f0] w-[400px] justify-center"></div>
        </div>

        <Routes>
          {/* <Route path="/" element={<StudentsList />} /> */}
          {/* <Route path="/students" element={<StudentsList />} /> */}
          <Route path="/add" element={<AddStudent />} />
          {/* <Route path="/students/:id" element={<Student />} /> */}
        </Routes>
      </div>
      <div className="flex justify-center gap-x-3 w-full bg-black p-2"></div>
      <div className="text-center mt-2 font-semibold">ⓒ 2022 Mahdi Hamldar</div>
    </>
  );
}

export default App;
