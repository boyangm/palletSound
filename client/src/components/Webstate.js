import React ,{useState}from 'react'
export const WebState = React.createContext();

export const Provider = (props) => {
    const [navState, setNavState] = useState('navbar');

    const handleScroll =() =>{
      if(window.scrollY > 100){
          setNavState('navbar scrolling')
      }else{
        setNavState('navbar')
      }
    }

    

    return (
       <WebState.Provider value={{navState,setNavState,handleScroll}} >
       {props.children}
       </WebState.Provider>
    )
}
