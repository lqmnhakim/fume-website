import lightcarhart from './lightcarhart.png'
import darkcarhart from './darkcarhart.png'
import './firsthigh.css'


function FirstHighlight() {
    return (
        <div className='carharttimg'>
            <img className='chboard crht' src={lightcarhart}></img>
            <img className='lightbrd crht' src={darkcarhart}></img>
                <div className='crhtbttn'>
                    <button className='carhattbtn phonesize'>fume.</button>
                </div>           
        </div>
    )
}

export default FirstHighlight;