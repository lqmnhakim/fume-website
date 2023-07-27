import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './navigationbar/navigationbar';
import FeaturedItemPic from './featureditemtop/featureditemtop';
import FeaturedBottom from './featureditembot/featuredbot';
import FeaturedCapSect from './featuredcaps/featuredcaps';

const root = ReactDOM.createRoot(document.getElementById('navigationbar'));
root.render(<App />);

const featuredItemLayout = ReactDOM.createRoot(document.getElementById('featuredtopwear'));
featuredItemLayout.render(<FeaturedItemPic/>);

const featuredBottom = ReactDOM.createRoot(document.getElementById('featuredbotwear'));
featuredBottom.render(<FeaturedBottom />);

const featHead = ReactDOM.createRoot(document.getElementById('featuredheadwear'));
featHead.render(<FeaturedCapSect />);