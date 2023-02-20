import React from "react";
import "../navigationbar/Navigation.css";
import Logo from "../heroSection/heroSectionOne/Image/Logo_edited.png";

export const Navigation = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark text-white sticky-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={Logo} alt="WizKid" width="30" height="24" />
          </a>
          <button
            className="navbar-toggler bg-dark text-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="#">
                  Courses
                </a>
              </li>
              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a> */}
              {/* <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
              {/* </li> */}
              <li className="nav-item">
                <a className="nav-link active text-white">Pricing</a>
              </li>
            </ul>

            <form className="d-flex" role="search">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              /> */}
              {/* <div className="justify-content-center">WizKid</div> */}
              <button
                className="btn btn-outline-light me-3 rounded-pill login"
                type="submit"
              >
                Login
              </button>
              <button
                className="btn btn-outline-light rounded-pill signup"
                type="submit"
              >
                Sign up
              </button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};
