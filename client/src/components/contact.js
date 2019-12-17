import React ,{useState , useContext, useEffect} from 'react'
import {WebState} from './Webstate'
const Contact = () =>{
    const name = useInput('');
    const email= useInput('');
    const message= useInput('');
    const context = useContext(WebState);
    const {setNavState} = context;

    useEffect(()=>{
        setNavState('navbar scrolling');
        
        
        return setNavState('navbar');
    },[])
    const handleSubmit = (e) =>{
        e.preventDefault()
        const body = {
            name,
            email,
            message
        }
        console.log(body)
    }
    return(
        <div className ='homeCont'>
        <div className = 'contactCont'>
        <h3 className ='contactTitle'>Contact Us to Book a Session</h3>
            <form>
                    <label id="name">NAME:</label>
                    <input {...name} type='text' name='name'></input>
                    <label id="email">EMAIL:</label>
                    <input {...email} type='text' name='name'></input>
                    <label id="message">MESSAGE:</label>
                    <textarea {...message} type='text' name='name'></textarea>
                    <button onclick = {(e) =>handleSubmit(e)}>SEND MESSAGE!</button>
            </form>
        </div>
        </div>
    )

}

const useInput = (initialValue) =>{
    const [value, setValue] = useState(initialValue)
    const handleValueChange= (e) =>{
        setValue(e.target.value)

    }
    return {
        value,
        onChange: handleValueChange
    }
}
export default Contact