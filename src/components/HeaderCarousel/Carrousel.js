import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

//Styling Imports
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css'

// Carousel for the homepage header not to be confused with the caorusel used in each individual story
const HeaderCarousel = ({items}) => {
    // Carousel settings
    const settings = {
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
       adaptiveHeight: true,
      };

        return (

            <div>
              {/* Carousel */}
            <Slider {...settings}>
              {/* Loops over all the stories from strapi */}
             {items.data.map( item => {
              return(
                <div key={item.id}>
                  {item.attributes.Media.data[0].attributes.mime.includes('video')
                 ?
                   <video controls >
                    <source 
                        src={item.attributes.Media.data[0].attributes.url} 
                        type={item.attributes.Media.data[0].attributes.mime}/>
                  </video>
                 :
                   <img 
                      src={item.attributes.Media.data[0].attributes.url}
                   />
                 }
                 <Link to={`/story/${item.id}`} className='carousel-header'>Read more</Link>
                </div>
             )})} 
            </Slider>
          </div>
        )
}
export default HeaderCarousel;