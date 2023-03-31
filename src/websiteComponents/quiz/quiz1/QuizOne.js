import React from "react";
import "../quiz1/QuizOne.css";
import Quizpic from "../../heroSection/heroSectionOne/Image/course4.png";

export const QuizOne = () => {
   

  return (
    <>
      <div className="container-fluid quizBg d-flex justify-content-center">
        <div>
          <img className="Quiz1pic" src={Quizpic} height="450px" width="600px" />
        </div>
        <div className="container-sm w-75 p-5 quizBox mb-5">
          <div>
            <div className="text-center fs-2">
              <span>
                1. After examining you, the doctor will give you a _____
              </span>
            </div>
            <div className="ms-5">
              <table className="ms-5">
                <tr className=" fs-3">
                  <td className="p-5">
                    <input
                      class="form-check-input sizeBtn me-3 mt-2"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      diagnosis
                    </label>
                  </td>
                  <td className="p-5">
                    <input
                      class="form-check-input sizeBtn me-3 mt-2"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      disease
                    </label>
                  </td>
                </tr>
                <tr className=" fs-3">
                  <td className="pt-3 p-5">
                    <input
                      class="form-check-input sizeBtn me-3 mt-2"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      book
                    </label>
                  </td>
                  <td className="pt-3 p-5">
                    <input
                      class="form-check-input sizeBtn me-3 mt-2"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label class="form-check-label" for="flexRadioDefault1">
                      none of these
                    </label>
                  </td>
                </tr>
              </table>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="rounded-pill w-25 quizSubmit fw-bold bg-success"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
