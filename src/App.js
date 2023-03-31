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
import { LessonOneQuiz } from "./websiteComponents/quiz/quiz1/LessonOneQuiz";
import { LessonTwoQuiz } from "./websiteComponents/quiz/quiz2/LessonTwoQuiz";
import { LessonThreeQuiz } from "./websiteComponents/quiz/quiz3/LessonThreeQuiz";
import { LessonFourQuiz } from "./websiteComponents/quiz/quiz4/LessonFourQuiz";
import { LessonFiveQuiz } from "./websiteComponents/quiz/quiz5/LessonFiveQuiz";
import { LessonSixQuiz } from "./websiteComponents/quiz/quiz6/LessonSixQuiz";
import { LessonSevenQuiz } from "./websiteComponents/quiz/quiz7/LessonSevenQuiz";
import { LessonEightQuiz } from "./websiteComponents/quiz/quiz8/LessonEightQuiz";
import { LessonNineQuiz } from "./websiteComponents/quiz/quiz9/LessonNineQuiz";
import { LessonTenQuiz } from "./websiteComponents/quiz/quiz10/LessonTenQuiz";
import { LessonElevenQuiz } from "./websiteComponents/quiz/quiz11/LessonElevenQuiz";
import { LessonTwelveQuiz } from "./websiteComponents/quiz/quiz12/LessonTwelveQuiz";
import { LessonThirteenQuiz } from "./websiteComponents/quiz/quiz13/LessonThirteenQuiz";
import { LessonFourteenQuiz } from "./websiteComponents/quiz/quiz14/LessonFourteenQuiz";
import { LessonFifteenQuiz } from "./websiteComponents/quiz/quiz15/LessonFifteenQuiz";
import { DoctorInfopage } from "./websiteComponents/coursePageBeforePayment/doctorCourseInfo/DoctorInfopage";
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
          <Route exact path="/quiz1" element={<LessonOneQuiz/>} />
          <Route exact path="/quiz2" element={<LessonTwoQuiz/>} />
          <Route exact path="/quiz3" element={<LessonThreeQuiz/>} />
          <Route exact path="/quiz4" element={<LessonFourQuiz/>} />
          <Route exact path="/quiz5" element={<LessonFiveQuiz/>} />
          <Route exact path="/quiz6" element={<LessonSixQuiz/>} />
          <Route exact path="/quiz7" element={<LessonSevenQuiz/>} />
          <Route exact path="/quiz8" element={<LessonEightQuiz/>} />
          <Route exact path="/quiz9" element={<LessonNineQuiz/>} />1
          <Route exact path="/quiz10" element={<LessonTenQuiz/>} />
          <Route exact path="/quiz11" element={<LessonElevenQuiz/>} />
          <Route exact path="/quiz12" element={<LessonTwelveQuiz/>} />
          <Route exact path="/quiz13" element={<LessonThirteenQuiz/>} />
          <Route exact path="/quiz14" element={<LessonFourteenQuiz/>} />
          <Route exact path="/quiz15" element={<LessonFifteenQuiz/>} />
          <Route exact path="/doc" element={<DoctorInfopage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
