import './footersect.css'
import fumelogo from './assets/fumelogo.png'

function FooterSects() {
    return (
    <div className='mainrow'>
        <div className='footerlogo'>
            <img className='fumeblue' src={fumelogo}></img>
        </div>
        <div className='footermiddlesect onerow'>
            <div className='helpsection onerowtext'>
                <p>Help</p>
                <p>Shipping Details</p>
                <p>FAQs</p>
            </div>
        </div>
        <div className='footerrightsect onerow'>
            <div className='reachoutsection onerowtext'>
           
            <p>Instagram Handle</p>
            <p>Phone Number</p>
            <p>Twitter Handle</p>
            </div>
        </div>
    </div>
    )
}

export default FooterSects;