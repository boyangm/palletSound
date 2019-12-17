import React from 'react'
import { text, microphones, preamps, outboard, snakes, digital, amps, instruments } from '../components/text'
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
        <Equipment {...props} data={preamps} type={{ a: 'subHeader1', b: 'list1', c : 'listItems1'}} title={`Pre Amplifiers`}></Equipment>
    
    <Equipment {...props} data={outboard} type={{ a: 'subHeader1', b: 'list1', c : 'listItems1'}} title={`Outboard`}></Equipment>
    <Equipment {...props} data={snakes} type={{ a: 'subHeader1', b: 'list1', c : 'listItems1'}} title={`Snakes`}></Equipment>
    <Equipment {...props} data={digital} type={{ a: 'subHeader1', b: 'list1', c : 'listItems1'}} title={`Digital Plugins`}></Equipment>
        
    <Equipment {...props} data={amps} type={{ a: 'subHeader1', b: 'list1', c : 'listItems1'}} title={`Amplifiers & Cabinets:(some only available upon request)`}></Equipment>
    </div>

    )
}

export default Gear
