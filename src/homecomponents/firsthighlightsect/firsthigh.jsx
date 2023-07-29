import lightcarhart from './lightcarhart.png'
import darkcarhart from './darkcarhart.png'
import './firsthigh.css'


function FirstHighlight() {
    return (
        <div className='carharttimg'>
            <img className='chboard crht' src={lightcarhart}></img>
            <img className='lightbrd crht' src={darkcarhart}></img>
            <button className='carhattbtn phonesize'>fume.</button>
        </div>
    )
}

export default FirstHighlight;