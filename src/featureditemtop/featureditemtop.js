import './featureditemtop.css'
import beigefront from './beigefront.png'
import hoodieback from './hoodieback.png'
import chocfront from './chocfront.png'
import chocback from './chocback.png'
import bluefront from './bluefront.png'
import blueback from './blueback.png'
import greenfront from './greenfront.png'
import greenback from './greenback.png'

function FeaturedItemPic() {
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
export default FeaturedItemPic;