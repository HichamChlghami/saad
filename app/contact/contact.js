

'use client'
import React, { useState } from 'react';
import axios from 'axios';
import './contact.css'
import { AiOutlineClose } from 'react-icons/ai';

function Contact(){

  const [isSend, setIsSend] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const handleDismiss = () => {
    setShowAlert(false);
  };
  const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setShowAlert(true)
        try {
            // const response = await axios.post('http://localhost:8000/email', { name, phone, email, message });
            // alert('message resived');
            setIsSend(true)
            setName('');
            setPhone('');
            setEmail('');
            setMessage('');
        } catch (error) {
          console.log('error' , error.message)
      
      
        }
    };



  return(


<div className='section_contact' id='contact'>
<>
      {showAlert && (
        <div
          className='alert_section'
          style={{
            backgroundColor: isSend ? '#28a745' : '#e57373',
          }}
        >
          {isSend ? 'Network connected. You are now online' : 'Offline: Tasks will resume once connected'}
          <AiOutlineClose className='alert_close' onClick={handleDismiss} />
        </div>
      )}
    </>
<h1 className='section_contact_title'>Contact</h1>
<p className='section_contact_title1'>Reach me and put your goals into safe hands</p>
<p className='section_contact_title2'>Reach me To spread</p>

 <form onSubmit={handleSubmit} className='section_contact_form'>
             <div className='section_contact_form_section1'>
             <input 
                    type="text" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Business Name..."
                    required
                    className='section_conract_form_name'
                />
                <input 
                    type="text" 
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Phone Number..."
                    required
                    className='section_conract_form_phone'

                />
             </div>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email..."
                    required
                    className='section_conract_form_email'

                />
                <textarea 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message..."
                    required
                    className='section_conract_form_message'

                />
                <button type="submit" className='section_conract_form_button'>Send</button>
            </form>
</div>

  )
}
   export default   Contact