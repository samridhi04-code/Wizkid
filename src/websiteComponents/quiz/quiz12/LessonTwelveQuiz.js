import React from "react";
import { Page1 } from "../quiz12/Page1";
import { Page2 } from "../quiz12/Page2";
import { TypeFormQuiz12 } from "../quiz12/TypeFormQuiz12";

const submit = (data) => {
  return console.log(data);
};

export const LessonTwelveQuiz = () => {
  return (
    <>
      <div className="app" id="quizTwelvePage">
        {/* <img src={AstroNaut} width="200px" height="200px"/> */}
        {/* <h1 className="fw-bold mt-5" style={{color:'magenta '}}>Life of a doctor </h1> */}
        {/* <h2 className="mt-3" style={{color:'#824de5 '}}>Please help us know you you better before we take you to your course</h2> */}
        <TypeFormQuiz12 onSubmit={submit}>
          <Page1 />
          <Page2 />
        </TypeFormQuiz12>
      </div>
    </>
  );
};
