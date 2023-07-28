import fume from './fume.png'
import './navigationbar.css';

function App() {
  return (
    <div className="headernavcontainer">  
    <div className='fumeheadpic'>
        <img className='fumeheadlogo' src={fume} alt='fume logo'></img>
    </div>
    <div className='headernavline'>
        <button className='headerbutton'>fume.</button>
        <button className='headerbutton'>fume backstage</button>
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
  </div>
  );
}

export default App;
