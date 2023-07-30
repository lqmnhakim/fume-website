import React from "react";
import './shoptop2.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import shirt12front from './shirt12front.png'
import shirt12back from './shirt12back.png'
import shirt13front from './shirt13front.png'
import shirt13back from './shirt13back.png'
import shirt14front from './shirt14front.png'
import shirt14back from './shirt14back.png'
import shirt15front from './shirt15front.png'
import shirt15back from './shirt15back.png'
import shirt16front from './shirt16front.png'
import shirt16back from './shirt16back.png'




const ShpTop2 = () => {
    const carouselSettings = {
        dots: false, // Show dots navigation
        infinite: true, // Looping enabled
        speed: 500, // Transition speed in milliseconds
        slidesToShow: 4, // Number of items to show at once
        slidesToScroll: 1, // Number of items to scroll per change
      };
    
      return (
        <div className='shoprow'>
            <Slider {...carouselSettings}>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt12front}></img>
                    <img className="shoppic shirtback" src={shirt12back}></img>
                    <div className="descriptbox">
                    <p><bold>Against GeoMap</bold></p>
                    <p>RM 220</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt13front}></img>
                    <img className="shoppic shirtback" src={shirt13back}></img>
                    <div className="descriptbox">
                    <p><bold>HUF Shadows</bold></p>
                    <p>RM 220</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt14front}></img>
                    <img className="shoppic shirtback" src={shirt14back}></img>
                    <div className="descriptbox">
                    <p><bold>HUF Red Lips</bold></p>
                    <p>RM 180</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt15front}></img>
                    <img className="shoppic shirtback" src={shirt15back}></img>
                    <div className="descriptbox">
                    <p><bold>HUF City Life</bold></p>
                    <p>RM 200</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt16front}></img>
                    <img className="shoppic shirtback" src={shirt16back}></img>
                    <div className="descriptbox">
                    <p><bold>TNTCO Negative</bold></p>
                    <p>RM 250</p>
                    </div>
                </div>
                </Slider>
        </div>
    )
}

export default ShpTop2;