import React from "react";
import Black from "../heroSectionOne/Image/black.png";

export const About = () => {
  return (
    <>
   <div class="container text-center content1">
  <div class="row row-cols-2 mt-5" style={{ color: "white" }}>
    <div class="col mt-5">
   <h1 className="mb-5">WizKid Doctors</h1> 
   <div className="mt-5">“The awe of discovering the human body. The honor of being trusted to give advice. The gratitude for helping someone through a difficult illness. These things never grow old.”― Danielle Ofri
   <br/>A doctor, like anyone else who has to deal with human beings, each of them unique, cannot be a scientist; he is either, like the surgeon, a craftsman, or, like the physician and the psychologist, an artist. This means that in order to be a good doctor a man must also have a good character, that is to say, whatever weaknesses and foibles he may have, he must love his fellow human beings in the concrete and desire their good before his own.
   </div>
    </div>
    <div class="col mt-3">
    <img src={Black} height="450px" width="400px" />
      </div>
  </div>
</div> 
    </>
  );
};
