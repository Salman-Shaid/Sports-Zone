import React, { useEffect, useRef, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { NavLink } from 'react-router-dom';
import Lottie from 'react-lottie'; 
import { Fade } from 'react-awesome-reveal'; 

import image1 from '../assets/img1.jpg';
import image2 from '../assets/img2.jpg';
import image3 from '../assets/img3.jpg';


import leftArrowAnimation from '../assets/Animation - 1733653381871.json';
import rightArrowAnimation from '../assets/Animation - 1733653518186.json';


const BannerSlide = ({ image, title, description, buttonText, buttonLink, textColor = 'text-white' }) => (
  <div
    className="hero w-full h-full"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <div className="hero-content text-center text-neutral-content flex flex-col lg:flex-row items-center justify-between w-full h-full">
      <div className="max-w-2xl p-6">
        <Fade bottom>
          <h1 className={`text-4xl font-bold ${textColor}`}>{title}</h1>
        </Fade>
        <Fade bottom delay={300}>
          <p className="p-6">{description}</p>
        </Fade>
        <Fade bottom delay={600}>
          <NavLink to={buttonLink}>
            <button className="btn btn-outline btn-error">{buttonText}</button>
          </NavLink>
        </Fade>
      </div>
    </div>
  </div>
);

const Banner = () => {
  const swiperRef = useRef(null);

  
  const handleMouseEnter = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.stop();
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.autoplay.start();
    }
  }, []);

  const slideNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const slidePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  
  const leftArrowOptions = {
    loop: true,
    autoplay: true,
    animationData: leftArrowAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  
  const rightArrowOptions = {
    loop: true,
    autoplay: true,
    animationData: rightArrowAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div
      className="relative w-full h-[600px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={false} 
        navigation={false} 
        className="h-full"
      >
       
        <SwiperSlide>
          <BannerSlide
            image={image1}
            title="The Ultimate Sports Equipment Destination"
            description="Discover the finest selection of sports equipment tailored for athletes and enthusiasts alike. From cutting-edge gear to stylish apparel, EquipSports offers premium-quality products for all your sporting needs."
            buttonText="Explore Our Equipments"
            buttonLink="/allEquipments"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlide
            image={image2}
            title="Elevate Your Game with Premium Sports Equipment"
            description="Welcome to EquiSports, the ultimate online destination for high-quality sports gear and apparel. Whether you're a seasoned professional or a passionate beginner, we have everything you need."
            buttonText="Our Services"
            buttonLink="/allEquipments"
            textColor="text-orange-600"
          />
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlide
            image={image3}
            title="Unlock Your Full Potential and Play Like a Pro"
            description="Step into greatness with premium sports gear tailored to elevate your performance. Our range ensures you’re equipped for success."
            buttonText="View More..."
            buttonLink="/allEquipments"
            textColor="text-orange-600"
          />
        </SwiperSlide>
      </Swiper>

     
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10">
        <button
          onClick={slidePrev}
          className="text-white bg-transparent rounded-full shadow-lg"
        >
          <Lottie options={leftArrowOptions} height={40} width={40} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10">
        <button
          onClick={slideNext}
          className="text-white bg-transparent rounded-full p-2 shadow-lg"
        >
          <Lottie options={rightArrowOptions} height={40} width={40} />
        </button>
      </div>
    </div>
  );
};

export default Banner;
