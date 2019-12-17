import React from 'react'

const About = (props) => {
    const {data} = props
    return (
        <div className= 'aboutCont' id = "About">
            <div className = 'subTitle'>
            <h3>Our Studio</h3>
            </div>
            <p>{data}</p>
        </div>
    )
}

export default About
