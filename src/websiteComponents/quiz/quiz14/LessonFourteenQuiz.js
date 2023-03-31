import React from "react";
import { Page1 } from "../quiz14/Page1";
import { Page2 } from "../quiz14/Page2";
import { Page3 } from "../quiz14/Page3";
import { Page4 } from "../quiz14/Page4";
import { TypeFormQuiz14 } from "../quiz14/TypeFormQuiz14";

const submit = (data) => {
  return console.log(data);
};

export const LessonFourteenQuiz = () => {
  return (
    <>
      <div className="app" id="quizFourteenPage">
        {/* <img src={AstroNaut} width="200px" height="200px"/> */}
        {/* <h1 className="fw-bold mt-5" style={{color:'magenta '}}>Life of a doctor </h1> */}
        {/* <h2 className="mt-3" style={{color:'#824de5 '}}>Please help us know you you better before we take you to your course</h2> */}
        <TypeFormQuiz14 onSubmit={submit}>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
        </TypeFormQuiz14>
      </div>
    </>
  );
};
