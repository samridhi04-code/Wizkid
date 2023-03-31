import React from "react";
import { Page1 } from "../quiz6/Page1";
import { Page2 } from "../quiz6/Page2";
import { Page3 } from "../quiz6/Page3";
import { Page4 } from "../quiz6/Page4";
import { TypeFormQuiz6 } from "../quiz6/TypeFormQuiz6";

const submit = (data) => {
  return console.log(data);
};

export const LessonSixQuiz = () => {
  return (
    <>
      <div className="app" id="quizSixPage">
        {/* <img src={AstroNaut} width="200px" height="200px"/> */}
        {/* <h1 className="fw-bold mt-5" style={{color:'magenta '}}>Life of a doctor </h1> */}
        {/* <h2 className="mt-3" style={{color:'#824de5 '}}>Please help us know you you better before we take you to your course</h2> */}
        <TypeFormQuiz6 onSubmit={submit}>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
        </TypeFormQuiz6>
      </div>
    </>
  );
};
