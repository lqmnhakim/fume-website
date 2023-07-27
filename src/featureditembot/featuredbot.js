import './featuredbot.css'
import shoe1front from './assets/shoe1front.png'
import shoe1back from './assets/shoe1back.png'
import shoe2front from './assets/shoe2front.png'
import shoe2back from './assets/shoe2back.png'
import shoe3front from './assets/shoe3front.png'
import shoe3back from './assets/shoe3back.png'
import shoe4front from './assets/shoe4front.png'
import shoe4back from './assets/shoe4back.png'

function FeaturedBottom() {
    return (
            <div className='shoeFullSlides'>
                <div className='shoeSlides1 cont'>
                    <img className='front' src={shoe1front} alt='air uptempo front view'></img>
                    <img className='back' src={shoe1back} alt='air uptempo back view'></img>
                    <p>Air More Uptempo '96</p>
                    <p>MYR 689.00</p>
                </div>
                <div className='shoeSlides2 cont'>
                    <img className='front' src={shoe2front} alt='dunk mid panda front view'></img>
                    <img className='back' src={shoe2back} alt='dunk mid panda back view'></img>
                    <p>Dunk Mid Panda</p>
                    <p>MYR 519.00</p>
                </div>
                <div className='shoeSlides3 cont'>
                    <img className='front' src={shoe3front} alt='dunk low front'></img>
                    <img className='back' src={shoe3back} alt='dunk low back'></img>
                    <p>Dunk Low Se 2 (GS)</p>
                    <p>MYR 329.00</p>
                </div>
                <div className='shoeSlides4 cont'>
                    <img className='front' src={shoe4front} alt='dunk low GS front'></img>
                    <img className='back' src={shoe4back} alt='dunk low GS back'></img>
                    <p>Dunk Low (GS)</p>
                    <p>MYR 309.00</p>
                </div>
            </div>
        )
}
export default FeaturedBottom;