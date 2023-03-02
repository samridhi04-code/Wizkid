import React from 'react'
import '../quiz/QuizDoc.css';
import Try from '../../heroSection/heroSectionOne/Image/course2.png';
import {ActivityDoc} from '../activity/ActivityDoc';

export const QuizDoc = () => {
  return (
    <>
    <div className='QuizHead text-center p-5'>Quiz</div>
    <div className='d-flex justify-content-between mx-5'>
    <div class="card quizCard h-50" >
  <img src="https://tse1.mm.bing.net/th?id=OIP.vt_2zqO4GLIKBsiPxFw-MAHaHa&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Quiz-1</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="/quiz1" class="btn btn-primary rounded-pill">Start quiz</a></div>
  </div>
</div>
<div class="card  quizCard h-50" >
  <img src="https://tse3.mm.bing.net/th?id=OIP.Fll1TSZiQDRZjotf6vhDtQHaHa&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Quiz-2</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="#" class="btn btn-primary rounded-pill">Start quiz</a></div>
  </div>
</div>
<div class="card quizCard h-50" >
  <img src="https://tse2.mm.bing.net/th?id=OIP.LUE2ooYe1iDTjhoHD56UnAHaHf&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Quiz-3</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="#" class="btn btn-primary rounded-pill">Start quiz</a></div>
  </div>
</div>
<div class="card quizCard h-50" >
  <img src="https://tse1.mm.bing.net/th?id=OIP.Wgd3M9zGVZWBUBBS8vLcYgHaHa&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Quiz-4</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="#" class="btn btn-primary rounded-pill">Start quiz</a></div>
  </div>
</div>

    </div>
    <ActivityDoc/>
    </>
  )
}
