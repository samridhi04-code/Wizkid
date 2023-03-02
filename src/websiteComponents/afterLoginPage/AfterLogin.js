import React from "react";
import "../afterLoginPage/AfterLogin.css";
// import { Widget,PopupButton } from '@typeform/embed-react'
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
// import Astronaut from "../heroSection/heroSectionOne/Image/astronaut.png";
import { registerBlockType } from '@quillforms/blocks';
registerCoreBlocks();

export const AfterLogin = () => {
  return (
    <>
      {/* <div className="container-fluid try mt-5">
        <div className="container p-5">
          <form className="row g-5 formbg mt-4 p-5">
            <div className="text-center">
              <h1 className="fw-bold welcome"></h1>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <label class="form-check" for="">
                Are you a ?
              </label>
              <div class="form-check">
                <input
                  class="form-check-input me-2"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  style={{ fontSize: "5px" }}
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  Parent
                </label>
              </div>
              <br />
              <div class="form-check">
                <input
                  class="form-check-input me-2"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault2"
                  style={{ fontSize: "5px" }}
                />
                <label class="form-check-label" for="flexRadioDefault2">
                  Student
                </label>
              </div>
            </div>
            <div className="col-12">
              <label for="inputPassword4" className="form-label">
                Student's Name
              </label>
              <input type="text" className="form-control" id="inputPassword4" />
            </div>

            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">
                Contact
              </label>
              <input type="text" className="form-control" id="inputPassword4" />
            </div>
            <div class="col-12">
              <label for="exampleFormControlTextarea1" class="form-label">
                What makes you interested in this profession?
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="col-12">
              <label for="count" className="form-label">
                For how many people are you buying this course?
              </label>
              <input type="number" className="form-control" id="count" />
            </div>
            <div className="col-12">
              <label for="exampleDataList" class="form-label">
                Which country do you belong to?
              </label>
              <input
                class="form-control"
                list="datalistOptions"
                id="exampleDataList"
                placeholder="Type to search..."
              />
              <datalist id="datalistOptions">
                <option value="India" />
                <option value="New York" />
                <option value="Seattle" />
                <option value="Los Angeles" />
                <option value="Chicago" />
              </datalist>
            </div>
            <div className="col-12 d-flex justify-content-center mb-3">
              <button
                type="submit"
                className="btn btn-primary rounded-pill continue"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      </div> */}

      <div style={{ width: "100%", height: "100vh" }} className="formm">
        <Form
          formId="1"
          formObj={{
            blocks: [
              {
                name: "welcome-screen",
                id: "jg1401r",
                attributes: {
                  label: "Welcome to Wizkid",
                  description:
                    "Please answer few questions before we take you to your course",
                  attachment: {
                    type: "image",
                    url: "https://quillforms.com/wp-content/uploads/2022/01/4207-ai-1.jpeg",
                  },
                  attachmentMaxWidth: "800px",
                },
              },
              {
                name: "multiple-choice",
                id: "bv91em9123",
                attributes: {
                  required: true,
                  multiple: true,
                  label: "Are you a?",
                  choices: [
                    {
                      label: "Parent",
                      value: "physics",
                    },
                    {
                      label: "Student",
                      value: "math",
                    },
                  ],
                },
              },
              {
                name: "short-text",
                id: "kd12edg",
                attributes: {
                  attachment: {
                    type: "image",
                    url: "https://tse4.mm.bing.net/th?id=OIP.MmJOq_N0asr4_7Py2mt22wHaFj&pid=Api&P=0",
                    // "https://quillforms.com/wp-content/uploads/2022/10/ludovic-migneault-B9YbNbaemMI-unsplash_50-scaled.jpeg"
                  },
                  layout: "split-right",
                  required: true,
                  label: "Please enter the name of the student",
                  attachmentMaxHeight: "400px",
                },
              },
              {
                name: "number",
                id: "wer3qdkdb",
                attributes: {
                  required: true,
                  label:
                    "Great {{field:kdsfkdg}}, please enter your phone number.",
                },
              },
              {
                name: "email",
                id: "iqfrqwr13r",
                attributes: {
                  required: true,
                  label: "Thanks {{field:kdsfkdg}}, please insert your email!",
                },
              },
              // {
              //     name: "number",
              //     id: "wer3qdkdb",
              //     attributes: {
              //       required: true,
              //       label: "Please enter your contact number."
              //     }
              //   },
              {
                name: "short-text",
                id: "m35612edg",
                attributes: {
                  required: true,
                  label: "Please enter your country name.",
                },
              },
              {
                name: "long-text",
                id: "a213rsew",
                attributes: {
                  required: true,
                  label: "What evokes your interest in this profession?",
                },
              },
              // {
              //   name: "email",
              //   id: "iqfrqwr13r",
              //   attributes: {
              //     required: true,
              //     label: "Thanks {{field:kdsfkdg}}, please insert your email!"
              //   }
              // },
              {
                name: "dropdown",
                id: "nb913rqw",
                attributes: {
                  required: true,
                  label: "Do you want us to add another course?",
                  choices: [
                    {
                      label: "yes",
                      value: "yes",
                    },
                    {
                      label: "no",
                      value: "no",
                    },
                    //   {
                    //     label: "Choice 2",
                    //     value: "choice-3"
                    //   }
                  ],
                },
              },
              {
                name: "short-text",
                id: "gqr1294c",
                attributes: {
                  required: true,
                  multiple: true,
                  verticalAlign: false,
                  label: "If yes which profession do you want us to add?",
                  // choices: [
                  //   {
                  //     label: "Physics",
                  //     value: "physics"
                  //   },
                  //   {
                  //     label: "Math",
                  //     value: "math"
                  //   },
                  //   {
                  //     label: "English",
                  //     value: "english"
                  //   },
                  //   {
                  //     label: "Biology",
                  //     value: "biology"
                  //   }
                  // ]
                },
              },
              {
                name: "statement",
                id: "g91imf1023",
                attributes: {
                  label:
                    "Thank you for answering all the questions, let us take you to your course",
                  buttonText: "Go to the course",
                  quotationMarks: true,
                },
              },
              // {
              //   name: "multiple-choice",
              //   id: "bv91em9123",
              //   attributes: {
              //     required: true,
              //     multiple: true,
              //     label: "Are you a?",
              //         choices: [
              //       {
              //         label: "Parent",
              //         value: "physics"
              //       },
              //       {
              //         label: "Student",
              //         value: "math"
              //       },
              //     ]

              //   }
              // }
            ],
            settings: {
              animationDirection: "vertical",
              disableWheelSwiping: false,
              disableNavigationArrows: false,
              disableProgressBar: false,
            },
            theme: {
              font: "Roboto",
              buttonsBgColor: "#9b51e0",
              logo: {
                src: "",
              },
              questionsColor: "#000",
              answersColor: "#0aa7c2",
              buttonsFontColor: "#fff",
              buttonsBorderRadius: 25,
              errorsFontColor: "#fff",
              errorsBgColor: "#f00",
              progressBarFillColor: "#000",
              progressBarBgColor: "#ccc",
            },
          }}
          onSubmit={(data, { completeForm, setIsSubmitting }) => {
            setTimeout(() => {
              setIsSubmitting(false);
              completeForm();
            }, 500);
          }}
        />
      </div>
    </>
  );
};
