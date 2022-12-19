import React from "react";
import { Route, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent";

function App() {
  return (
    <div>
      <h1 className="text-3xl text-red-400 px-6 py-5 font-bold underline">
        test
      </h1>

      <Routes>
        {/* <Route path="/" element={<StudentsList />} /> */}
        {/* <Route path="/students" element={<StudentsList />} /> */}
        <Route path="/add" element={<AddStudent />} />
        {/* <Route path="/students/:id" element={<Student />} /> */}
      </Routes>
    </div>
  );
}

export default App;
