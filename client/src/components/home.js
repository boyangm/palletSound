import React from 'react'
import {text, microphones , preamps, outboard, snakes, digital , amps, instruments} from '../components/text'
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
                    <Equipment {...props} data= {microphones} title={`Microphones`}></Equipment>
                    <Equipment {...props} data = {preamps} title={`Pre Amplifiers`}></Equipment>
                    <Equipment {...props} data = {outboard} title={`Outboard`}></Equipment>
                    <Equipment {...props} data = {snakes} title={`Snakes`}></Equipment>
                    <Equipment {...props} data = {digital} title={`Digital Plugins`}></Equipment>
                    <Equipment {...props} data = {amps} title={`Amplifiers & Cabinets:(some only available upon request)`}></Equipment>
                    <Equipment {...props} data = {instruments} title={`Instruments`}></Equipment>
            </div>

        </div>
    )
}

export default Home