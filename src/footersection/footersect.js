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
                <p className='footertext'>Help</p>
                <p className='footertext'>Shipping</p>
                <p className='footertext'>FAQs</p>
            </div>
        </div>
        <div className='footerrightsect onerow'>
            <div className='reachoutsection onerowtext'>
           
            <p className='footertext'>Instagram </p>
            <p className='footertext'>Phone </p>
            <p className='footertext'>Twitter</p>
            </div>
        </div>
    </div>
    )
}

export default FooterSects;