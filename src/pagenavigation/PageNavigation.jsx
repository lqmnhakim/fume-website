import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePageMain from '../homepage';
import BackStage from '../backstagecomponents/backstage';
import fume from './fume.png'
import './pagenavigation.css'
import ShopMain from '../shoppage/shoppage';



const PageNavi = () => {
  return (
    <Router>
      <div className="headernavcontainer">  
        <div className='fumeheadpic'>
          <img className='fumeheadlogo' src={fume} alt='fume logo'></img>
        </div>
        <div className='headernavline'>
          <div className='buttonnavbar'>
            <Link to='/'><button className='headerbutton spcl'>fume.</button></Link>
            <Link to='/backstage'><button className='headerbutton spcl'>fume backstage</button></Link>
            <div className='dropdown'>
              <Link to='/shoppage'><button className='dropbtn spcl'>clothes</button></Link>
                <div className='dropdown-content1'>
                  <button className='mensdropdown'>top</button>
                  <button className='mensdropdown spcl'>bottom</button>
                  <button className='mensdropdown spcl'>outerwear</button> 
                </div>
            </div>
          
            <div className='dropdown2'>
              <button className='dropbtn spcl'>accessories</button>
            </div>
            <div className=''>
              <button className='headerbutton spcl'>SNKRS</button>
            </div>
            </div> 
          </div>  
          <div className='dropdownmobile'>
              <button className='dropbtnmobile'>===</button>
              <div className='dropdowncontentmobile'>
                <Link to='/'><button className='mensdropdown'>fume.</button></Link>
                <Link to='/backstage'><button className='mensdropdown'>backstage</button></Link>
                <Link to='/shoppage'><button className='mensdropdown'>Store</button></Link>
                <button className='mensdropdown'>accessories</button>
                <button className='mensdropdown'>SNKRS</button>
              </div>
          </div>
        
        <Routes>
        <Route path='/' element={<HomePageMain />} />
        <Route path='/backstage' element={<BackStage />} />
        <Route path='/shoppage' element={<ShopMain />} />
        </Routes>
      </div>
    </Router>
  )

};

export default PageNavi;

  // return (
  //   <Router>
  //     <div>
  //       <nav>
  //         <ul>
  //           <li>
  //             <Link to='/'>Home</Link>
  //           </li>
  //           <li>
  //             <Link to='/backstage'>About</Link>
  //           </li>
  //         </ul>
  //       </nav>

  //       <Routes>
  //         {/* Set the home page as the default route using 'exact' prop */}
  //         <Route path='/' element={<HomePageMain />} />
  //         <Route path='/backstagecomponents/backstage' element={<BackStage />} />
  //       </Routes>
  //     </div>
  //   </Router>
  // );