import React from "react";
import { Page1 } from "../quiz7/Page1";
import { Page2 } from "../quiz7/Page2";
import { Page3 } from "../quiz7/Page3";
import { TypeFormQuiz7 } from "../quiz7/TypeFormQuiz7";

const submit = (data) => {
  return console.log(data);
};

export const LessonSevenQuiz = () => {
  return (
    <>
      <div className="app" id="quizSevenPage">
        {/* <img src={AstroNaut} width="200px" height="200px"/> */}
        {/* <h1 className="fw-bold mt-5" style={{color:'magenta '}}>Life of a doctor </h1> */}
        {/* <h2 className="mt-3" style={{color:'#824de5 '}}>Please help us know you you better before we take you to your course</h2> */}
        <TypeFormQuiz7 onSubmit={submit}>
          <Page1 />
          <Page2 />
          <Page3 />
        </TypeFormQuiz7>
      </div>
    </>
  );
};
