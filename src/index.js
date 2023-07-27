import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './navigationbar/navigationbar';
import FeaturedItemTop from './featureditemtop/featureditemtop';

const root = ReactDOM.createRoot(document.getElementById('navigationbar'));
root.render(<App />);

const FeaturedTop = ReactDOM.createRoot(document.getElementById('featureditemtop'));
FeaturedTop.render(<FeaturedItemTop />);