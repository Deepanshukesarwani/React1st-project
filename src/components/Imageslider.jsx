import React from 'react'
import './imageslider.css'
import Slideimage1 from '../asset/slide1.jpg'
import Slideimage2 from '../asset/slide2.jpg'
import Slideimage3 from '../asset/slide3.jpg'
// import Headphone_section from '../components/Headphone_section'
const slider = () => {
  // let a=document.querySelectorAll('.slide');
// let pic=0;
 let pic=1;

function Name(){
console.log(pic);
pic++;
if(pic===1)
{
  document.getElementById('img1').src=Slideimage1;
}
else if(pic===2){
  document.getElementById('img1').src=Slideimage2;
}
else if(pic===3){
  document.getElementById('img1').src=Slideimage3;
  // console.log('helo');
  pic=0;
}
// if(pic==4)
// {
//   pic=0;
// }

}
  return (
  <div>
      <div id="slideContainer">
      <button id='prev' className='sliderBtn' onClick={Name}>&lt;
      </button>
      <button id="next" className='sliderBtn' onClick={Name}>&gt;</button>
      <div className='slideshow'>
        <a href='/Headphone'><img src={Slideimage1} id="img1" alt="slide1" /></a>
      </div>

    </div>
  </div>
  )
}

export default slider
