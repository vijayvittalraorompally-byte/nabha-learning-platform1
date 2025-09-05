import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentHome from "./pages/StudentHome";

function App() {
  return (
    <Router>
      <div className="p-4">
        <h1 className="text-xl font-bold text-blue-700">Nabha Learning Platform</h1>
        <nav className="my-2">
          <Link className="mr-4 text-blue-500" to="/teacher">Teacher</Link>
          <Link className="text-green-500" to="/student">Student</Link>
        </nav>
        <Routes>
          <Route path="/teacher" element={<TeacherDashboard />} />
          <Route path="/student" element={<StudentHome />} />
          <Route path="/" element={<p>Welcome! Choose Teacher or Student.</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
