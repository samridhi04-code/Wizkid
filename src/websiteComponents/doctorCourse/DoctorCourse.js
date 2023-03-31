import React from "react";
import Course1 from "../heroSection/heroSectionOne/Image/course7.png";
import Course2 from "../heroSection/heroSectionOne/Image/course5.png";
import Video from "../heroSection/heroSectionOne/Image/video1.gif";
import Quiz from "../heroSection/heroSectionOne/Image/prize.gif";
import Clock from "../heroSection/heroSectionOne/Image/alarm-clock.gif";
import Watchvid from "../heroSection/heroSectionOne/Image/watching.png";
import Attemptquiz from "../heroSection/heroSectionOne/Image/studying.png";
import Doactivity from "../heroSection/heroSectionOne/Image/pressure.png";
import Bg from "../heroSection/heroSectionOne/Image/bg.gif";
import "../doctorCourse/DoctorCourse.css";
import { QuizDoc } from "../doctorCourse/quiz/QuizDoc";
import { Footer } from "../footer/Footer";
import { NewDesign } from "../doctorCourse/courseNewDesign/NewDesign";

const lessons = [
  {
    number: "1",
    name: "How to take pulse ?",
    description:
      "This lesson focusses on teaching about pulse measurement and the basics that come with it.",
    questions: "5",
    activities: "1",
    rewards: "4",
    video: "https://www.youtube.com/embed/H97A3kaSLhQ",
  },
  {
    number: "2",
    name: "How to become a doctor ",
    description:
      "This lesson focusses on making students understand the practicality of being a doctor.",
    questions: "2",
    activities: "1",
    rewards: "5",
    video: "https://www.youtube.com/embed/H97A3kaSLhQ",
  },
  {
    number: "3",
    name: " Checking the Pulse   ",
    description:
      "This lesson will teach students about basics of pulse and how to measure it.",
    questions: "2",
    activities: "1",
    rewards: "4",
    video: "https://www.youtube.com/embed/H97A3kaSLhQ",
  },
  {
    number: "4",
    name: "Heart",
    description: "This lesson is focussed on heart.",
    questions: "2",
    activities: "1",
    rewards: "4",
    video: "https://www.youtube.com/embed/H97A3kaSLhQ",
  },
  {
    number: "5",
    name: "Heart attack ",
    description: "This lesson is focussed on heart.",
    questions: "3",
    activities: "1",
    rewards: "3",
    video: "https://www.youtube.com/embed/H97A3kaSLhQ",
  },
  {
    number: "6",
    name: "Calling 911",
    description: "The aim of this lesson is to tech about the emergency numbers to reach out in case of a medical emergency",
    questions: "3",
    activities: "2",
    rewards: "5",
    video: "https://www.youtube.com/embed/H97A3kaSLhQ",
  },
  {
    number: "7",
    name: " Temperature ",
    description: "In this lesson, we will learn about measuring body temperature and some interesting facts related to it",
    questions: "4",
    activities: "1",
    rewards: "5",
    video: "https://www.youtube.com/embed/H97A3kaSLhQ",
  },
  {
    number: "8",
    name: "Thermometer",
    description: "This lesson will tell us about how to use a thermometer",
    questions: "1",
    activities: "1",
    rewards: "3",
    video: "https://www.youtube.com/embed/H97A3kaSLhQ",
  },
  {
    number: "9",
    name: "First Aid",
    description: "At the end of this lesson, we will be having enough knowledge on how to provide first aid treatment to anyone near us",
    questions: "2",
    activities: "1",
    rewards: "4",
    video: "https://www.youtube.com/embed/H97A3kaSLhQ",
  },
  {
    number: "10",
    name: "History Taking",
    description: "This lesson focusses on teaching the art of analysing a patient based on their past conditions and how to start with it",
    questions: "2",
    activities: "1",
    rewards: "4",
    video: "https://www.youtube.com/embed/H97A3kaSLhQ",
  },
  {
    number: "11",
    name: "Fever",
    description: "This lesson is designed to teach us the basic treatments and medications to take and related information in case of fever",
    questions: "2",
    activities: "1",
    rewards: "4",
    video: "https://www.youtube.com/embed/H97A3kaSLhQ",
  },
  {
    number: "12",
    name: "Microbiology",
    description: "This lesson makes us aware about the various pathogens and useful microorganisms and how they affect our body and our overall health",
    questions: "6",
    activities: "2",
    rewards: "4",
    video: "https://www.youtube.com/embed/H97A3kaSLhQ",
  },
  {
    number: "13",
    name: " Lab results - Blood tests ",
    description: "This lesson is going to teach us about how to read blood reports and how to analyze the patient based on that",
    questions: "2",
    activities: "1",
    rewards: "5",
    video: "https://www.youtube.com/embed/H97A3kaSLhQ",
  },
  {
    number: "14",
    name: "Medications- paracetamol ",
    description: "This lesson will tell us about the different medications to be taken for different diseases, their dosage and their side-effects if any",
    questions: "3",
    activities: "1",
    rewards: "5",
    video: "https://www.youtube.com/embed/H97A3kaSLhQ",
  },
  {
    number: "15",
    name: "Nutrition",
    description: "At the end of this lesson, we will be fully furnished with the knowledge about different nutritional foods, their importance and their necessity",
    questions: "3",
    activities: "1",
    rewards: "5",
    video: "https://www.youtube.com/embed/H97A3kaSLhQ",
  },
];

