import React from "react";
import './shoptop.css'
import shirt1front from './shirt1front.png'
import shirt2front from './shirt2front.png'
import shirt3front from './shirt3front.png'
import shirt4front from './shirt4front.png'
import shirt5front from './shirt5front.png'
import shirt6front from './shirt6front.png'
import shirt7front from './shirt7front.png'
import shirt8front from './shirt8front.png'
import shirt9front from './shirt9front.png'
import shirt10front from './shirt10front.png'
import shirt11front from './shirt11front.png'
import shirt12front from './shirt12front.png'


const ShpTop = () => {
    return (
        <div className='shoprow'>
            <div className="shoptoprow">
                <div className="tpleft">
                    <img className="shoppic" src={shirt1front}></img>
                </div>
                <div className="tpleft">
                    <img className="shoppic" src={shirt2front}></img>
                </div>
                <div className="tpleft">
                    <img className="shoppic" src={shirt3front}></img>
                </div>
                <div className="tpleft">
                    <img className="shoppic" src={shirt4front}></img>
                </div>
            </div>
            <div className="shoptoprow">
                <div className="tpleft">
                    <img className="shoppic" src={shirt5front}></img>
                </div>
                <div className="tpleft">
                    <img className="shoppic" src={shirt6front}></img>
                </div>
                <div className="tpleft">
                    <img className="shoppic" src={shirt7front}></img>
                </div>
                <div className="tpleft">
                    <img className="shoppic" src={shirt8front}></img>
                </div>
            </div>
            <div className="shoptoprow">
                <div className="tpleft">
                    <img className="shoppic" src={shirt9front}></img>
                </div>
                <div className="tpleft">
                    <img className="shoppic" src={shirt10front}></img>
                </div>
                <div className="tpleft">
                    <img className="shoppic" src={shirt11front}></img>
                </div>
                <div className="tpleft">
                    <img className="shoppic" src={shirt12front}></img>
                </div>
            </div>
        </div>
    )
}

export default ShpTop;