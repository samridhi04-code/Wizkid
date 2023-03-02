import React from "react";
import Course1 from "../heroSection/heroSectionOne/Image/course7.png";
import Course2 from "../heroSection/heroSectionOne/Image/course5.png";
import Video from "../heroSection/heroSectionOne/Image/video.gif";
import Quiz from "../heroSection/heroSectionOne/Image/quiz.gif";
import Clock from "../heroSection/heroSectionOne/Image/alarm-clock.gif";
import Bg from "../heroSection/heroSectionOne/Image/bg.gif";
import "../doctorCourse/DoctorCourse.css";
import { QuizDoc } from "../doctorCourse/quiz/QuizDoc";
import {Footer} from '../footer/Footer';

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

        <div className="d-flex justify-content-around m-5">
          <div className="text-center bg-light facts h-50">
            <img
              className="facts mt-3"
              src={Video}
              height="150px"
              width="230px"
            />
            <hr className="text-dark" />
            <div className="m-3 text-dark fw-bold">15 videos</div>
          </div>
          <div className="text-center bg-light facts h-50">
            <img
              className="facts mt-3"
              src={Quiz}
              height="150px"
              width="200px"
            />
            <hr className="text-dark" />
            <div className="m-3 text-dark fw-bold">
              15 questions and activities
            </div>
          </div>
          <div className="text-center bg-light facts">
            <img className="mt-3" src={Clock} height="150px" width="200px" />
            <hr className="text-dark" />
            <div className="m-3 text-dark fw-bold">
              {" "}
              Estimated time : 10 hours
            </div>
          </div>
        </div>

        <div>
          <div className="m-5 text-center helloText">
            <span>Course Content</span>
          </div>
          <div className="d-flex justify-content-between m-5">
            <div class="card lesson h-50 py-5">
              {/* <img src={Course2} class="card-img-top" alt="..."/> */}
              <iframe
                className="p-3"
                width="100%"
                height="50%"
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

            <div class="card lesson h-50">
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
                {/* <div className="d-flex justify-content-between m-4">
                  <a href="#" class="btn btn-primary rounded-pill w-50 me-4">
                    Quiz
                  </a>
                  <a href="#" class="btn btn-primary rounded-pill w-50">
                    Activity
                  </a>
                </div> */}
              </div>
            </div>

            <div class="card lesson">
              <img src={Course2} class="card-img-top" alt="..." />
              <div class="card-body text-dark">
                <h5 class="card-title fw-bold">Lesson-2</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                {/* <div className="d-flex justify-content-between m-4">
                  <a href="#" class="btn btn-primary rounded-pill w-50 me-4">
                    Quiz
                  </a>
                  <a href="#" class="btn btn-primary rounded-pill w-50">
                    Activity
                  </a>
                </div> */}
              </div>
            </div>

            {/* <div class="card lesson">
              <img src={Course2} class="card-img-top" alt="..." />
              <div class="card-body text-dark">
                <h5 class="card-title fw-bold">Lesson-3</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                
              </div>
            </div> */}
          </div>
        </div>

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
          <QuizDoc />
          <Footer/>
        </div>
      </div>
    </>
  );
};
