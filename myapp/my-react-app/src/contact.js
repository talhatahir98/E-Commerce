import React, { useState } from "react";
import './contact.css'
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
    const { loginWithRedirect,  isAuthenticated} = useAuth0();
    const [users, setUser] = useState(
        {
            Name: '', Email: '', Subject: '', Message: '',
        }
    )

    let name, value
    const data = (e) =>
    {
        name = e.target.name;
        value = e.target.value;
        setUser({...users, [name]: value})
    }
    const senddata = async (e) => 
    {
        const { Name, Email, Subject, Message } = users
        e.preventDefault();
        const options = {
            method: 'POST',
            headers:{
                'Content-Type' : 'aplication/json'
            },
            body: JSON.stringify({
                Name, Email, Subject, Message
            })
        }
        const res = await fetch('https://e-cmmerce-contact-default-rtdb.firebaseio.com/Message.json', options)
        console.log(res)
        if(res ){
            alert("Your Message sent")
        }
        else{
            alert("An Error Occured")
        }
    }
    return(
        <>
        <div className="contact_container">
            <div className="contact">
                <h2># Contact Us</h2>
                <div className="form">
                    <form method="POST">
                        <input type="text" name="Name" value={users.Name} placeholder="Enter Your Full Name" required autoComplete="off" onChange={data}></input>
                        <input type="email" name="Email" value={users.Email} placeholder="Enter Your E-mail" autoComplete="off" onChange={data}></input>
                        <input type="text" name="Subject" value={users.Subject} placeholder="Enter Your Subject" autoComplete="off" onChange={data}></input>
                        <textarea name="Message" value={users.Message} placeholder="Your Message" autoComplete="off" onChange={data}></textarea>
                        {
                            isAuthenticated ?
                            <button type="submit" onClick={senddata}>Send</button>
                           :
                           <button type="submit" onClick={() => loginWithRedirect}>Login</button> 
                        }
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact