'use client'
import React, { useState } from 'react';
import axios from 'axios';
function App(){


  const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/email', { name, phone, email, message });
            alert(response.data);
            // Clear the form
            setName('');
            setPhone('');
            setEmail('');
            setMessage('');
        } catch (error) {
          console.log('error' , error.message)
        }
    };



  return(
   <div className="profile">
   

<div className='section_contact' id='contact'>
 <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    required
                />
                <input 
                    type="text" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Your Phone"
                    required
                />
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your Email"
                    required
                />
                <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message here"
                    required
                />
                <button type="submit">Send</button>
            </form>
</div>

   </div>
  )
}
   export default App