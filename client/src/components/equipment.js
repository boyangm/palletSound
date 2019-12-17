import React from 'react';

const Equipment = (props) =>{
    const {data, title, type} = props; 

    return(
        <div className = "equipCont">
            <h4 className = {type.a}> {title}</h4>
            <>
            <ul className = {type.b}>
            {data.map(mic => 
            (
               <li className = {type.c}>{mic}</li> 
            )
            )}

            </ul>
            </>
            
        </div>
    )
}

export default Equipment
