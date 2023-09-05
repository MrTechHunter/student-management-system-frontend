import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
