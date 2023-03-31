import React from "react";
import { Page1 } from "../quiz13/Page1";
import { Page2 } from "../quiz13/Page2";
import { Page3 } from "../quiz13/Page3";
import { TypeFormQuiz13 } from "../quiz13/TypeFormQuiz13";

const submit = (data) => {
  return console.log(data);
};

export const LessonThirteenQuiz = () => {
  return (
    <>
      <div className="app" id="quizThirteenPage">
        {/* <img src={AstroNaut} width="200px" height="200px"/> */}
        {/* <h1 className="fw-bold mt-5" style={{color:'magenta '}}>Life of a doctor </h1> */}
        {/* <h2 className="mt-3" style={{color:'#824de5 '}}>Please help us know you you better before we take you to your course</h2> */}
        <TypeFormQuiz13 onSubmit={submit}>
          <Page1 />
          <Page2 />
          <Page3 />
        </TypeFormQuiz13>
      </div>
    </>
  );
};
