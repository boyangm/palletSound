import React from 'react'
import { text, microphones, preamps, outboard, snakes, digital, amps, instruments } from '../components/text'
import Mics from '../media/microphones.JPG'
import Amps from '../media/Amps.JPG'
import Slide from './slide'
import Equipment from './equipment'
import Engineers from './engineers'
import About from './About'
import Gear from './Gear'


const Home = (props) => {

    return (
        <div className="homeCont">
            <div className='heroImage'>
                <Slide></Slide>
                <Engineers></Engineers>
                <About {...props} data = {text}></About>
                <Gear {...props}></Gear>
            

            </div>

        </div>
    )
}

export default Home