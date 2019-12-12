import React from 'react'
import { text, microphones, preamps, outboard, snakes, digital, amps, instruments } from '../components/text'
import Mics from '../media/microphones.JPG'
import Amps from '../media/Amps.JPG'
import Equipment from './equipment'


const Home = (props) => {

    return (
        <div className="homeCont">
            <div className='heroImage'>
                <div className='header'>
                    <h1>PALLET SOUND</h1>
                    <h3>TAKE YOUR MUSIC FURTHER</h3>
                </div>
                <p>{text}</p>
                <div className="rowCont">
                    <img src={Mics} alt='microphones' />
                    <Equipment  {...props} data={microphones} type={{ a: 'subHeader1', b: 'list1', c : 'listItems1'}} title={`Microphones`}></Equipment>
                </div>
                <div className="rowCont">
                    <Equipment {...props} data={preamps} type={{ a: 'subHeader2', b: 'list2', c : 'listItems2'}} title={`Pre Amplifiers`}></Equipment>
                    <img src={Amps} alt='microphones' />
                </div>
                
                <div className="rowCont">
                    <img src={Mics} alt='microphones' />
                <Equipment {...props} data={outboard} type={{ a: 'subHeader1', b: 'list1', c : 'listItems1'}} title={`Outboard`}></Equipment>
                    
                </div>
                <div className="rowCont">
                <Equipment {...props} data={snakes} type={{ a: 'subHeader2', b: 'list2', c : 'listItems2'}} title={`Snakes`}></Equipment>
                    <img src={Amps} alt='microphones' />
                </div>
                <div className="rowCont">
                    <img src={Amps} alt='microphones' />
                <Equipment {...props} data={snakes} type={{ a: 'subHeader1', b: 'list1', c : 'listItems1'}} title={`Snakes`}></Equipment>
                </div>
                <div className="rowCont">
                <Equipment {...props} data={digital} type={{ a: 'subHeader2', b: 'list2', c : 'listItems2'}} title={`Digital Plugins`}></Equipment>
                    <img src={Mics} alt='microphones' />
                    
                </div>
                <div className="rowCont">
                    <img src={Amps} alt='microphones' />
                <Equipment {...props} data={amps} type={{ a: 'subHeader1', b: 'list1', c : 'listItems1'}} title={`Amplifiers & Cabinets:(some only available upon request)`}></Equipment>
                </div>
                <div className="rowCont">
                <Equipment {...props} data={instruments} type={{ a: 'subHeader2', b: 'list2', c : 'listItems2'}} title={`Instruments`}></Equipment>
                    <img src={Mics} alt='microphones' />
                    
                </div>


            </div>

        </div>
    )
}

export default Home