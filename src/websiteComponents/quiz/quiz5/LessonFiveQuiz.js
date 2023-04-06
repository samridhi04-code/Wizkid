import React from "react";
import { Page1 } from "../quiz5/Page1";
import { Page2 } from "../quiz5/Page2";
import { Page3 } from "../quiz5/Page3";
import { Page4 } from "../quiz5/Page4";
import { Page5 } from "../quiz5/Page5";
import { Page6 } from "../quiz5/Page6";
import { Page7 } from "../quiz5/Page7";
import { TypeFormQuiz5 } from "../quiz5/TypeFormQuiz5";

const submit = (data) => {
  return console.log(data);
};

export const LessonFiveQuiz = () => {
  return (
    <>
      <div className="app" id="quizFivePage">
        {/* <img src={AstroNaut} width="200px" height="200px"/> */}
        {/* <h1 className="fw-bold mt-5" style={{color:'magenta '}}>Life of a doctor </h1> */}
        {/* <h2 className="mt-3" style={{color:'#824de5 '}}>Please help us know you you better before we take you to your course</h2> */}
        <TypeFormQuiz5 onSubmit={submit}>
          {/* <Page1 /> */}
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />
        </TypeFormQuiz5>
      </div>
    </>
  );
};
