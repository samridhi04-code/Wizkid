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
import {Footer} from '../footer/Footer';
import {NewDesign} from '../doctorCourse/courseNewDesign/NewDesign';

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
            {/* <div className="ms-4"><img src={Course2} height="400px" width="400px" className="me-3"/></div> */}
          </div>
          <div className="p-4">
            <img src={Course1} height="600px" width="700px" />
          </div>
        </div>

        <div className="d-flex justify-content-around p-3 mb-5 facts">
          <div className="text-center h-50">
            <img
              className="mt-3"
              src={Video}
              height="130px"
              width="130px"
            />
            {/* <hr className="text-light" /> */}
            <div className="m-3 pt-3 fw-bold">15 videos</div>
          </div>
          <div className="text-center h-50">
            <img
              className="mt-4"
              src={Quiz}
              height="130px"
              width="150px"
            />
            {/* <hr className="text-light" /> */}
            <div className="m-3 pt-3 fw-bold">
              15 questions and activities
            </div>
          </div>
          <div className="text-center">
            <img className="mt-3" src={Clock} height="170px" width="180px" />
            {/* <hr className="text-light" /> */}
            <div className="m-2 fw-bold">
              
              Estimated time : 10 hours
            </div>
          </div>
        </div>

{/* steps to start */}
<div className="steps px-4 pt-4 pb-2">
  <div className="fs-1 text-center fw-bold">Earn your certificate in these 3 easy steps</div>
  <div className="d-flex justify-content-between p-5">
<div className="text-center">
  <div className="numbering rounded-circle ms-5 mb-5">1</div>
<img className="mt-3" src={Watchvid} height="160px" width="160px"/>
  <div className="mt-4 fs-4 fw-bold">Watch the video</div>
</div>
<div className="text-center">
<div className="numbering rounded-circle ms-5 mb-5">2</div>
<img className="mt-3" src={Attemptquiz} height="160px" width="160px"/>
<div className="mt-4 fs-4 fw-bold">Attempt the Quiz</div>
</div>
<div className="text-center">
  {/* <div className="justify-content-center"> */}
<div className="numbering rounded-circle ms-5 mb-5">3</div>
<img className="mt-3" src={Doactivity} height="160px" width="160px"/>
<div className="mt-4 fs-4 fw-bold">  Perform the activities</div>
</div>
  </div>
</div>


<NewDesign/>

{/* //course content */}
        <div>
          <div className="m-5 text-center helloText">
            <span>Start Learning</span>
          </div>
          <div className="d-flex justify-content-between m-5">
            <div class="card lesson h-50 py-5">
              {/* <img src={Course2} class="card-img-top" alt="..."/> */}
              <iframe
                className="p-3 lesson1Video"
                // width="100%"
                // height="50%"
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
                {/* <div className="d-flex justify-content-between m-4">
                  <a href="/quiz1" class="btn btn-primary rounded-pill w-50 me-4">
                    Quiz
                  </a>
                  <a href="#" class="btn btn-primary rounded-pill w-50">
                    Activity
                  </a>
                </div> */}
              </div>
            </div>

            {/* <div class="card lesson h-50">
              <img
                src={Bg}
                class="card-img-top"
                alt="..."
                style={{ borderRadius: "30px" }}
              />
              <div class="card-body text-dark">
                <h5 class="card-title fw-bold">Lesson-1</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-between m-4">
                  <a href="#" class="btn btn-primary rounded-pill w-50 me-4">
                    Quiz
                  </a>
                  <a href="#" class="btn btn-primary rounded-pill w-50">
                    Activity
                  </a>
                </div>
              </div>
            </div> */}

            {/* <div class="card lesson">
              <img src={Course2} class="card-img-top" alt="..." />
              <div class="card-body text-dark">
                <h5 class="card-title fw-bold">Lesson-2</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-flex justify-content-between m-4">
                  <a href="#" class="btn btn-primary rounded-pill w-50 me-4">
                    Quiz
                  </a>
                  <a href="#" class="btn btn-primary rounded-pill w-50">
                    Activity
                  </a>
                </div>
              </div>
            </div> */}

{/* Quiz start */}
<div class="card quizCard h-50 mt-4" >
  <img src="https://tse1.mm.bing.net/th?id=OIP.vt_2zqO4GLIKBsiPxFw-MAHaHa&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Quiz-1</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="/quiz1" class="btn btn-primary rounded-pill">Start quiz</a></div>
  </div>
</div>
{/* Quiz end */}

{/* Activity start */}


<div class="card activityCard h-50 mt-4" >
  <img src="https://tse3.mm.bing.net/th?id=OIP.lXIcNFcQ9_-Y4VToGIRywgHaHa&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Activity-1</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="#" class="btn btn-primary rounded-pill">Perform activity</a></div>
  </div>
</div>


{/* Activity end  */}
          </div>
          <hr className="horizontalRule"/>    
          {/* start of another course section  */}
          <div className="d-flex justify-content-between m-5">
          <div class="card lesson h-50 py-5">
              {/* <img src={Course2} class="card-img-top" alt="..."/> */}
              <iframe
                className="p-3 lesson1Video"
                // width="100%"
                // height="50%"
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
            </div>
            {/* Quiz start */}
<div class="card quizCard h-50 mt-4" >
  <img src="https://tse1.mm.bing.net/th?id=OIP.vt_2zqO4GLIKBsiPxFw-MAHaHa&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Quiz-1</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="/quiz1" class="btn btn-primary rounded-pill">Start quiz</a></div>
  </div>
</div>
{/* Quiz end */}

{/* Activity start */}


<div class="card activityCard h-50 mt-4" >
  <img src="https://tse3.mm.bing.net/th?id=OIP.lXIcNFcQ9_-Y4VToGIRywgHaHa&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Activity-1</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="#" class="btn btn-primary rounded-pill">Perform activity</a></div>
  </div>
</div>


{/* Activity end  */}
</div>
        </div>   {/* ----end of main div */}

        {/* <div className="time px-5 pt-4 radius text-center mb-5 d-flex justify-content-between">
          <div className="mt-4 ms-3 fs-5">This course includes 15 videos. Each video is followed by an assignment or a quiz. Score the maximum points to win exciting rewards.</div>
          <div className="d-flex justify-content-start">
            <img src={Clock} height="100px" width="100px" className="me-3"/>
            <div className="mt-4">10 hours<br/>Estimated</div>
          </div>
        </div> */}
        {/* <div className="text-center video">
          <iframe
                      className="video1 m-5 vid"
                      src="https://www.youtube.com/embed/H97A3kaSLhQ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
          </div>
          <div className="mx-auto w-75">
            <div className="bg1 fs-3 m-2 p-3">Course Content</div>
            <div className="mt-5">
          <div className="bg2 p-3 fs-5 m-3">Intoduction</div>
          <div className="p-3 fs-5 m-3 bg2">Lesson 1</div>
          <div className="">
            <div className="p-3 ms-5 my-3 w-75 bg3">Lesson1 video</div>
            <div className="p-3 ms-5 my-3 w-75 bg3">Quiz-1</div>
          </div>
          <div className="bg2 p-3 fs-5 m-3">Lesson 2</div>
          <div className="bg2 p-3 fs-5 m-3">Lesson 3</div>
          <div className="bg2 p-3 fs-5 m-3">Lesson 4</div>
          <div className="bg2 p-3 fs-5 m-3">Lesson 5</div>
          </div>
          </div> */}
        <div>
          {/* <QuizDoc /> */}
          {/* <Footer/> */}
        </div>
      </div>
    </>
  );
};
