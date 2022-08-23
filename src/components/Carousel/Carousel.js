import React from "react";
import { Carousel } from "react-responsive-carousel";

// Styling
import './Carousel.css'
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

// Media carousel used in Homepage and the Story Page for each story Not to be confused with the homepage header carousel
const MyGallery = ({items}) => {
    const url = items.attributes.Media.data

        return (
            <Carousel 
                showArrows={true} dynamicHeight={true} swipeable={true} >
                {url.map( img => (
                  
                    <div key={img.id} className='carImage'>
                    <OverlayTrigger
                      trigger="click"
                      placement="bottom"
                      overlay={
                        <Popover id="popover-positioned-bottom">
                          <Popover.Header as="h3">Vngle Verified</Popover.Header>
                          <Popover.Body>
                            <p>{`TimeStamp: ${img.attributes.caption.split('%').splice(0, 1)}`}</p>
                            <p>{ `Latitude: ${img.attributes.caption.split('%').splice(1,1)}`}</p>
                            <p>{`Longitude: ${img.attributes.caption.split('%').splice(2)}`}</p>
                          </Popover.Body>
                        </Popover>}
                      >
                      <Button variant="secondary">Metadata</Button>
                    </OverlayTrigger>
                    
                    {img.attributes.mime.includes('video')
                    ?
                      <video
                      controls 
                      >
                        <source src={img.attributes.url} type={img.attributes.mime}/>
                      </video>
                    :
                      <img 
                      src={img.attributes.url}
                      />
                    }
                  </div>
                ))}
                  
          </Carousel>
        )
}
export default MyGallery;