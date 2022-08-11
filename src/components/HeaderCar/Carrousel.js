import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css'

import img1 from './Static/img1.jpg'
import img2 from './Static/img2.jpg'
import img3 from './Static/img3.jpg'
import img4 from './Static/img4.jpg'
import img5 from './Static/img5.jpg'
import img6 from './Static/img6.jpg'
import img7 from './Static/img7.jpg'
import img8 from './Static/img8.jpg'
import img9 from './Static/img9.jpg'
import img10 from './Static/img10.jpg'

const handleDragStart = (e) => e.preventDefault();



const items = [
    <img src={img1} onDragStart={handleDragStart} role="presentation" />,
    <img src={img2} onDragStart={handleDragStart} role="presentation" />,
    <img src={img3} onDragStart={handleDragStart} role="presentation" />,
    <img src={img4} onDragStart={handleDragStart} role="presentation" />,
    <img src={img5} onDragStart={handleDragStart} role="presentation" />,
    <img src={img6} onDragStart={handleDragStart} role="presentation" />,
  ];


const SimpleSlider = ({items}) => {
    const settings = {
        slidesToScroll: 3,
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
       adaptiveHeight: true,
      };
        return (
            <div>
            <Slider {...settings}>
              <div>
                <img src={img1}/>
              </div>
              <div>
                <img src={img2}/>
              </div>
              <div>
                <img src={img3}/>
              </div>
              <div>
                <img src={img4}/>
              </div>
              <div>
                <img src={img5}/>
              </div>
              <div>
                <img src={img6}/>
              </div>
              <div>
                <img src={img7}/>
              </div>
              <div>
                <img src={img8}/>
              </div>
              <div>
                <img src={img9}/>
              </div>
              <div>
                <img src={img10}/>
              </div>
            </Slider>
          </div>
        )
}
export default SimpleSlider;