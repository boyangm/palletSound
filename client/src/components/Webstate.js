import React ,{useState}from 'react'
export const WebState = React.createContext();

export const Provider = (props) => {
  
    

    return (
       <WebState.Provider value={{}} >
       {props.children}
       </WebState.Provider>
    )
}
