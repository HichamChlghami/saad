'use client'
import React, { useState } from 'react';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import axios from 'axios';
function App(){
  // const images = [
  //   'x.jfif',
  //  'logo.png'

  // ];
  // const [currentIndex, setCurrentIndex] = useState(0); 

  // const nextImage = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const prevImage = () => {
  //   setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  // };


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
    {/* <div className="section_home">
      <div className="section_home_title">
        <h1 className="section_home_title_part1">MEDIA</h1>
        <img src="/logo2.png" alt="logo"className="section_home_title_part2_image"/>
        <h1 className="section_home_title_part3">BUYER</h1>
      </div>
      <div className="section_home_navbar">
          <a href="#about" className="section_home_navbar_link">about me</a>
          <a href="#services" className="section_home_navbar_link">services</a>
          <a href="#why_me" className="section_home_navbar_link">why me?</a>
          <a href="#/about" className="section_home_navbar_link">success stories</a>
          <a href="#/about" className="section_home_navbar_link">contact</a>
          <a href="#/about" className="section_home_navbar_link">FAQs</a>
          
      </div>


      <div className="section_home_content">
      <div className="section_home_content_text">
        <div className="section_home_content_p">
        <p className="section_home_content_p1">If You Want Quick Results</p>
        <p className="section_home_content_p2">Go Away !!</p>
        <p className="section_home_content_p3">If You Want Big Results</p>
        <p className="section_home_content_p4">Reach Me !!</p>

        </div>
      <button className="section_home_button">contact me</button>
      </div>
        <img src='/x.jfif' alt="portfolio_image"   className="section_home_content_img"  />
      </div>
     
    </div>



<div className='section_about' id="about">
  <h2 className="section_about_title">about me</h2>

  <div className="section_about_section1">
    <div className="section_about_section1_who_ami">
      <h2 className="section_about_section1_who_ami_title"> Who am I ?</h2>
      <p className="section_about_section1_who_ami_text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
    </div>
    <img src='/x.jfif' alt="image" className="section_about_section1_who_ami_image" />
  </div>




<div className='section_about_section2'>
  <div className='section_about_section2_switch'>
<FaLessThan  className='section_about_section2_plus_minus' onClick={nextImage}/>
<img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`}  className='section_about_section2_image'/>
<FaGreaterThan className='section_about_section2_plus_minus'  onClick={prevImage} />
</div>


<div className='section_about_section2_content'>
<h2 className='section_about_section2_content_title'>certification</h2>
<p className='section_about_section2_content_text'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<li className='section_about_section2_content_link' onClick={() => setCurrentIndex(1)}>et dolore magna</li>
<li className='section_about_section2_content_link'onClick={() => setCurrentIndex(0)}>et dolore magna</li>
<li className='section_about_section2_content_link'>et dolore magna</li>
</div>



</div>




</div>








<div className='section_services' id='services'>
<h2 className="section_services_title">Services</h2>
<div className='section_services_cards'>
<div className='section_services_card'>
  <div className='section_services_card_header'>
    <img src='/google-ads.svg' alt='google_ads_services' className='section_services_card_header_image'/>
    <h2 className='section_services_card_header_title'> policies can indirectly affect 
    </h2>
  </div>

  <div className='section_services_card_content'>
    <img src='/verified-check.svg'  alt='verified-check'  className='section_services_card_content_image'/>
    <p className='section_services_card_content_text'> 
    However, it’s important to ensure that both the
     front-end and back-end comply with Google’s 
    policies, as issues in the back-end can indirectly affect 
    </p>
  </div>


<a href='#about'  className='section_services_card_button'>Get Offer!</a>

  </div>











  <div className='section_services_card'>
  <div className='section_services_card_header'>
    <img src='/google-ads.svg' alt='google_ads_services' className='section_services_card_header_image'/>
    <h2 className='section_services_card_header_title'> policies can indirectly affect 
    </h2>
  </div>

  <div className='section_services_card_content'>
    <img src='/verified-check.svg'  alt='verified-check'  className='section_services_card_content_image'/>
    <p className='section_services_card_content_text'> 
    However, it’s important to ensure that both the
     front-end and back-end comply with Google’s 
    policies, as issues in the back-end can indirectly affect 
    </p>
  </div>

  <div className='section_services_card_content'>
    <img src='/verified-check.svg'  alt='verified-check'  className='section_services_card_content_image'/>
    <p className='section_services_card_content_text'> 
    However, it’s important to ensure that both the
     front-end and back-end comply with Google’s 
    policies, as issues in the back-end can indirectly affect 
    </p>
  </div>


  <div className='section_services_card_content'>
    <img src='/verified-check.svg'  alt='verified-check'  className='section_services_card_content_image'/>
    <p className='section_services_card_content_text'> 
    However, it’s important to ensure that both the
     front-end and back-end comply with Google’s 
    policies, as issues in the back-end can indirectly affect 
    </p>
  </div>


  </div>




</div>
</div>


<div className='section_why_me' id='why_me'>
<h2 className="section_about_title">Why me</h2>

<div className="section_about_section1">
  <div className="section_about_section1_who_ami">
    <h2 className="section_about_section1_who_ami_title"> Who am I ?</h2>
    <p className="section_about_section1_who_ami_text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
    </p>
  </div>
  <img src='/x.jfif' alt="image" className="section_about_section1_who_ami_image" />
</div>




<div className="section_about_section1">
<img src='/x.jfif' alt="image" className="section_about_section1_who_ami_image" />

  <div className="section_about_section1_who_ami">
    <h2 className="section_about_section1_who_ami_title"> Who am I ?</h2>
    <p className="section_about_section1_who_ami_text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
    </p>
  </div>
</div>







<div className="section_about_section1">
  <div className="section_about_section1_who_ami">
    <h2 className="section_about_section1_who_ami_title"> Who am I ?</h2>
    <p className="section_about_section1_who_ami_text">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
    </p>
  </div>
  <img src='/x.jfif' alt="image" className="section_about_section1_who_ami_image" />
</div>





</div> */}

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