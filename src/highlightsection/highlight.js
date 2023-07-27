import './highlight.css'

import stussyback from './assets/stussyback.png'
import stussyfront from './assets/stussyfront.png'

function HighlightedSect() {
    return (
        <div className='secondfeatcont'>
        <div className='featimage'>
            <img className='featimg' src={stussyfront} alt='stussy front'></img>
            <img className='featimgback' src={stussyback} alt='stussy back'></img>
            <button className='stussybtn'>fume.</button>
        </div>
    </div>
    )
}

export default HighlightedSect;