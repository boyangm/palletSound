import React from 'react'
import Seth from '../media/palletsoundportraits-2.jpg'
import Michael from '../media/palletsoundportraits-1.jpg'

 const Engineers = () => {
    return (
        <div className = 'engineerCont' id='Engineers'>
        <div className= 'subTitle'>
        <h3 >Our Engineers</h3>
        </div>
        <div className = 'seth'>
            <h3>Seth Engel</h3>
            <p>Recording Engineer</p>

            <img src = {Seth}/>
        </div>
        <div className = 'mike'>
            <h3>Michael Mac</h3>
            <p>Recording Engineer/Founder</p>

            <img src = {Michael}/>
        </div>
        </div>
    )
}

export default Engineers
