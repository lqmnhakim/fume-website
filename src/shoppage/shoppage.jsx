import React from "react";
import './shoppage.css'
import ShpTop from "./shoptop/shoptop";
import ShpBot from "./shopbot/shopbot";
import TopShopHeader from "./topheader/topheader";
import ShpTop2 from "./shoptop2/shoptop2";


const ShopMain = () => {
    return (
        <div className='shopmainz'>
            <div>
                <TopShopHeader />
            </div>
            <div>
               <ShpTop />
            </div>
            <div>
                <ShpTop2 />
            </div>
            <div>
                <ShpBot />
            </div>
        </div>
    )
}

export default ShopMain;