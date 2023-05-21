import React from 'react';
import "./HeaderSlider.scss";
import { sliderImgs } from "../../utils/images";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderSlider = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='slider'>
      <div className='containers'>
        <div className='slider-content overflow-x-hidden'>
          <Slider {...settings}>
            <div className='slider-item'>
              <img src = {sliderImgs[0]} alt = "sliderImgs1" />
              <div className="banner-content">
                <p className="banner-subtitle">Trending item</p>
                <h2 className="banner-title">Women's latest fashion sale</h2>
                <p className="banner-text">
                  starting at $ <b>20</b>.00
                </p>
                <Link to="/" className="banner-btn">Shop now</Link>
              </div>
            </div>
            <div className='slider-item'>
              <img src = {sliderImgs[1]} alt = "sliderImgs2" />
              <div className="banner-content">
                <p className="banner-subtitle">Trending accessories</p>
                <h2 className="banner-title">Modern sunglasses</h2>
                <p className="banner-text">
                starting at $ <b>15</b>.00
                </p>
                <Link to="/" className="banner-btn">Shop now</Link>
              </div>
            </div>
            <div className='slider-item'>
              <img src = {sliderImgs[2]} alt = "sliderImgs3" />
              <div className="banner-content">
                <p className="banner-subtitle">Sale Offer</p>
                <h2 className="banner-title">New fashion summer sale</h2>
                <p className="banner-text">
                starting at $ <b>29</b>.99
                </p>
                <Link to="/" className="banner-btn">Shop now</Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default HeaderSlider