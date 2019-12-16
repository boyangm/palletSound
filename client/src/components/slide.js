// @flow 
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Console from '../media/console.JPG'
import RoomA from '../media/RoomA.JPG'
import AltRoomA from '../media/AltRoomA.JPG'
 const Slide = (props) => {
    return (
        <div className = "slideCont">
            <div className='header'>
                    <h1 >PALLET SOUND</h1>
                    <h3 >TAKE YOUR MUSIC FURTHER</h3>
                </div>
        <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={AltRoomA}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>1048 W 37th Street
            Chicago, Illinois</h3>
            <p>Scroll Down</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Console}
            alt="Third slide"
          />
      
          <Carousel.Caption>
          <h3>1048 W 37th Street
            Chicago, Illinois</h3>
            <p>Scroll Down</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={RoomA}
            alt="Third slide"
          />
      
          <Carousel.Caption>
          <h3>1048 W 37th Street
            Chicago, Illinois</h3>
            <p>Scroll Down</p>
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
    );
};

export default Slide