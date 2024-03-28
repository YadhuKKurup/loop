import { useEffect } from 'react';
import '../Stylesheets/ImageSlider.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import Image1 from "../Images/SliderImages/clash1.webp";
import Image2 from "../Images/SliderImages/hogwarts-legacy.jpg";
import Image3 from "../Images/SliderImages/hellblade.jpg";
import Image4 from "../Images/SliderImages/gta66.jpeg";
import Image5 from "../Images/SliderImages/valhala.png";
import Image6 from "../Images/SliderImages/fortnite.jpg";

const ImageSlider = () => {
  useEffect(() => {
    // Initialize Swiper
   new Swiper('.swiper', {
      direction: 'horizontal', 
      loop: true,

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }, []); 

  return (
    <div className="slider mt-3" style={{ width: '90%', height: '500px', margin: 'auto', }}>
      <div className="swiper" 
      style={{ 
        width: '90%', 
      height: '500px', 
      margin: 'auto',
      border:'10px solid white',
              borderRadius:'20px',
              boxShadow:'0px -23px 25px 0px rgba(0, 0, 0, 0.17) inset, 0px -36px 30px 0px rgba(0, 0, 0, 0.15) inset, 0px -79px 40px 0px rgba(0, 0, 0, 0.1) inset, 0px 2px 1px rgba(0, 0, 0, 0.06), 0px 4px 2px rgba(0, 0, 0, 0.09), 0px 8px 4px rgba(0, 0, 0, 0.09), 0px 16px 8px rgba(0, 0, 0, 0.09)'}}>
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src={Image1} alt="Image 1" />
          </div>
          <div className="swiper-slide">
            <img src={Image2} alt="Image 2" />
          </div>
          <div className="swiper-slide">
            <img src={Image3} alt="Image 3" />
          </div>
          <div className="swiper-slide">
            <img src={Image4} alt="Image 4" />
          </div>
          <div className="swiper-slide">
            <img src={Image5} alt="Image 5" />
          </div>
          <div className="swiper-slide">
            <img src={Image6} alt="Image 6" />
          </div>
        </div>

        <div className="swiper-button-prev" style={{fontWeight:'bolder',color:'lightgrey'}}></div>
        <div className="swiper-button-next" style={{fontWeight:'bolder',color:'lightgrey'}}></div>
        {/* <div className="swiper-scrollbar"></div> */}
      </div>
    </div>
  );
};

export default ImageSlider;
