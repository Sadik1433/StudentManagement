import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import LandingPage from "./Component/LandingPage/LandingPage.jsx";
import Home from "./Component/Home/Home.jsx";
import Login from "./Pages/Login.jsx";
import SignUp from "./Pages/SignUp.jsx";
import About from "./Pages/About.jsx";
import StudentManagement from "./Pages/StudentManagement.jsx";
import MonthlyView from "./Component/MonthlyView/MonthlyView.jsx";
import CourseManagement from "./Pages/CourseManagement.jsx";
import Attendance from './Pages/Attendance.jsx'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/attend" element={<Attendance />} />
        <Route path="/students" element={<StudentManagement />} />
        <Route path="/monthlyView" element={<MonthlyView />} />
        <Route path="/course" element={<CourseManagement />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
