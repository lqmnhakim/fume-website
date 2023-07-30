import React from "react";
import './shopbot.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import pants1front from './pants1front.png'
import pants1back from './pants1back.png'
import pants2front from './pants2front.png'
import pants2back from './pants2back.png'
import pants3front from './pants3front.png'
import pants3back from './pants3back.png'
import pants4front from './pants4front.png'
import pants4back from './pants4back.png'
import pants5front from './pants5front.png'
import pants5back from './pants5back.png'
import pants6front from './pants6front.png'
import pants6back from './pants6back.png'
import pants7front from './pants7front.png'
import pants7back from './pants7back.png'
import pants8front from './pants8front.png'
import pants8back from './pants8back.png'


const ShpBot = () => {
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
                    <img className="shoppic shirtfront" src={pants1front}></img>
                    <img className="shoppic shirtback" src={pants1back}></img>
                    <div className="descriptbox">
                    <p><bold>Vans Green Sweatpants</bold></p>
                    <p>RM 240</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={pants2front}></img>
                    <img className="shoppic shirtback" src={pants2back}></img>
                    <div className="descriptbox">
                    <p><bold>Vans Grey Pants</bold></p>
                    <p>RM 240</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={pants3front}></img>
                    <img className="shoppic shirtback" src={pants3back}></img>
                    <div className="descriptbox">
                    <p><bold>Black Leisure Pants (short)</bold></p>
                    <p>RM 140</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={pants4front}></img>
                    <img className="shoppic shirtback" src={pants4back}></img>
                    <div className="descriptbox">
                    <p><bold>Black Leisure Pants (long)</bold></p>
                    <p>RM 140</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={pants5front}></img>
                    <img className="shoppic shirtback" src={pants5back}></img>
                    <div className="descriptbox">
                    <p><bold>Vans Cargo </bold></p>
                    <p>RM 250</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={pants6front}></img>
                    <img className="shoppic shirtback" src={pants6back}></img>
                    <div className="descriptbox">
                    <p><bold>Vans PeachPants</bold></p>
                    <p>RM 250</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={pants7front}></img>
                    <img className="shoppic shirtback" src={pants7back}></img>
                    <div className="descriptbox">
                    <p><bold>Vans Ocean</bold></p>
                    <p>RM 250</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={pants8front}></img>
                    <img className="shoppic shirtback" src={pants8back}></img>
                    <div className="descriptbox">
                    <p><bold>Stussy Butterflies</bold></p>
                    <p>RM 291</p>
                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default ShpBot;