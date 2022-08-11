import React from "react";
import { Carousel } from "react-responsive-carousel";
import './Carousel.css'

const MyGallery = ({items}) => {
    const url = items.attributes.Media.data
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