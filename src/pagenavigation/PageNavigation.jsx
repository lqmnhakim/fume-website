import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePageMain from '../homepage';
import BackStage from '../backstagecomponents/backstage';
import fume from './fume.png'
import './pagenavigation.css'

const PageNavi = () => {
  return (
    <Router>
    <div className="headernavcontainer">  
      <div className='fumeheadpic'>
        <img className='fumeheadlogo' src={fume} alt='fume logo'></img>
    </div>
    <div className='headernavline'>
    <div className='buttonnavbar'>
        <Link to='/'><button className='headerbutton'>fume.</button></Link>
        <Link to='/backstage'><button className='headerbutton'>fume backstage</button></Link>
          <div className='dropdown'>
            <button className='dropbtn'>clothes</button>
              <div className='dropdown-content1'>
                <button className='mensdropdown'>top</button>
                <button className='mensdropdown'>bottom</button>
                <button className='mensdropdown'>outerwear</button> 
              </div>
          </div>
          <div className='dropdown2'>
            <button className='dropbtn'>accessories</button>
          </div>
        <button className='headerbutton'>SNKRS</button>
        </div> 
        <Routes>
        <Route path='/' element={<HomePageMain />} />
        <Route path='/backstagecomponents/backstage' element={<BackStage />} />
        </Routes>
    </div>
        
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