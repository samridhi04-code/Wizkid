import React from 'react'
import '../activity/ActivityDoc.css';
import Try from '../../heroSection/heroSectionOne/Image/course2.png';

export const ActivityDoc = () => {
  return (
    <>
    <div className='ActivityHead text-center p-5'>Activity</div>
    <div className='d-flex justify-content-between mx-5 mb-5'>
    <div class="card activityCard h-50" >
  <img src="https://tse3.mm.bing.net/th?id=OIP.lXIcNFcQ9_-Y4VToGIRywgHaHa&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Activity-1</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="#" class="btn btn-primary rounded-pill">Perform activity</a></div>
  </div>
</div>
<div class="card  activityCard h-50" >
  <img src="https://tse3.mm.bing.net/th?id=OIP.-dqc9Ghq3rvxGGs-eT5thgHaHa&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Activity-2</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="#" class="btn btn-primary rounded-pill">Perform activity</a></div>
  </div>
</div>
<div class="card activityCard h-50" >
  <img src="https://tse2.mm.bing.net/th?id=OIP.UQ9V7MhQMO6SMgsNJexGnwHaHa&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Activity-3</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="#" class="btn btn-primary rounded-pill">Perform activity</a></div>
  </div>
</div>
<div class="card activityCard h-50" >
  <img src="https://tse4.mm.bing.net/th?id=OIP.TQoaQro02lyenCrDDsU0nwHaHa&pid=Api&P=0" class="card-img-top h-25" alt="..." style={{ borderRadius: "20px" }}/>
  <div class="card-body text-dark">
    <h5 class="card-title fw-bold">Activity-4</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='text-center'><a href="#" class="btn btn-primary rounded-pill">Perform activity</a></div>
  </div>
</div>
    </div>
    </>
  )
}
