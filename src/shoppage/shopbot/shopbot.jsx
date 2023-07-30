import React from "react";
import './shopbot.css'
import pants1 from './pants1.png'
import pants2 from './pants2.png'
import pants3 from './pants3.png'
import pants4 from './pants4.png'
import pants5 from './pants5.png'
import pants6 from './pants6.png'
import pants7 from './pants7.png'
import pants8 from './pants8.png'



const ShpBot = () => {
    return (
        <div className='shoprow'>
            <div className="shoptoprow">
                <div className="tpleft">
                    <img className="shoppic" src={pants1}></img>
                </div>
                <div className="tpleft">
                    <img className="shoppic" src={pants2}></img>
                </div>
                <div className="tpleft">
                    <img className="shoppic" src={pants3}></img>
                </div>
                <div className="tpleft">
                    <img className="shoppic" src={pants4}></img>
                </div>
            </div>
            <div className="shoptoprow">
                <div className="tpleft">
                    <img className="shoppic" src={pants5}></img>
                </div>
                <div className="tpleft">
                    <img className="shoppic" src={pants6}></img>
                </div>
                <div className="tpleft">
                    <img className="shoppic" src={pants7}></img>
                </div>
                <div className="tpleft">
                    <img className="shoppic" src={pants8}></img>
                </div>
            </div>
        </div>
    )
}

export default ShpBot;