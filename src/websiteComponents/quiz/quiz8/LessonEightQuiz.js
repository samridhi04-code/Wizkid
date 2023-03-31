import React from "react";
import { Page1 } from "../quiz8/Page1";
import { Page2 } from "../quiz8/Page2";
import { Page3 } from "../quiz8/Page3";
import { Page4 } from "../quiz8/Page4";
import { Page5 } from "../quiz8/Page5";
import { TypeFormQuiz8 } from "../quiz8/TypeFormQuiz8";

const submit = (data) => {
  return console.log(data);
};

export const LessonEightQuiz = () => {
  return (
    <>
      <div className="app" id="quizEightPage" style={{}}>
        {/* <img src={AstroNaut} width="200px" height="200px"/> */}
        {/* <h1 className="fw-bold mt-5" style={{color:'magenta '}}>Life of a doctor </h1> */}
        {/* <h2 className="mt-3" style={{color:'#824de5 '}}>Please help us know you you better before we take you to your course</h2> */}
        <div className="pb-3" style={{borderRadius:'30px', backgroundColor:'white', maxWidth:'75%',margin:'auto', textAlign:'center', padding:'0px 5px'}}>
        <TypeFormQuiz8 onSubmit={submit}>
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
        </TypeFormQuiz8>
        </div>
      </div>
    </>
  );
};
