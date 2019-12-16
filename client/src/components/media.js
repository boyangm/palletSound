import React, { useState } from 'react'
import VideoScreen from './videocreen'
import {videos} from '../helpers/videos'




const Media = (props) => {
    const [link, setLink] = useState('IbE2f_BMsVo')
   
    const playVid =(e) =>{
        setLink(e.target.name)
    }

    return (
        <div className="mediaCont">
            <VideoScreen className ='jumbo' data= {link}></VideoScreen>
            <div className = 'videoCont'>
                {videos.map(video =>(
                <div className = 'videoBlock'>

                <img className='imageView' src={video.pic} name= {video.video} onClick ={(e) => playVid(e)} />

                </div>
                )
                )}

            </div>
        </div>
            )
        }
        
export default Media