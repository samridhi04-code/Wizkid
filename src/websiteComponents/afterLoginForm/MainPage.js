import React from "react";
import "../afterLoginForm/FormStyle.css";
import { TypeForm } from "../afterLoginForm/TypeForm";
import { Form } from "../afterLoginForm/Form";
import { Form2 } from "../afterLoginForm/Form2";
import { Form3 } from "../afterLoginForm/Form3";

const submit = (data) => {
  return console.log(data);
};

export const MainPage = () => {
  return (
    <>
      <div className="app">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <TypeForm onSubmit={submit}>
          <Form />
          <Form2 />
          <Form3 />
        </TypeForm>
      </div>
    </>
  );
};
