
import React from "react";
import FirstHighlight from './homecomponents/firsthighlightsect/firsthigh';
import FeatHead from './homecomponents/featured/featured';
import FeaturedItemPic from './homecomponents/featureditemtop/featureditemtop';
import FeaturedBottom from './homecomponents/featureditembot/featuredbot';
import FeaturedCapSect from './homecomponents/featuredcaps/featuredcaps';
import EssentsHeader from './homecomponents/essentialsheader/essentialsheader';
import EssentialSect from './homecomponents/essentialssection/essents';
import HighlightedSect from './homecomponents/highlightsection/highlight';
import SocMedHeader from './homecomponents/instagramheader/instaheader';
import InstagramPhotos from './homecomponents/instagramsection/instasect';
import FooterSects from './homecomponents/footersection/footersect';
import VideoHeader from './homecomponents/headervideosection/headervideo';
import './homepage.css'

const HomePageMain = () => {
    return (
        <div className='mainhomepage'>

            <div className='videohead'>
                <VideoHeader />
            </div>
            <div className='mainhightlight'>
                <FirstHighlight />
            </div>
            <div className='featuredheader'>
                <FeatHead />
            </div>
            <div className='featuredfirst'>
                <FeaturedItemPic />
            </div>
            <div className='featuredsecond'> 
                <FeaturedBottom />
            </div>
            <div className='featuredthird'>
                <FeaturedCapSect />
            </div>
            <div className='essentheadline'>
                <EssentsHeader />
            </div>
            <div className='essentsection'>
                <EssentialSect />
            </div>
            <div className='hightsection'>
                <HighlightedSect />
            </div>
            <div className='SocialHeader'>
                <SocMedHeader />
            </div>
            <div className='InstaPhoto'>
                <InstagramPhotos />
            </div>
            <div className='FooterSection'>
                <FooterSects />
            </div>
        </div>   
    )
}

export default HomePageMain;