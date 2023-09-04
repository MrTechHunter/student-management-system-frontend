import Container from "@mui/material/Container";
import Login from "./components/Login";

import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#F2F2F2",
        minHeight: "100vh",
      }}
    >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
