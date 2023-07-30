import React from "react";
import './shoppage.css'
import ShpTop from "./shoptop/shoptop";
import ShpBot from "./shopbot/shopbot";


const ShopMain = () => {
    return (
        <div className='shopmainz'>

            <div>
               <ShpTop />
            </div>
            <div>
                <ShpBot />
            </div>
        </div>
    )
}

export default ShopMain;