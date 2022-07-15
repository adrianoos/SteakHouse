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
             <h1 className='FoodInfoHeader'><span className='FoodHeaderDiscountInfo'>Rabat 10%</span> na pierwsze zamówienie</h1>
              <p className='FoodInfoText'>Do 20 stycznia złóż zamówienie na stronie i skorzystaj z promocji -10%. Spiesz się, czas trwania promocji do końca lutego.</p>
              <a className='SliderOrderLink' href='/'>Zamów Online</a>
            </div>
            <div className='SlidePictureContainer'>
              <img src={meatFoto} alt='meatPhoto'/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='sampleSlideMainContainer'>
            <div className='SlideInfoContainer'>
             <h1 className='FoodInfoHeader'><span className='FoodHeaderDiscountInfo'>Rabat 10%</span> na pierwsze zamówienie</h1>
              <p className='FoodInfoText'>Do 20 stycznia złóż zamówienie na stronie i skorzystaj z promocji -10%. Spiesz się, czas trwania promocji do końca lutego.</p>
              <a className='SliderOrderLink' href='/'>Zamów Online</a>
            </div>
            <div className='SlidePictureContainer'>
              <img src={meatFoto} alt='meatPhoto'/>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='sampleSlideMainContainer'>
            <div className='SlideInfoContainer'>
             <h1 className='FoodInfoHeader'><span className='FoodHeaderDiscountInfo'>Rabat 10%</span> na pierwsze zamówienie</h1>
              <p className='FoodInfoText'>Do 20 stycznia złóż zamówienie na stronie i skorzystaj z promocji -10%. Spiesz się, czas trwania promocji do końca lutego.</p>
              <a className='SliderOrderLink' href='/'>Zamów Online</a>
            </div>
            <div className='SlidePictureContainer'>
              <img src={meatFoto} alt='meatPhoto'/>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;