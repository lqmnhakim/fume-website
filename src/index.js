import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './navigationbar/navigationbar';
import FeaturedItemPic from './featureditemtop/featureditemtop';
import FeaturedBottom from './featureditembot/featuredbot';
import FeaturedCapSect from './featuredcaps/featuredcaps';
import EssentialSect from './essentialssection/essents';
import HighlightedSect from './highlightsection/highlight';
import InstagramPhotos from './instagramsection/instasect';
import FooterSects from './footersection/footersect';

const root = ReactDOM.createRoot(document.getElementById('navigationbar'));
root.render(<App />);

const featuredItemLayout = ReactDOM.createRoot(document.getElementById('featuredtopwear'));
featuredItemLayout.render(<FeaturedItemPic/>);

const featuredBottom = ReactDOM.createRoot(document.getElementById('featuredbotwear'));
featuredBottom.render(<FeaturedBottom />);

const featHead = ReactDOM.createRoot(document.getElementById('featuredheadwear'));
featHead.render(<FeaturedCapSect />);

const EssentSection = ReactDOM.createRoot(document.getElementById('essentialitem'));
EssentSection.render(<EssentialSect />);

const HighLightSect = ReactDOM.createRoot(document.getElementById('highlightedsection'));
HighLightSect.render(<HighlightedSect />);

const instaView = ReactDOM.createRoot(document.getElementById('instagram'));
instaView.render(<InstagramPhotos />);

const footerSectionBar = ReactDOM.createRoot(document.getElementById('footersction'));
footerSectionBar.render(<FooterSects />);