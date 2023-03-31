import React from 'react';
import '../doctorCourseInfo/DoctorInfoPage.css';
// import Astro1 from '../../heroSection/heroSectionOne/Image/astrobg1.gif';
import Girl from '../../heroSection/heroSectionOne/Image/doctorgirl.png';
import C from '../../heroSection/heroSectionOne/Image/heart-outline.gif'
import B from '../../heroSection/heroSectionOne/Image/brain-outline.gif'
import A from '../../heroSection/heroSectionOne/Image/sthestoscope-outline.gif'
import Puzzle from '../../heroSection/heroSectionOne/Image/business.png'
import Experience from '../../heroSection/heroSectionOne/Image/experience.png'
import Video from '../../heroSection/heroSectionOne/Image/video-camera.png';
import Quiz from '../../heroSection/heroSectionOne/Image/quiz.png'
import Activity from '../../heroSection/heroSectionOne/Image/diagnosis.png'
import Intern from '../../heroSection/heroSectionOne/Image/bag.png'
import Choice from '../../heroSection/heroSectionOne/Image/goal.png'
import Understand from '../../heroSection/heroSectionOne/Image/idea.png'
import Remember from '../../heroSection/heroSectionOne/Image/memorization.png'
import Apply from '../../heroSection/heroSectionOne/Image/tick.png'
import Analyze from '../../heroSection/heroSectionOne/Image/analyzing.png'
import Evaluate from '../../heroSection/heroSectionOne/Image/good-feedback.png'
import Smart from '../../heroSection/heroSectionOne/Image/smart-light.png'
import Boy from '../../heroSection/heroSectionOne/Image/student1.png';
import Rocket from '../../heroSection/heroSectionOne/Image/rocket.gif';