export const DoctorCourse = () => {
  return (
    <>
      <div className="container-fluid doctorcrs">
        <div className="d-flex justify-content-between m-5">
          <div className="p-4 w-50 leftText">
            <div className="helloText">Hello Mark,</div>
            <div className="mt-4 fs-4">
              Glad to have you with us! As you know that we all owe a lot to the
              doctors as they are the one who keep us healthy in this long
              journey of life.
            </div>
            <div className="mt-3 fs-4">
              Hope you get to see yourself become a replica of a doctor by the
              end of this course.
            </div>
          </div>
          <div className="p-4">
            <img src={Course1} height="600px" width="700px" />
          </div>
        </div>

        <div className="d-flex justify-content-around p-3 mb-5 facts">
          <div className="text-center h-50">
            <img className="mt-3" src={Video} height="130px" width="130px" />
            <div className="m-3 pt-3 fw-bold" style={{ color: "white" }}>
              15 videos
            </div>
          </div>
          <div className="text-center h-50">
            <img className="mt-4" src={Quiz} height="130px" width="150px" />
            {/* <hr className="text-light" /> */}
            <div className="m-3 pt-3 fw-bold" style={{ color: "white " }}>
              15 questions and activities
            </div>
          </div>
          <div className="text-center">
            <img className="mt-3" src={Clock} height="170px" width="180px" />
            {/* <hr className="text-light" /> */}
            <div className="m-2 fw-bold" style={{ color: "white " }}>
              Estimated time : 10 hours
            </div>
          </div>
        </div>

        {/* steps to start */}
        <div className="steps px-4 pt-4 pb-2 m-4">
          <div className="fs-1 text-center fw-bold">
            Earn your certificate in these 3 easy steps
          </div>
          <div className="d-flex justify-content-between p-5">
            <div className="text-center">
              <div className="numbering rounded-circle ms-5 mb-5">1</div>
              <img
                className="mt-3"
                src={Watchvid}
                height="160px"
                width="160px"
              />
              <div className="mt-4 fs-3 fw-bold" style={{ color: "#fff" }}>
                Watch the video
              </div>
            </div>
            <div className="text-center">
              <div className="numbering rounded-circle ms-5 mb-5">2</div>
              <img
                className="mt-3"
                src={Attemptquiz}
                height="160px"
                width="160px"
              />
              <div className="mt-4 fs-3 fw-bold" style={{ color: "#fff " }}>
                Attempt the Quiz
              </div>
            </div>
            <div className="text-center">
              {/* <div className="justify-content-center"> */}
              <div className="numbering rounded-circle ms-5 mb-5">3</div>
              <img
                className="mt-3"
                src={Doactivity}
                height="160px"
                width="160px"
              />
              <div className="mt-4 fs-3 fw-bold" style={{ color: "#fff " }}>
                {" "}
                Perform the activities
              </div>
            </div>
          </div>
        </div>

        {/* <NewDesign /> */}
        <div className="m-5 text-center">
          <span className="text-light fw-bold CourseFirstText">
            Start Learning
          </span>
        </div>
        {lessons.length != 0 &&
          lessons.map((item, id) => {
            return (
              <NewDesign
                number={item.number}
                name={item.name}
                description={item.description}
                questions={item.questions}
                activities={item.activities}
                rewards={item.rewards}
                video={item.video}
              />
            );
          })}

        {/* //course content */}
        {/* <div className="m-5 text-center helloText">
            <span>Start Learning</span>
          </div> */}
        {/* <div className="d-flex justify-content-between m-5"> */}
        {/* <div class="card lesson h-50 py-5">
              <iframe
                className="p-3 lesson1Video"
                src="https://www.youtube.com/embed/H97A3kaSLhQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div class="card-body text-dark">
                <h5 class="card-title fw-bold">Introduction</h5>
                <p class="card-text">
                  Let's understand alphabets before making words
                </p>
              </div>
            </div> */}

        {/* Quiz start */}
        {/* <div class="card quizCard h-50 mt-4" >
  <img src="https://tse1.mm.bing.net/th?id=OIP.vt_2zqO4GLIKBsiPxFw-MAHaHa&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Quiz-1</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="/quiz1" class="btn btn-primary rounded-pill">Start quiz</a></div>
  </div>
</div> */}
        {/* Quiz end */}

        {/* Activity start */}

        {/* <div class="card activityCard h-50 mt-4" >
  <img src="https://tse3.mm.bing.net/th?id=OIP.lXIcNFcQ9_-Y4VToGIRywgHaHa&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Activity-1</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="#" class="btn btn-primary rounded-pill">Perform activity</a></div>
  </div>
</div> */}

        {/* Activity end  */}
        {/* </div> */}
        {/* <hr className="horizontalRule"/>     */}
        {/* start of another course section  */}
        {/* <div className="d-flex justify-content-between m-5"> */}
        {/* <div class="card lesson h-50 py-5">
              <iframe
                className="p-3 lesson1Video"
                src="https://www.youtube.com/embed/H97A3kaSLhQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div class="card-body text-dark">
                <h5 class="card-title fw-bold">Introduction</h5>
                <p class="card-text">
                  Let's understand alphabets before making words
                </p>
              </div>
            </div> */}
        {/* Quiz start */}
        {/* <div class="card quizCard h-50 mt-4" >
  <img src="https://tse1.mm.bing.net/th?id=OIP.vt_2zqO4GLIKBsiPxFw-MAHaHa&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Quiz-1</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="/quiz1" class="btn btn-primary rounded-pill">Start quiz</a></div>
  </div>
</div> */}
        {/* Quiz end */}

        {/* Activity start */}

        {/* 
<div class="card activityCard h-50 mt-4" >
  <img src="https://tse3.mm.bing.net/th?id=OIP.lXIcNFcQ9_-Y4VToGIRywgHaHa&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Activity-1</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="#" class="btn btn-primary rounded-pill">Perform activity</a></div>
  </div>
</div> */}

        {/* Activity end  */}

        {/* course div end  */}
        {/* </div> */}
        {/* ----end of main div */}
        {/* <div>
          <QuizDoc /> <Footer/>
        </div> */}
      </div>
    </>
  );
};
