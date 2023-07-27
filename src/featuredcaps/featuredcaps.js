import './featuredcaps.css'
import cap1front from './assets/cap1front.png'
import cap1back from './assets/cap1back.png'
import cap2front from './assets/cap2front.png'
import cap2back from './assets/cap2back.png'
import cap3front from './assets/cap3front.png'
import cap3back from './assets/cap3back.png'
import cap4front from './assets/cap4front.png'
import cap4back from './assets/cap4back.png'

function FeaturedCapSect() {
    return (
        <div className='CapFullPanel'>
        <div className='capfirst containe'>
            <img className='front fran' src={cap1front} alt='paradise front'></img>
            <img className='back1 bek' src={cap1back} alt='paradise back'></img>
            <p>Paradise Camp Cap</p>
            <p>MYR 139.00</p>
        </div>
        <div className='capsecond containe'>
            <img className='front fran' src={cap2front} alt='boonie front'></img>
            <img className='back2 bek' src={cap2back} alt='boonie back'></img>
            <p>Field Boonie</p>
            <p>MYR 229.00</p>
        </div>
        <div className='capthird containe'>
            <img className='front fran' src={cap3front} alt='volley front'></img>
            <img className='back3 bek' src={cap3back} alt='volley back'></img>
            <p>Utility Volley</p>
            <p>MYR 199.00</p>
        </div>
        <div className='capfourth containe'>
            <img className='front fran' src={cap4front} alt='kill bill front'></img>
            <img className='back4 bek' src={cap4back} alt='kill bill back'></img>
            <p>Kill Bill Reversible Bucket</p>
            <p>MYR 219.00</p>
        </div>
    </div>
    )
}

export default FeaturedCapSect;