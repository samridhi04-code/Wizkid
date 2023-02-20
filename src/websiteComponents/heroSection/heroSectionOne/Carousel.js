import React from "react";
import "../heroSectionOne/Carousel.css";
import { Parallax } from "react-parallax";
import { Background } from "react-parallax";
import Black from "./Image/black.png";
import Astro from "./Image/astropng.png";
import Univ from "./Image/universe.jpg";
import Engineer from "./Image/engineergirl1.png";
import Neon2 from "./Image/neonbg5.jpg";
import Neon from "./Image/neonbg4.jpg";
import Doctor from "./Image/doctorgirl.png";
import Shoot from "./Image/shootingstar.gif";
import { Footer } from "../../footer/Footer";


export const Carousel = () => {
  return (
    <>
      <div className="App">
        <Parallax
          strength={600}
          bgImage={Shoot}
          bgImageStyle={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "1210px",
          }}
        >
          <div className="content">
            {/* content1 */}
            <div style={{ marginLeft: "75px" }}>
              <img src={Astro} height="500px" width="500px" />
            </div>
            <div>
              <div className="text-content">
                <p className="fw-bold tagLine">Time Machine to The Future </p>
                <p style={{ fontSize: "25px", color: "white" }}>
                  Let your kids explore the world and watch them become
                  professionals
                </p>
                <div>
                  <button className="btn tagBtn rounded-pill">Explore</button>
                </div>
              </div>
            </div>
            {/* content1 end */}
            {/* content2 */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/-UmPt6LgKRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

            {/* content2 end */}
          </div>
        </Parallax>
        <Parallax strength={300} bgImage={Neon}>
          {/* <div class="container text-center content1">
  <div class="row row-cols-2 mt-5" style={{ color: "white" }}>
    <div class="col mt-5">
    <img src="https://childrensmd.org/wp-content/uploads/2020/10/iStock-1219395590.jpg" height="300px" width="450px" />
    </div>
    <div class="col px-3 py-5 mt-5 textRight">
      <span className="data1">What if you get to experience the life of your favourite professionals even before you become one?</span> <br/>
      <span className="subdata1">We give you the chance to live any professional life you can think of and let you decide whether the experience was worth the dedication of your entire life. </span>
    </div>
    <div class="col px-3 py-5 mt-5 textLeft">
      <span className="data2">Let not the world decide the life you want to live!</span> <br/>
      <span className="subdata2">Explore our courses and let us take you on the beautiful journey of each of your dreams.</span>
    </div>
    <div class="col mt-5">
    <img src="https://thumbs.dreamstime.com/b/two-kids-school-age-book-exploring-great-world-eco-concept-floating-island-children-sitting-93323380.jpg" height="300px" width="450px" />
    </div>
  </div>
</div> */}
          <div class="container text-center content1">
            <div class="row row-cols-2 mt-5 cards">
              <div class="col mt-5">
                <div class="card card1 me-5">
                  <div className="cardbg">
                    {/* <img
                    src="https://thumbs.dreamstime.com/b/two-kids-school-age-book-exploring-great-world-eco-concept-floating-island-children-sitting-93323380.jpg"
                    class="cardimg mt-5"
                    alt={Univ}
                  /> */}
                    <iframe
                      className="cardimg mt-5"
                      width="50%"
                      height="50%"
                      src="https://www.youtube.com/embed/H97A3kaSLhQ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="mt-5 fs-4 fw-bolder">
                      Doctor Motivational Video
                    </div>
                    {/* <button type="button" className="mt-3 rounded-pill btn">Watch now</button> */}
                    {/* <button type="button" class="btn watch mt-3 rounded-pill">
                      Watch now
                    </button> */}
                  </div>
                  <div class="card-body">
                    <h5 class="card-title fw-bolder">Doctors</h5>
                    <p class="card-text">
                      Not all the heroes wear cape, some wear apron too. Doctors
                      are just god in disguise, ready to help us by risking
                      everything of their own.
                    </p>
                    <a href="#" class="btn btn-primary rounded-pill cardbtn">
                      Enroll now
                    </a>
                  </div>
                </div>
              </div>
              <div class="col mt-5">
                <div class="card card2 ms-5">
                  <div className="cardbg">
                    {/* <img
                    src="https://thumbs.dreamstime.com/b/two-kids-school-age-book-exploring-great-world-eco-concept-floating-island-children-sitting-93323380.jpg"
                    class="cardimg mt-5"
                    alt={Univ}
                  /> */}
                    <iframe
                      className="cardimg mt-5"
                      width="50%"
                      height="50%"
                      src="https://www.youtube.com/embed/H97A3kaSLhQ"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                    <div className="mt-5 fs-4 fw-bolder">
                      Engineer Motivational Video
                    </div>
                    {/* <button type="button" class="btn watch mt-3 rounded-pill">
                      Watch now
                    </button> */}
                  </div>
                  <div class="card-body">
                    <h5 class="card-title fw-bolder">Engineers</h5>
                    <p class="card-text">
                      There is nothing that can't be made possible.Engineers
                      make impossible things turn into reality, it's them who
                      give life to thousands of dreams and thoughts.
                    </p>
                    <a href="#" class="btn btn-primary rounded-pill cardbtn">
                      Enroll now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="content">hello</div> */}
        </Parallax>
        <Parallax strength={-600} bgImage={Neon2}>
          <div class="container text-center content1">
            <div class="row row-cols-2 mt-5">
              <div class="col mt-5 doc pt-5 about">
                <h1 className="mb-5">WizKid Doctors</h1>
                <div className="mt-5">
                  “The awe of discovering the human body. The honor of being
                  trusted to give advice. The gratitude for helping someone
                  through a difficult illness. These things never grow old.”―
                  Danielle Ofri
                  <br />A doctor, like anyone else who has to deal with human
                  beings, each of them unique, cannot be a scientist; he is
                  either, like the surgeon, a craftsman, or, like the physician
                  and the psychologist, an artist. This means that in order to
                  be a good doctor a man must also have a good character, that
                  is to say, whatever weaknesses and foibles he may have, he
                  must love his fellow human beings in the concrete and desire
                  their good before his own.
                </div>
              </div>
              <div class="col mt-3">
                <img src={Doctor} height="450px" width="400px" />
              </div>
              {/* <div class="col mt-3 mb-5">
    <img src={Doctor} height="450px" width="400px" />
      </div>
      <div class="col mt-5 eng">
    <h1>WizKid Engineers</h1>
    <div>“What we usually consider as impossible are simply engineering problems… there’s no law of physics preventing them.” – Michio Kaku
      <br/>Engineering is not merely knowing and being knowledgeable, like a walking encyclopedia; engineering is not merely analysis; engineering is not merely the possession of the capacity to get elegant solutions to non-existent engineering problems; engineering is practicing the art of the organizing forces of technological change… Engineers operate at the interface between science and society.</div>
      </div> */}
            </div>
          </div>
        </Parallax>
        <Parallax strength={600} bgImage={Neon}>
          <div class="container text-center content1">
            <div class="row row-cols-2 mt-5">
            <div class="col mt-3">
                <img src={Engineer} height="470px" width="400px" />
              </div>
              <div className="col mt-5 doc pt-5 about">
                <h1 className="mb-5">WizKid Engineers</h1>
                <div className="mt-5">
                  ““What we usually consider as impossible are simply
                  engineering problems… there’s no law of physics preventing
                  them.” – Michio Kaku
                  <br />
                  Engineering is not merely knowing and being knowledgeable,
                  like a walking encyclopedia; engineering is not merely
                  analysis; engineering is not merely the possession of the
                  capacity to get elegant solutions to non-existent engineering
                  problems; engineering is practicing the art of the organizing
                  forces of technological change… Engineers operate at the
                  interface between science and society.
                </div>
              </div>
              

              {/* <div class="container text-center content1">
  <div class="row row-cols-2 mt-5">
    <div class="col mt-3">
    <img src={Engineer} height="450px" width="700px" />
      </div>
      <div class="col mt-5 eng pt-5 about">
   <h1 className="mb-5">WizKid Engineers</h1> 
   <div className="mt-5">“What we usually consider as impossible are simply engineering problems… there’s no law of physics preventing them.” – Michio Kaku
      <br/>Engineering is not merely knowing and being knowledgeable, like a walking encyclopedia; engineering is not merely analysis; engineering is not merely the possession of the capacity to get elegant solutions to non-existent engineering problems; engineering is practicing the art of the organizing forces of technological change… Engineers operate at the interface between science and society.</div>
    </div> */}

              {/* <div class="col mt-3 mb-5">
    <img src={Doctor} height="450px" width="400px" />
      </div>
      <div class="col mt-5 eng">
    <h1>WizKid Engineers</h1>
    <div>“What we usually consider as impossible are simply engineering problems… there’s no law of physics preventing them.” – Michio Kaku
      <br/>Engineering is not merely knowing and being knowledgeable, like a walking encyclopedia; engineering is not merely analysis; engineering is not merely the possession of the capacity to get elegant solutions to non-existent engineering problems; engineering is practicing the art of the organizing forces of technological change… Engineers operate at the interface between science and society.</div>
      </div> */}
            </div>
          </div>
        </Parallax>
        <Parallax disabled>
<Footer/>
       
      {/* <div>hey HTML color codes are hexadecimal triplets representing the colors red, green, and blue (#RRGGBB). For example, in the color red, the color code is #FF0000, which is '255' red, '0' green, and '0' blue. There are 16,777,216 possible HTML color codes, and all are visible on a 24-bit display.HTML color codes are hexadecimal triplets representing the colors red, green, and blue (#RRGGBB). For example, in the color red, the color code is #FF0000, which is '255' red, '0' green, and '0' blue. There are 16,777,216 possible HTML color codes, and all are visible on a 24-bit display.HTML color codes are hexadecimal triplets representing the colors red, green, and blue (#RRGGBB). For example, in the color red, the color code is #FF0000, which is '255' red, '0' green, and '0' blue. There are 16,777,216 possible HTML color codes, and all are visible on a 24-bit display.HTML color codes are hexadecimal triplets representing the colors red, green, and blue (#RRGGBB). For example, in the color red, the color code is #FF0000, which is '255' red, '0' green, and '0' blue. There are 16,777,216 possible HTML color codes, and all are visible on a 24-bit display.HTML color codes are hexadecimal triplets representing the colors red, green, and blue (#RRGGBB). For example, in the color red, the color code is #FF0000, which is '255' red, '0' green, and '0' blue. There are 16,777,216 possible HTML color codes, and all are visible on a 24-bit display.HTML color codes are hexadecimal triplets representing the colors red, green, and blue (#RRGGBB). For example, in the color red, the color code is #FF0000, which is '255' red, '0' green, and '0' blue. There are 16,777,216 possible HTML color codes, and all are visible on a 24-bit display.</div> */}
      </Parallax>
      </div>
    </>
  );
};
{
  /* <About/> */
}
