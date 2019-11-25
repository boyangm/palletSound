import React from 'react'


const VideoScreen =(props) =>{

return(
   

    <iframe className = 'videoscreen' width="560" height="315" src={`https://www.youtube.com/embed/${props.data}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

)
}
export default VideoScreen