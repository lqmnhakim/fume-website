import featured from './featured.png'
import './featured.css'

function FeatHead() {
    return (
        <div className='featuredbackground'>
            <img className='featheader' src={featured}></img>
        </div>
    )
}

export default FeatHead;