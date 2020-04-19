import React from 'react'
import { text, microphones, preamps, outboard, Instruments, digital, amps, instruments } from '../components/text'
import Mics from '../media/microphones.JPG'
import Amps from '../media/Amps.JPG'
import Equipment from './equipment'
const Gear = (props) => {
    return (
        <div className="rowCont" id="Gear">
        <div className = 'subTitle'>
            <h3>Our Equipment</h3>
        
        </div>
        <Equipment  {...props} data={microphones} type={{ a: 'subHeader1', b: 'list1', c : 'listItems1'}} title={`Microphones`}></Equipment>
        <Equipment {...props} data={preamps} type={{ a: 'subHeader1', b: 'list1', c : 'listItems1'}} title={`Preamplifiers`}></Equipment>
    
    <Equipment {...props} data={outboard} type={{ a: 'subHeader1', b: 'list1', c : 'listItems1'}} title={`Outboard`}></Equipment>
    <Equipment {...props} data={Instruments} type={{ a: 'subHeader1', b: 'list1', c : 'listItems1'}} title={`Instruments`}></Equipment>
    <Equipment {...props} data={digital} type={{ a: 'subHeader1', b: 'list1', c : 'listItems1'}} title={`Digital`}></Equipment>
        
    <Equipment {...props} data={amps} type={{ a: 'subHeader1', b: 'list1', c : 'listItems1'}} title={`Amplifiers & Cabinets:`}></Equipment>
        <div className = 'subTitle'>
            <p>* Only Available on Request</p>
        
        </div>
        
    </div>

    )
}

export default Gear
