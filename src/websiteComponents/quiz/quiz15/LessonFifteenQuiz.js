import React from "react";
import { Page1 } from "../quiz15/Page1";
import { Page2 } from "../quiz15/Page2";
import { TypeFormQuiz15 } from "../quiz15/TypeFormQuiz15";

const submit = (data) => {
  return console.log(data);
};

export const LessonFifteenQuiz = () => {
  return (
    <>
      <div className="app" id="quizFifteenPage">
        {/* <img src={AstroNaut} width="200px" height="200px"/> */}
        {/* <h1 className="fw-bold mt-5" style={{color:'magenta '}}>Life of a doctor </h1> */}
        {/* <h2 className="mt-3" style={{color:'#824de5 '}}>Please help us know you you better before we take you to your course</h2> */}
        <TypeFormQuiz15 onSubmit={submit}>
          <Page1 />
          <Page2 />
        </TypeFormQuiz15>
      </div>
    </>
  );
};