export const DoctorInfopage = () => {


  return (
   <>
   {/* <div className='container-fluid docInfo'>
    <div className='container'>
        <div className='d-flex justify-content-between'>
            <div className='mt-5 line'>
  <h1 className='lineUp mt-5' style={{fontSize:'120px'}} >Hello, Welcome to my page</h1>
            </div>
            <div>
            <video width="500" height="500" controls className='ms-4 mt-5 video1'>
            <source src="https://player.vimeo.com/external/422680186.sd.mp4?s=2c49a53671139795d436f87d2daa23c291b88377&profile_id=164&oauth2_token_id=57447761" type="video/mp4"/>
            </video>
            </div>
        </div>
    </div>
   </div> */}



   <div className='container-fluid entireBigBox1'>
    <div className='docBox w-75 m-auto'>
        <div className='d-flex justify-content-between'>
            <div className='text-light docTextMain'>
                <h2 className='WizkidDoctor mb-3'>Wizkid Doctor</h2>
               <div className='fs-5 WizkidDoctorPara'>The Wizkid Time Machine takes you to the future, where you will experience the professional life of a Doctor and you will get insights into the field of medicine.

​

This course will equip you with the right knowledge, skill & mindset to become a good doctor. 
</div>
            </div>
            <div className="docImgGirl">
            <img className='' src={Girl} height="500px" width="400px" />
          </div>
        </div>
        <div className='d-flex justify-content-between text-light' style={{marginTop:'80px'}}>
            <div className='text-center threeBoxes w-25 p-5' style={{border: '2px solid #F67280'}} >
            <div className='d-flex justify-content-center mb-4'> <img src={Puzzle} width="100px" height="100px"/></div>
                Bridge the gap between curiosity and interest
                </div>
            <div className='text-center threeBoxes w-25 p-5' style={{border: '2px solid #9921E8'}}>
            <div className='d-flex justify-content-center mb-4'> <img src={Experience} width="100px" height="100px"/></div>
                Learn by Applying and Experiencing</div>
            <div className=' threeBoxes w-25 p-5' style={{border: '2px solid #00CED1'}}>
            <div className='d-flex justify-content-center mb-4'> <img src={Choice} width="100px" height="100px"/></div>
                Enable your child to make an informed career choice</div>
        </div>

        <div className='text-light mt-5 overview'>
    <div className='fs-1 mt-5'>Course Overview</div>
    <p className='mt-5'>Perl is one of the most popular text processing languages in the world. It allows you to create extremely efficient text parsers for all sorts of applications.</p>
   <p className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   <p className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
   </div>

   <div className='text-light willLearn' style={{marginTop:'80px'}}>
    <div className='fs-1 text-center'>What you will learn</div>
    <div className='d-flex justify-content-between text-light' style={{marginTop:'150px'}}>
            <div className='w-25 p-5 Abox'>
            <div className='d-flex justify-content-center'>  <img src={C} width="100px" height="100px"/></div>
            <div className='text-center fs-4'>Knowledge</div>
            <ul className='mt-3 list'>
<li>Physiology</li>
<li>Clinical medicine</li>
<li>Diseases & Treatments</li>
<li>Medical investigations and more</li>

            </ul>
            </div>
            <div className='w-25 p-5 Bbox'>
           <div className='d-flex justify-content-center'> <img src={B} width="100px" height="100px"/></div>
            <div className='text-center fs-4'>Skill</div>
            <ul className='mt-3 list'>
<li>History taking</li>
<li>Clinical Examination</li>
<li>Report interpretation</li>
<li>Medical instruments</li>
<li>Communication skills & more</li>

            </ul>
            </div>
            <div className=' w-25 p-5 Cbox'> 
            <div className='d-flex justify-content-center'> <img src={A} width="100px" height="100px"/></div>
            <div className='text-center fs-4'>Mindset</div>
            <ul className='mt-3 list'>
<li>Critical analysis</li>
<li>Problem solving</li>
<li>Lateral thinking</li>
<li>Innovation</li>
<li>Emotional intelligence & more</li>

            </ul>
            </div>
        </div>
   </div>

   <div className='text-light learnHow' style={{marginTop:'80px'}}>
    <div className='fs-1 text-center checking'>How you will learn</div>
    <div className='d-flex justify-content-center mt-5'>
        <div className='me-5'>
            <div className='fw-bold' style={{color:'#9921E8'}}>
                <img src={Video} width="50px" height="50px" className='me-3'/>
                <span style={{fontSize:'22px'}}>  Video </span></div>
            <div className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
   </div>
        <div>
            <div className='fw-bold' style={{color:'#00CED1'}}>
            <img src={Quiz} width="50px" height="50px" className='me-3'/>
            <span style={{fontSize:'22px'}}>  Quiz </span></div>
            <div className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>

        </div>
    </div>

    <div className='d-flex justify-content-center mt-5'>
        <div className='me-5'>
            <div className='fw-bold' style={{color:'#F67280'}}>
            <img src={Activity} width="50px" height="50px" className='me-3'/>
            <span style={{fontSize:'22px'}}>   Activity </span></div>
            <div className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
   </div>
        <div>
            <div className='fw-bold' style={{color:' #ffa500'}}>
            <img src={Intern} width="50px" height="50px" className='me-3'/>
                <span style={{fontSize:'22px'}}>Internship</span></div>
            <div className='mt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>

        </div>
    </div>
   </div>

   {/* <div className='fs-2 fw-bold mt-5 text-center text-light'>OBJECTIVES</div> */}
   {/* <div className='text-light text-center' style={{marginTop:'300px', marginLeft:'500px'}}>
    <div className='fs-2 fw-bold' style={{marginTop:'300px', marginLeft:'-500px'}}>OBJECTIVES</div>
    <div className='one deg-0 me-5'> Understand </div>
    <div className='one deg-45 me-5'> Remember </div>
    <div className='one deg-90 me-5'> Apply </div>
    <div className='one deg-135 me-5'> Analyze </div>
    <div className='one deg-180 me-5'> Evaluate </div>
    <div className='one deg-225 me-5'> Smart </div>
   </div> */}



{/* <div className='wrapper' style={{marginTop:'150px'}}>
<p className='objective'>OBJECTIVES</p>
<div className='words'>
    <span className='spinning' style={{color:'#b676b1'}}>Understand</span>
    <span className='spinning' style={{color:'#00FFFF'}}>Remember</span>
    <span className='spinning' style={{color:'#ff0000'}}>Apply</span>
    <span className='spinning' style={{color:'#fff000'}}>Analyze</span>
    <span className='spinning' style={{color:'#FF00FF'}}>Evaluate</span>
    <span className='spinning' style={{color:'#ffa500'}}>Smart</span>
    <span className='spinning' style={{color:'#b676b1'}}>Understand</span>
</div>
</div> */}
<div className='objectives' style={{marginTop:'150px'}}>OBJECTIVES</div> 
<div className='container-try'>
    <div className='d-flex justify-content-around'>
    {/* <div className='fs-1 fw-bold text-light'>OBJECTIVES</div> */}
    <div className='imgBoxing'>
    <div className='imgSpin'>
        <img src={Understand} width="50px" height="50px" /> <br/>
        Understand</div>
    <div  className='imgSpin'>
    <img src={Remember} width="50px" height="50px" /><br/>
        Remember</div>
    <div  className='imgSpin'>
    <img src={Apply} width="50px" height="50px" /><br/>
        Apply</div>
    <div  className='imgSpin'>
    <img src={Analyze} width="50px" height="50px" /><br/>
        Analyze</div>
    <div  className='imgSpin'>
    <img src={Evaluate} width="50px" height="50px" /><br/>
        Evaluate</div>
    <div  className='imgSpin'>
    <img src={Smart} width="50px" height="50px" /><br/>
        Smart</div>
    </div>
    </div>
</div>

 <div className='priceOffer mb-5' style={{marginTop:'300px'}}>
 {/* <div className='d-flex justify-content-around'> */}
{/* <div className='registerText'>
<img src={HelloBiscuit} height="100px" width="100px"/>
</div> */}

{/* <div class="card">
  <div class="card-body">
    <h5 class="card-title text-center fs-1">KickStarter</h5>
    <p class="card-text text-center fs-3"> <sup>&#x20B9;</sup> 15,000 <br/><span className='fs-5'>Start Now</span> </p>
    <div className='text-center borderNeed py-4'><a href="#" class="btn btn-success rounded-pill px-4 py-2">Enroll Now</a></div>
    <div className='fs-4 text-center mt-5'>
        <div>	&#8902; Quiz & Activities</div> 
        <div> 	&#8902;Curated Content</div> 
        <div> 	&#8902;Get a lesson from Industry Experts</div>
        <div> 	&#8902;DIY Kits X2</div> 
        
    </div>
  </div>
</div> */}

<section class="product">
	<div class="product__photo">
		<div class="photo-container">
			<div class="photo-main">
				{/* <div class="controls">
					<i class="material-icons">share</i>
					<i class="material-icons">favorite_border</i>
				</div> */}
				<img className='main-price-image w-100' src={Boy} alt="green apple slice"/>
			</div>
			{/* <div class="photo-album">
				<ul>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537302064/codepen/delicious-apples/green-apple2.png" alt="green apple"/></li>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303532/codepen/delicious-apples/half-apple.png" alt="half apple"/></li>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303160/codepen/delicious-apples/green-apple-flipped.png" alt="green apple"/></li>
					<li><img src="https://res.cloudinary.com/john-mantas/image/upload/v1537303708/codepen/delicious-apples/apple-top.png" alt="apple top"/></li>
				</ul>
			</div> */}
		</div>
	</div>
	<div class="product__info">
		<div class="title d-flex">
			<h1>KickStarter</h1>
          <div className=''>  <img src={Rocket} width="100px" height="80px"/></div>
			{/* <span>COD: 45999</span> */}
		</div>
		<div class="price">
			 <span>&#x20B9; 15,000</span>
		</div>
        <h3 className='priceText'>Level up with hands-on Projects and Personalized Paths, plus everything in our Standard subscription.</h3>
           
		{/* <div class="variant">
			<h3 className='priceCard-text'>Start Now and get Goodies worth &#x20B9; 5,000</h3>
            <br/>
		</div> */}
		<div class="description">
			<h3>BENEFITS</h3>
			<ul>
				<li>Quiz & Activities</li>
				<li>Curated Content</li>
				<li>Get a lesson from Industry Experts</li>
				<li>DIY Kits X2</li>
			</ul>
		</div>
        <div class="variant">
			<h3 className='priceCard-text'>Start Now and get Goodies worth &#x20B9; 5,000</h3>
           <br/>
		</div>
		<button class="buy--btn">ENROLL NOW</button>
	</div>
</section>
{/* <div className='registerText'>
<img src={HelloBiscuit} height="700px" width="400px"/>
</div> 
</div> */}
 </div>


    </div>
   </div>

   
   </>
  )
}
