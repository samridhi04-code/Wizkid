import React from "react";
import "../afterLoginForm/FormStyle.css";
import { TypeForm } from "../afterLoginForm/TypeForm";
import { Form } from "../afterLoginForm/Form";
import { Form2 } from "../afterLoginForm/Form2";
import { Form3 } from "../afterLoginForm/Form3";
import { Form4 } from "../afterLoginForm/Form4";
import { Form5 } from "../afterLoginForm/Form5";
import AstroNaut from '../heroSection/heroSectionOne/Image/astronaut.png';

const submit = (data) => {
  return console.log(data);
};

export const MainPage = () => {
  return (
    <>
      <div className="app">
        {/* <img src={AstroNaut} width="200px" height="200px"/> */}
        <h1 className="fw-bold mt-5" style={{color:'yellow '}}>Welcome to Wizkid </h1>
        <h2 className="mt-3" style={{color:'#824de5 '}}>Please help us know you you better before we take you to your course</h2>
        <TypeForm onSubmit={submit}>
          <Form />
          <Form2 />
          <Form3 />
          <Form4 />
          <Form5 />
        </TypeForm>
      </div>
    </>
  );
};
