import React from "react";
import { Page1 } from "../quiz2/Page1";
import { Page2 } from "../quiz2/Page2";
import { TypeFormQuiz2 } from "../quiz2/TypeFormQuiz2";

const submit = (data) => {
  return console.log(data);
};

export const LessonTwoQuiz = () => {
  return (
    <>
      <div className="app" id="quizTwoPage">
        {/* <img src={AstroNaut} width="200px" height="200px"/> */}
        {/* <h1 className="fw-bold mt-5" style={{color:'magenta '}}>Life of a doctor </h1> */}
        {/* <h2 className="mt-3" style={{color:'#824de5 '}}>Please help us know you you better before we take you to your course</h2> */}
        <TypeFormQuiz2 onSubmit={submit}>
          <Page1 />
          <Page2 />
        </TypeFormQuiz2>
      </div>
    </>
  );
};
