import React from "react";
import "../courseNewDesign/NewDesign.css";
import Star from "../../heroSection/heroSectionOne/Image/star (1).png";
import Stetho from "../../heroSection/heroSectionOne/Image/stethoscope (1).png";
import Vid from "../../heroSection/heroSectionOne/Image/watch-movie (1).png";
import Thumb from "../../heroSection/heroSectionOne/Image/afterloginbg.jpg";

export const NewDesign = (props) => {
  return (
    <>
      <div className="container-fluid">
        {/* <div className="m-5 text-center">
          <span className="text-light fw-bold CourseFirstText">
            Start Learning
          </span>
        </div> */}
        {/* Lessom 1 start  */}

        <div className="d-flex justify-content-between entireLessonBox">
          <div>
            <iframe
              className="mt-5 me-3 lesson1Vid"
              src={props.video}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
          <div className="rightDiv mt-5">
            <div className="gradientBg p-5">
              <div className="fs-2 fw-bold">Lesson {props.number}</div>
              <div className="fs-3">{props.name}</div>
              <div className="fs-5 mt-4">
              {props.description}
              </div>
              <div className="d-flex justify-space-between mt-3">
                <div className="text-center w-25 mx-4 bg-light p-3 smallBox">
                  <span className="fs-4 fw-bold">{props.questions}</span>
                  <img className="ms-2" src={Vid} width="40px" height="40px" />
                  <br />
                  Questions
                </div>
                <div className="text-center w-25 mx-4 bg-light p-3 smallBox">
                  <span className="fs-4 fw-bold">{props.activities}</span>
                  <img
                    className="ms-2"
                    src={Stetho}
                    width="40px"
                    height="40px"
                  />
                  <br /> Activity
                </div>
                <div className="text-center w-25 mx-4 bg-light p-3 smallBox">
                  <span className="fs-4 fw-bold">{props.rewards} </span>
                  <img className="ms-2" src={Star} width="30px" height="30px" />
                  <br /> Reward Points
                </div>
              </div>

              <div className="text-center p-5 bg-light mt-4 twoBoxes">
                <div className="fs-1">Take the Quiz </div>
                <div className="">
                  This quiz consists of 5 multiple-choice questins based on this
                  lesson. Answer carefully each of them to earn maximum reward
                  points
                </div>
                <button className="w-25 btn rounded-pill mt-2 quizNdact">
                  Start
                </button>
              </div>

              <div className="text-center p-5 mt-3 bg-light twoBoxes">
                <div className="fs-1">Perform the Activity </div>
                <div className="">
                  This activity is to test your ability in practicals. You will
                  have to peroform the activity and will have to upload a video
                  of it.
                </div>
                <button className="w-25 btn rounded-pill mt-2 quizNdact">
                  Start
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Lesson 1 end  */}
        {/* LEsson 2 start  */}
        {/* <div className='d-flex justify-content-between mt-5'>
<div>
<iframe
                className="mt-5 me-3 lesson1Vid"
                src="https://www.youtube.com/embed/H97A3kaSLhQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>

</div>
<div className='rightDiv mt-5'>
   <div className='gradientBg p-5'> 
    <div className='fs-2 fw-bold'>Lesson 1</div>
    <div className='fs-3'>How to take pulse ?</div>
    <div className='fs-5 mt-4'>This lesson focusses on teaching about pulse measurement and the basics that come with it.
    </div>
    <div className='d-flex justify-space-between mt-3'>
        <div className='text-center w-25 mx-4 bg-light p-3 smallBox'>
        <span className='fs-4 fw-bold'>5 </span>
            <img className='ms-2' src={Vid} width="40px" height="40px"/>
            <br/>Questions 
        </div>
        <div className='text-center w-25 mx-4 bg-light p-3 smallBox'>
        <span className='fs-4 fw-bold'>1 </span>
            <img className='ms-2' src={Stetho} width="40px" height="40px"/>
            <br/> Activity
        </div>
        <div className='text-center w-25 mx-4 bg-light p-3 smallBox'>
            <span className='fs-4 fw-bold'>4 </span>
            <img className='ms-2' src={Star} width="30px" height="30px"/>
            <br/> Reward points
        </div>
    </div>
    
<div className='text-center p-5 bg-light mt-4 twoBoxes'>
    <div className='fs-1'>Take the Quiz </div>
    <div className=''>This quiz consists of 5 multiple-choice questins based on this lesson. Answer carefully each of them to earn maximum reward points</div>
    <button className='w-25 btn rounded-pill mt-2 quizNdact'>Start</button>
</div>

<div className='text-center p-5 mt-3 bg-light twoBoxes'>
<div className='fs-1'>Perform the Activity </div>
<div className=''>This activity is to test your ability in practicals. You will have to peroform the activity and will have to upload a video of it.</div>
    <button className='w-25 btn rounded-pill mt-2 quizNdact'>Start</button>
</div>
</div>
</div>
</div> */}

        {/* Lesson 2 end  */}
      </div>
    </>
  );
};
