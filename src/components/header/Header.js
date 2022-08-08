import React from "react";
import { Carousel } from "react-bootstrap";
import "./Header.css";
import img_1 from "./trend/img_1.jpeg";
import img_11 from "./trend/img-1.jpg";
import img_2 from "./trend/img-2.jpeg";
import img_3 from "./trend/img-3.jpeg";
import img_4 from "./trend/img-4.jpeg";

function Header() {
  return (
    <div className="header-1">
      <Carousel className="top-trend border ">
          <Carousel.Item className="extend ">
            <img className="w-100 extend" src={img_1} alt="First slide" />
            <Carousel.Caption>
              <p>Doubling down on a dubious legal manoeuvre</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="extend">
            <img
              className="d-block w-100 extend"
              src={img_2}
              alt="Second slide"
            />

            <Carousel.Caption>
              
              <p>
                Almist single-handledly, Joe Manchin has scuttled Joe Biden's
                plans
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="extend">
            <img
              className="d-block w-100 extend"
              src={img_3}
              alt="Third slide"
            />

            <Carousel.Caption>
              
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      <img src={img_11}  className="second-trend h-100"/>
      {/* <Carousel className="second-trend">
          <Carousel.Item >
            <img className="w-100 " src={img_1} alt="First slide" />
            <Carousel.Caption>
              <p>Doubling down on a dubious legal manoeuvre</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="">
            <img
              className=" w-100 extend"
              src={img_2}
              alt="Second slide"
            />

            <Carousel.Caption>
              
              <p>
                Almist single-handledly, Joe Manchin has scuttled Joe Biden's
                plans
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="">
            <img
              className=" w-100 extend"
              src={img_3}
              alt="Third slide"
            />

            <Carousel.Caption>
              
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}


      <Carousel className="third-trend border ">
          <Carousel.Item className="extend ">
            <img className="w-100 extend" src={img_1} alt="First slide" />
            <Carousel.Caption>
              <p>Doubling down on a dubious legal manoeuvre</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="extend">
            <img
              className="d-block w-100 extend"
              src={img_2}
              alt="Second slide"
            />

            <Carousel.Caption>
              
              <p>
                Almist single-handledly, Joe Manchin has scuttled Joe Biden's
                plans
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="extend">
            <img
              className="d-block w-100 extend"
              src={img_3}
              alt="Third slide"
            />

            <Carousel.Caption>
              
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>


      {/* <Carousel className="fourth-trend border ">
          <Carousel.Item className="extend ">
            <img className="w-100 extend" src={img_1} alt="First slide" />
            <Carousel.Caption>
              <p>Doubling down on a dubious legal manoeuvre</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item className="extend">
            <img
              className="d-block w-100 extend"
              src={img_2}
              alt="Second slide"
            />

            <Carousel.Caption>
              
              <p>
                Almist single-handledly, Joe Manchin has scuttled Joe Biden's
                plans
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item className="extend">
            <img
              className="d-block w-100 extend"
              src={img_3}
              alt="Third slide"
            />

            <Carousel.Caption>
              
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel> */}
      {/* <div className="trend">
        <div
          className="news-2  size text  "
          style={{ backgroundImage: `url(${img_2})` }}
        >
          <div className="push">
          
            <h6>
              Almist single-handledly, Joe Manchin has scuttled Joe Biden's
              plans
            </h6>
            <p> Vngle Feb 22</p>
          </div>
        </div>

        <div className="trend-2">
          <div
            className="news-3  size text  "
            style={{ backgroundImage: `url(${img_3})` }}
          >
            <div className="push">
            
              <h6>
                Temporary problem risk permanently putting many passengers off
              </h6>
              <p> Vngle Feb 22</p>
            </div>
          </div>
          <div
            className="news-4 size text  "
            style={{ backgroundImage: `url(${img_4})` }}
          >
            <div className="push">
            
              <h6>But its has not blocked his return to the White House</h6>
              <p> Vngle Feb 22</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Header;