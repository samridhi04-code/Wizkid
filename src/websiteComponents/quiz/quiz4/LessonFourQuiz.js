import React from "react";
import { Page1 } from "../quiz4/Page1";
import { Page2 } from "../quiz4/Page2";
import { Page3 } from "../quiz4/Page3";
import { Page4 } from "../quiz4/Page4";
import { Page5 } from "../quiz4/Page5";
import { Page6 } from "../quiz4/Page6";
import { TypeFormQuiz4 } from "../quiz4/TypeFormQuiz4";

const submit = (data) => {
  return console.log(data);
};

export const LessonFourQuiz = () => {
  return (
    <>
      <div className="app" id="quizFourPage">
        {/* <img src={AstroNaut} width="200px" height="200px"/> */}
        {/* <h1 className="fw-bold mt-5" style={{color:'magenta '}}>Life of a doctor </h1> */}
        {/* <h2 className="mt-3" style={{color:'#824de5 '}}>Please help us know you you better before we take you to your course</h2> */}
        <TypeFormQuiz4 onSubmit={submit}>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
        </TypeFormQuiz4>
      </div>
    </>
  );
};
