import React from 'react';

const Equipment = (props) =>{
    const {data, title} = props; 

    return(
        <div className = "equipCont">
            <h4 className = 'subHeader'> {title}</h4>
    
            <>
            <ul className = 'list'>
            {data.map(mic => 
            (
               <li className = 'listItems'>{mic}</li> 
            )
            )}

            </ul>
            </>
            
        </div>
    )
}

export default Equipment
