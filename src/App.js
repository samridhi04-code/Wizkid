// import logo from './logo.svg';
// import './App.css';
import { Carousel } from "./websiteComponents/heroSection/heroSectionOne/Carousel";
import { Navigation } from "./websiteComponents/navigationbar/Navigation";
import { Coursesmain } from "./websiteComponents/courses/coursesMainPage/Coursesmain";
// import { About } from "./websiteComponents/heroSection/aboutUs/About";
import {StudentProfile} from "./websiteComponents/studentProfile/StudentProfile"
// import { Coursesmain } from "./websiteComponents/heroSection/courses/coursesMainPage/Coursesmain";
import { AfterLogin } from "./websiteComponents/afterLoginPage/AfterLogin";
import { MainPage } from "./websiteComponents/afterLoginForm/MainPage";
import {DoctorCourse} from "./websiteComponents/doctorCourse/DoctorCourse";
import { Login } from "./websiteComponents/login/Login";
import { QuizOne } from "./websiteComponents/quiz/quiz1/QuizOne";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { StrictMode } from "react";

function App() {
  return (
    <>
      <Navigation />
      {/* <StudentProfile/> */}
      {/* <Carousel /> */}
      <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Carousel />} />
        <Route exact path="/Login" element={<Login/>} />
          <Route exact path="/course" element={<Coursesmain />} />
          <Route exact path="/after" element={<MainPage />} />
          <Route exact path="/pricing" element={<DoctorCourse />} />
          <Route exact path="/quiz1" element={<QuizOne/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
