import './essents.css'
import bottomleft from './assets/bottomleft.png'
import bottomright from './assets/bottomright.png'
import midtop from './assets/midtop.png'
import topleft from './assets/topleft.png'
import topright from './assets/topright.png'
import midbox from './assets/midbox.png'

function EssentialSect() {
    return (
        <div className='mainbox'>
        <div className='firstrow'>
            <div className='leftbox topbox'>
                <img className='top sze' src={topleft} alt='top photo'></img>
                <button className='topbtn hvrbtn'>TOP</button>
            </div>
            <div className='midbox topbox'>
                <img className='top sze' src={midtop} alt='midtop photo'></img>
                <button className='topbtn hvrbtn'>OUTERWEAR</button>
            </div>
            <div className='rightbox topbox'>
                <img className='top sze' src={topright} alt='top photo'></img>
                <button className='topbtn hvrbtn'>SNKRS</button>
            </div>
        </div>
        <div className='secondrow'>
            <div className='leftbox botbox'>
                <img className='bot sze' src={bottomleft} alt='pants'></img>
                <button className='botbtn hvrbtn'>BOTTOM</button>
            </div>
            <div className='midbox botbox'>
                <img className='bot sze' src={midbox} alt='accessories'></img>
                <button className='botbtn hvrbtn'>ACCESSORIES</button>
            </div>
            <div className='rightbox botbox'>
                <img className='bot sze' src={bottomright} alt='sneakers'></img>
                <button className='botbtn hvrbtn'>SNKRS</button>
            </div>
        </div>
        </div>
    )
}

export default EssentialSect;