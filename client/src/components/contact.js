import React, { useState } from 'react'
const Contact = (props) => {
    const name = useInput('');
    const email = useInput('');
    const message = useInput('');
    const [errMessage, setErr] = useState('');


    const redirectToTarget = () => {
        props.history.push('/');
    }

    // checks to make sure email is valid
    const ValidateEmail = (mail) => {
        console.log(mail)
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail.value)) {
            return (true)
        }
        setErr("You have entered an invalid email address!" )
        return (false)
    }


    const renderData = data => {
        fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(data)
        }).then(res => {
            console.log(data);
            redirectToTarget();
        }).catch(err => {
            console.log(err)
        })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if(ValidateEmail(email) === true){
            let emailLower = email.value.toLowerCase()
            const body = {
                name: name.value,
                email: emailLower,
                message: message.value
            }
            renderData(body)
            name.setValue =''
            email.setValue =''
            message.setValue =''
            setErr('');
        }
    }
    return (
        <div className='homeCont'>
            <div className='contactCont'>
                <h3 className='contactTitle'>Contact Us to Book a Session</h3>
                <form>
                    <label id="name">NAME:</label>
                    <input {...name} type='text' name='name'></input>
                    <label id="email">EMAIL:</label>
                    <p className= 'err'>{errMessage}</p>
                    <input {...email} type='text' name='name'></input>
                    <label id="message">MESSAGE:</label>
                    <textarea {...message} type='text' name='name'></textarea>
                    <button onClick={(e) => handleSubmit(e)}>SEND MESSAGE!</button>
                </form>
            </div>
        </div>
    )

}

const useInput = (initialValue) => {
    const [value, setValue] = useState(initialValue)
    const handleValueChange = (e) => {
        setValue(e.target.value)

    }
    return {
        value,
        onChange: handleValueChange
    }
}
export default Contact