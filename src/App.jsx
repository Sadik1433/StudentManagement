import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header/Header";
import LandingPage from './Component/LandingPage/LandingPage.jsx'
import Home from './Component/Home/Home.jsx'
import Login from './Pages/Login.jsx';
import SignUp from './Pages/SignUp.jsx'
import Attendance from './Pages/Attendance.jsx'
import AddStudent from './Pages/AddStudent.jsx';
import Profile from './Pages/Profile.jsx'
import ProfileDetails from './Component/ProfileDetails/ProfileDetails.jsx'
import About from './Pages/About.jsx'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/attend" element={<Attendance />} />
        <Route path="/student" element={<Profile />} />
        <Route path="/profile" element={<ProfileDetails />}>
          <Route path="/profile/:dataId" element={<ProfileDetails />} />
        </Route>
        <Route path="/add-student" element={<AddStudent />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/at" element={<Atend />} /> */}
      </Routes>
    </>
  );
};

export default App;
