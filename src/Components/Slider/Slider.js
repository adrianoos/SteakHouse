import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import meatFoto from '../assets/meatAndKnife.png';



const Slider = () => {
  return (
    <>
      <Swiper navigation={true} loop={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className='sampleSlideMainContainer'>
            <div className='SlideInfoContainer'>
             <p>food description</p>
            </div>
            <div className='SlidePictureContainer'>
              <img src={meatFoto} alt='meatPhoto'/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;