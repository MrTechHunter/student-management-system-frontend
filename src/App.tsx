import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
      }}
    >
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
