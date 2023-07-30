import React from "react";
import './shoptop.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import shirt1front from './shirt1front.png'
import shirt1back from './shirt1back.png'
import shirt2front from './shirt2front.png'
import shirt2back from './shirt2back.png'
import shirt3front from './shirt3front.png'
import shirt3back from './shirt3back.png'
import shirt4front from './shirt4front.png'
import shirt4back from './shirt4back.png'
import shirt5front from './shirt5front.png'
import shirt5back from './shirt5back.png'
import shirt6front from './shirt6front.png'
import shirt6back from './shirt6back.png'
import shirt7front from './shirt7front.png'
import shirt7back from './shirt7back.png'
import shirt8front from './shirt8front.png'
import shirt8back from './shirt8back.png'
import shirt9front from './shirt9front.png'
import shirt9back from './shirt9back.png'
import shirt10front from './shirt10front.png'
import shirt10back from './shirt10back.png'
import shirt11front from './shirt11front.png'
import shirt11back from './shirt11back.png'
import shirt12front from './shirt12front.png'
import shirt12back from './shirt12back.png'



const ShpTop = () => {
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
                    <img className="shoppic shirtfront" src={shirt1front}></img>
                    <img className="shoppic shirtback" src={shirt1back}></img>
                    <div className="descriptbox">
                    <p><bold>Vans Checkered</bold></p>
                    <p>RM 291</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt2front}></img>
                    <img className="shoppic shirtback" src={shirt2back}></img>
                    <div className="descriptbox">
                    <p><bold>Paul's BBQ</bold></p>
                    <p>RM 125</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt3front}></img>
                    <img className="shoppic shirtback" src={shirt3back}></img>
                    <div className="descriptbox">
                    <p><bold>Vans Doren</bold></p>
                    <p>RM 180</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt4front}></img>
                    <img className="shoppic shirtback" src={shirt4back}></img>
                    <div className="descriptbox">
                    <p><bold>Vans Shirt</bold></p>
                    <p>RM 180</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt5front}></img>
                    <img className="shoppic shirtback" src={shirt5back}></img>
                    <div className="descriptbox">
                    <p><bold>Vans Tie-Dye</bold></p>
                    <p>RM 80</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt6front}></img>
                    <img className="shoppic shirtback" src={shirt6back}></img>
                    <div className="descriptbox">
                    <p><bold>Stussy Space</bold></p>
                    <p>RM 80</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt7front}></img>
                    <img className="shoppic shirtback" src={shirt7back}></img>
                    <div className="descriptbox">
                    <p><bold>Vans ArtPiece</bold></p>
                    <p>RM 125</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt8front}></img>
                    <img className="shoppic shirtback" src={shirt8back}></img>
                    <div className="descriptbox">
                    <p><bold>Stussy Starry Nights</bold></p>
                    <p>RM 180</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt9front}></img>
                    <img className="shoppic shirtback" src={shirt9back}></img>
                    <div className="descriptbox">
                    <p><bold>Mischief Managed</bold></p>
                    <p>RM 175</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt10front}></img>
                    <img className="shoppic shirtback" src={shirt10back}></img>
                    <div className="descriptbox">
                    <p><bold>Stussy Root Reggae</bold></p>
                    <p>RM 80</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt11front}></img>
                    <img className="shoppic shirtback" src={shirt11back}></img>
                    <div className="descriptbox">
                    <p><bold>Stussy International Flame</bold></p>
                    <p>RM 125</p>
                    </div>
                </div>
                <div className="tpleft">
                    <img className="shoppic shirtfront" src={shirt12front}></img>
                    <img className="shoppic shirtback" src={shirt12back}></img>
                    <div className="descriptbox">
                    <p><bold>Rexagon Rated R</bold></p>
                    <p>RM 250</p>
                    </div>
                </div>
                </Slider>
        </div>
    )
}

export default ShpTop;