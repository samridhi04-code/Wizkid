import React from "react";
import Doc from "../../heroSection/heroSectionOne/Image/doctorCourse.jpg";
import Eng from "../../heroSection/heroSectionOne/Image/engineerCourse.jpg";
// import MBA from "../../heroSection/heroSectionOne/Image/MBAcourse.jpg";
import "../coursesMainPage/Coursesmain.css";

export const Coursesmain = () => {
  return (
    <>
      <div className="container-fluid mb-5 coursing px-5">
        <div className="row mb-5">
          <div className="col-4">
            <div
              class="card mt-5 d-flex justify-content-start"
              style={{ width: "90%" }}
            >
              <img src={Doc} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Doctor</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary rounded-pill">
                  Buy now
                </a>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              class="card mt-5 d-flex justify-content-end"
              style={{ width: "90%" }}
            >
              <img src={Eng} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Engineering</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary rounded-pill">
                  Coming Soon
                </a>
                
              </div>
              <div className="d-flex justify-content-around mb-3">
              <button className="like">
                <i className="fa fa-thumbs-up fs-3 text-secondary"></i>
              </button>
              <button className="like">
                <i className="fa fa-thumbs-down fs-3 text-secondary"></i>
              </button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              class="card mt-5 d-flex justify-content-end"
              style={{ width: "90%" }}
            >
              <img
                src="https://tse2.mm.bing.net/th?id=OIP.3F83Vowekj-9EeL3vwt7QgAAAA&pid=Api&P=0"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Master of Buisness Development</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary rounded-pill">
                  Coming Soon
                </a>
              </div>
              <div className="d-flex justify-content-around mb-3">
              <button className="like">
                <i className="fa fa-thumbs-up fs-3 text-secondary"></i>
              </button>
              <button className="like">
                <i className="fa fa-thumbs-down fs-3 text-secondary"></i>
              </button>
              </div>
            </div>
          </div>
          <div className="col-4">
            <div
              class="card mt-5 d-flex justify-content-end"
              style={{ width: "90%" }}
            >
              <img src="https://tse3.mm.bing.net/th?id=OIP.ukTktAOhHXxmrcav9r09AgHaHa&pid=Api&P=0" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Scientist</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary rounded-pill">
                  Coming Soon
                </a>
              </div>
              <div className="d-flex justify-content-around mb-3">
              <button className="like">
                <i className="fa fa-thumbs-up fs-3 text-secondary"></i>
              </button>
              <button className="like">
                <i className="fa fa-thumbs-down fs-3 text-secondary"></i>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
