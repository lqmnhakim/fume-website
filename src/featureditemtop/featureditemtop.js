import './featureditemtop.css'
import beigefront from './assets/beigefront.png'
import hoodieback from './assets/hoodieback.png'
import chocfront from './assets/chocfront.png'
import chocback from './assets/chocback.png'
import bluefront from './assets/bluefront.png'
import blueback from './assets/blueback.png'
import greenfront from './assets/greenfront.png'
import greenback from './assets/greenback.png'

function FeaturedItemTop() {
    return (
        <div id='picturelayout'>
             <div className='firstbox'>
                <img className='firstfront' src={beigefront} alt='beige hoodie'></img>
                <img className='firstback' src={hoodieback} alt='beige hoodie back'></img>
                <p className='clothesname'>Dreamers Hoodie---[BEIGE]</p>
                <p className='clothesprice'>RM 75</p>
             </div> 
             <div className='thirdbox'>
                <img className='thirdfront' src={chocfront} alt='brown hoodie'></img>
                <img className='thirdback' src={chocback} alt='brown hoodie back'></img>
                <p id='clothesname'>Memories Hoodie---[BROWN]</p>
                <p id='clothesprice'>RM 75</p>
             </div>
             <div className='fourthbox'> 
                <img className='fourthfront' src={bluefront} alt='blue hoodie'></img>
                <img className='fourthback' src={blueback} alt='blue hoodie back'></img>
                <p id='clothesname'>Dreamers Hoodie---[BLUE]</p>
                <p className='clothesprice'>RM 75</p>
             </div>
             <div className='fifthbox'>    
                <img className='fifthfront' src={greenfront} alt='green hoodie'></img>
                <img className='fifthback' src={greenback} alt='green hoodie back'></img>
                <p className='clothesname'>Memories Hoodie---[GREEN]</p>
                <p className='clothesprice'>RM 75</p>
             </div>
         </div>
    )
}
export default FeaturedItemTop;