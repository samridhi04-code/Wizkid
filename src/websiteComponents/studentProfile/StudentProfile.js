import React from "react";
import "../studentProfile/StudentProfile.css";
import Study from "../heroSection/heroSectionOne/Image/study.png"

export const StudentProfile = () => {
  return (
    <>
      {/* <div className="container-fluid pt-5 profile text-light">
        <div className="text-center"><h2 className="mb-5 student w-25">Student Profile</h2></div>
        <div className="row  mt-5">
            
          <div className="col-4 text-center left p-5 ms-5">
            <div className="d-flex justify-content-center">
              <img
                className="rounded-circle"
                src="https://tse1.mm.bing.net/th?id=OIP.Ja_psHR62PfZdZwugytppwHaJ3&pid=Api&P=0"
                height="100px"
                width="100px"
              />
              
            </div>
            <div className="mt-4 fs-5">Mark Digger</div>
            <hr/>
            <div className="mt-2 text-start ms-3">Class: 7</div>
            <div className="text-start ms-3">Age: 13</div>
          </div>
          <div className="col-4 right p-5 me-5">
            <div>
              <h3>General Information</h3>
              <table class="table mt-5 border text-light">
                <tbody>
                  <tr>
                    <td className="border">Parent's name</td>
                    <td className="border">Mr. xyz</td>
                  </tr>
                  <tr>
                    <td className="border">Email</td>
                    <td className="border">xyz@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="border">Contact Number</td>
                    <td className="border">1234567890</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="ms-3 col-4">
            <img 
           className="imgg" src={Study}
                height="500px"
                width="500px"/>
          </div>
        </div>
      </div> */}

      <div class="container-fluid text-center pt-5 profile text-light">
  <div class="row justify-content-md-center p-5">
    <div class="col-4 first me-5">
    <img 
           className="imgg" src={Study}
                height="500px"
                width="500px"/>
    </div>
    <div class="col-md-auto left py-5 px-5 mt-5">
    <div className="d-flex justify-content-center">
              <img
                className="rounded-circle"
                src="https://tse1.mm.bing.net/th?id=OIP.Ja_psHR62PfZdZwugytppwHaJ3&pid=Api&P=0"
                height="100px"
                width="100px"
              />
              
            </div>
            <div className="mt-4 fs-5">Mark Digger</div>
            <hr/>
            <div className="mt-2 text-start ms-3">Class: 7</div>
            <div className="text-start ms-3">Age: 13</div>
    </div>
    <div class="col-4  right py-5 px-5 mt-5">
    <h3>General Information</h3>
              <table class="table mt-5 border text-light">
                <tbody>
                  <tr>
                    <td className="border">Parent's name</td>
                    <td className="border">Mr. xyz</td>
                  </tr>
                  <tr>
                    <td className="border">Email</td>
                    <td className="border">xyz@gmail.com</td>
                  </tr>
                  <tr>
                    <td className="border">Contact Number</td>
                    <td className="border">1234567890</td>
                  </tr>
                </tbody>
              </table>
    </div>
  </div>
  </div>
    </>
  );
};
