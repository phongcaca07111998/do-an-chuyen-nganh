import React from 'react'
import './banner.scss'
import Slider from 'react-slick'
import banner1 from '../../assets/img-banner/banner1.jpg'
import banner2 from '../../assets/img-banner/banner2.jpg'
import banner3 from '../../assets/img-banner/banner3.jpg'
import banner4 from '../../assets/img-banner/banner4.jpg'
import banner5 from '../../assets/img-banner/banner5.jpg'

export const Banner = () => {
  var settings = {
    fade: true,
    autoplay: true,
    infinite: true,
    initialSlide: 0,
    speed: 120,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
    return (
      <Slider {...settings}>
        <div className="slide-banner">
          <img src={banner1} alt="" />
        </div>
      </Slider>
    );
  };
  