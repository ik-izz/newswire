import React from "react";
import ImageGallery from "react-image-gallery";
import { Carousel } from "react-responsive-carousel";
import './Carousel.css'

import img1 from './Static/img1.jpg'
import img2 from './Static/img2.jpg'
import img3 from './Static/img3.jpg'
import img4 from './Static/img4.jpg'
import img5 from './Static/img5.jpg'
import img6 from './Static/img6.jpg'
import Video from './Static/video.webm'


const MyGallery = ({items}) => {
    console.log(items.data.attributes.Media.data)
    const info = items.data.attributes;
    const url = items.data.attributes.Media.data
    console.log(url)
        return (
        <Carousel 
            showArrows={true} dynamicHeight={true} swipeable={true} >
            {url.map(img => (
                 <div key={img.id} className='carImage'>
                 {img.attributes.mime.includes('video')
                 ?
                   <video 
                   controls 
                   src={img.attributes.url}
                   />
                 :
                   <img 
                   src={img.attributes.url}
                   />
                 }
                 
                 {/* <img 
                   src={Download} 
                   onClick={() => 
                     {img.attributes.mime.includes('video')
                     ?
                       (handleclick(data.data.attributes.Media.data[index].attributes.url,
                       `video.webm`))
                     :
                       (handleclick(data.data.attributes.Media.data[index].attributes.url,
                       `${data.data.attributes.Media.data[index].attributes.alternativeText}`))
                     }
                   }/> */}
               </div>
            ))}
               
      </Carousel>
        )
}
export default MyGallery;