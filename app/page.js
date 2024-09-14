'use client'
import React, { useState , useEffect } from 'react';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
// import { RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import Contact from './contact/contact';

import Faq from './faq/faq';
function App(){
  const images = [
    'x.jfif',
   'logo.png'

  ];
  const [currentIndex, setCurrentIndex] = useState(0); 
  const [isFixed, setIsFixed] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }; 
  return(
   <div className="profile">
    <div className="section_home">
    {/* <div className='navbar_container_phone'>
    <img src='/logo.svg' alt='logo' className='navbar_image_phone'/>




<div className={`menu-bar ${isOpen ? 'open' : ''}`}>
<button className="menu-btn" onClick={toggleMenu}>
  {isOpen ? <RiCloseLine /> : <RiMenu3Line />}
</button>
    
</div>



{
    isOpen && (
      <div   className='section_navbar_links'>
          <a href="#about" className="section_home_navbar_link_navbar ">about me</a>
          <a href="#services" className="section_home_navbar_link_navbar ">services</a>
          <a href="#why_me" className="section_home_navbar_link_navbar ">why me?</a>

          <a href="#stories" className="section_home_navbar_link_navbar ">success stories</a>
          <a href="#contact" className="section_home_navbar_link_navbar ">contact</a>
          <a href="#FAQs" className="section_home_navbar_link_navbar ">FAQs</a>

         
          
      </div>
    )
}


</div> */}


      <div  className={` section_home_title  ${isFixed ? 'navfixed' : ''}`}>
        <h1 className="section_home_title_part1">MEDIA</h1>
        <img src="/logo.svg" alt="logo"className="section_home_title_part2_image"/>
        <h1 className="section_home_title_part3">BUYER</h1>
      </div>


      <div  className='section_home_title_navbar'>
        <h1 className="section_home_title_part1_navbar">MEDIA</h1>
        <img src="/logo.svg" alt="logo"className="section_home_title_part2_image_navbar"/>
        <h1 className="section_home_title_part3_navbar">BUYER</h1>
      </div>









      <div   className={`section_home_navbar  ${isFixed ? 'fixed' : ''}`}>
          <a href="#about" className="section_home_navbar_link">about me</a>
          <a href="#services" className="section_home_navbar_link">services</a>
          <a href="#why_me" className="section_home_navbar_link">why me?</a>
          <img src='/logo.svg' alt='logo'  className={`logohiiden  ${isFixed ? 'logofixed' : ''}`}/>

          <a href="#stories" className="section_home_navbar_link">success stories</a>
          <a href="#contact" className="section_home_navbar_link">contact</a>
          <a href="#FAQs" className="section_home_navbar_link">FAQs</a>

          
      </div>



      <div className="section_home_content">
      <div className="section_home_content_text">
        <div className="section_home_content_p">
        <p className="section_home_content_p1">If You Want Quick Results</p>
        <p className="section_home_content_p2">Go Away !!</p>
        <p className="section_home_content_p3">If You Want Big Results</p>
        <p className="section_home_content_p4">Reach Me !!</p>

        </div>
      <button className="section_home_button" href="#contact">contact me</button>
      </div>
        <img src='/persone.jpg' alt="portfolio_image"   className="section_home_content_img"  />
      </div>
     
    </div>



<div className='section_about' id="about">
  <h2 className="section_about_title">about me</h2>

  <div className="section_about_section1">
  <img src='/whoami.svg' alt="image" className="section_about_section1_who_ami_image1" />

    <div className="section_about_section1_who_ami">
      <h2 className="section_about_section1_who_ami_title"> Who am I ?</h2>
      <p className="section_about_section1_who_ami_text">
      My name is Saad Elbouazaoui, a results-driven media
       buyer specializing in Google Ads and Facebook Ads.
        With over one year of experience and a Bac+3 in Economy and 
        Management, I have successfully managed over $400,000 in ad spend across
         both platforms, consistently delivering a return on investment (ROI) of
          over 2%. My strategic approach and deep understanding of digital advertising
           have enabled me to help clients achieve their business goals, whether it’s driving conversions, 
      increasing brand awareness, or maximizing ad spend efficiency.
      Ready to take your campaigns to the next level? Let’s work together to unlock your business’s full potential.
      </p>
    </div>
    <img src='/whoami.svg' alt="image" className="section_about_section1_who_ami_image" />
  </div>




<div className='section_about_section2'>
{/* <h2 className='section_about_section2_title_phone'>Certifications</h2> */}

  <div className='section_about_section2_switch'>

<FaLessThan  className='section_about_section2_plus_minus' onClick={nextImage}/>
<img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`}  className='section_about_section2_image'/>
<FaGreaterThan className='section_about_section2_plus_minus'  onClick={prevImage} />
</div>


<div className='section_about_section2_content'>
<h2 className='section_about_section2_content_title'>Certifications</h2>
<p className='section_about_section2_content_text'>
I am committed to continuous learning and professional growth, which is reflected in my diverse certifications:
</p>
<li className='section_about_section2_content_link' onClick={() => setCurrentIndex(1)}>Digital Marketing Fundamentals-Google</li>
<li className='section_about_section2_content_link'onClick={() => setCurrentIndex(0)}>Google Analytics - Google</li>
<li className='section_about_section2_content_link' onClick={() => setCurrentIndex(1)}>Google Ads - Measurements - Google</li>
<li className='section_about_section2_content_link'onClick={() => setCurrentIndex(0)}>SEO Fundamentals - Semrush Academy</li>
<li className='section_about_section2_content_link' onClick={() => setCurrentIndex(1)}>Technical SEO - Semrush Academy</li>
<li className='section_about_section2_content_link'onClick={() => setCurrentIndex(0)}>Bachelor's Degree in Economy and Management</li>



</div>



</div>




</div>








<div className='section_services' id='services'>
<h2 className="section_services_title">Services</h2>
<div className='section_services_cards'>
<div className='section_services_card'>
  <div className='section_services_card_header'>
    <img src='/google-ads.svg' alt='google_ads_services' className='section_services_card_header_image'/>
    <h2 className='section_services_card_header_title'> Google Ads Management</h2>
  </div>

  <div className='section_services_card_content'>
    <img src='/verified-check.svg'  alt='verified-check'  className='section_services_card_content_image'/>
    <p className='section_services_card_content_text'> 
    Campaign Setup: Creation and configuration of search and display campaigns to meet your business goals.
    </p>

  </div>

  <div className='section_services_card_content'>
    <img src='/verified-check.svg'  alt='verified-check'  className='section_services_card_content_image'/>
    <p className='section_services_card_content_text'> 
    Keyword Research: In-depth research to identify and target high-performing keywords.
        </p>

  </div>
  <div className='section_services_card_content'>
    <img src='/verified-check.svg'  alt='verified-check'  className='section_services_card_content_image'/>
    <p className='section_services_card_content_text'> 
    Ad Copywriting: Crafting compelling ad copy to attract clicks and drive conversions.    </p>

  </div>
  <div className='section_services_card_content'>
    <img src='/verified-check.svg'  alt='verified-check'  className='section_services_card_content_image'/>
    <p className='section_services_card_content_text'> 
    Campaign Setup: Creation and configuration of search and display campaigns to meet your business goals.
    </p>

  </div>
  <div className='section_services_card_content'>
    <img src='/verified-check.svg'  alt='verified-check'  className='section_services_card_content_image'/>
    <p className='section_services_card_content_text'> 
    Performance Monitoring: Continuous analysis and adjustment of campaigns to improve results and achieve a positive ROI.
        </p>

  </div>

<a href='#contact'  className='section_services_card_button'>Get Offer!</a>

  </div>


  <div className='section_services_card'>
  <div className='section_services_card_header'>
    <img src='/google-ads.svg' alt='google_ads_services' className='section_services_card_header_image'/>
    <h2 className='section_services_card_header_title'> Google Ads Management</h2>
  </div>

  <div className='section_services_card_content'>
    <img src='/verified-check.svg'  alt='verified-check'  className='section_services_card_content_image'/>
    <p className='section_services_card_content_text'> 
      Campaign Strategy: Development of tailored ad strategies to align with your business goals.
    </p>
  </div>

  <div className='section_services_card_content'>
    <img src='/verified-check.svg'  alt='verified-check'  className='section_services_card_content_image'/>
    <p className='section_services_card_content_text'> 
      Audience Targeting: Precise targeting to reach the ideal audience based on demographics, interests, and behaviors.
    </p>
  </div>

  <div className='section_services_card_content'>
    <img src='/verified-check.svg'  alt='verified-check'  className='section_services_card_content_image'/>
    <p className='section_services_card_content_text'> 
      Ad Management: Handling ad placements, budgeting, and bidding to ensure optimal performance.
    </p>
  </div>

  <div className='section_services_card_content'>
    <img src='/verified-check.svg'  alt='verified-check'  className='section_services_card_content_image'/>
    <p className='section_services_card_content_text'> 
      Performance Analysis: Monitoring and analyzing campaign data to optimize results and maximize ROI.
    </p>
  </div>

  <div className='section_services_card_content'>
    <img src='/verified-check.svg'  alt='verified-check'  className='section_services_card_content_image'/>
    <p className='section_services_card_content_text'> 
      A/B Testing: Testing different ad variations to determine the most effective approach.
    </p>
  </div>


<a href='#contact'  className='section_services_card_button'>Get Offer!</a>

  </div>





</div>
</div>






<div className='section_why_me' id='why_me'>
<h2 className="section_about_title">Why me</h2>

<div className="section_about_section1">
<img src='/whyme1.svg' alt="image" className="section_about_section1_who_ami_image1  why_me_image" />

  <div className="section_about_section1_who_ami">
    <h2 className="section_about_section1_who_ami_title  ">Proven Expertise</h2>
    <p className="section_about_section1_who_ami_text section_why_me_text">
    With over $200,000 in ad spend managed across Google Ads and Facebook Ads, 
    I’ve consistently delivered an ROI of over 2%. My experience is backed by
     certifications in Digital Marketing, Google Analytics, SEO Fundamentals,
      and Technical SEO from Google and Semrush, ensuring that I’m always equipped 
    
    with the latest industry knowledge to drive successful campaigns.
    </p>
  </div>
  <img src='/whyme1.svg' alt="image" className="section_about_section1_who_ami_image" />

</div>




<div className="section_about_section1">
<img src='/whyme2.svg' alt="image" className="section_about_section1_who_ami_image1  why_me_image" />
<img src='/whyme2.svg' alt="image" className="section_about_section1_who_ami_image" />

  <div className="section_about_section1_who_ami">
    <h2 className="section_about_section1_who_ami_title  section_why_me_title">Strategic and Analytical Approach</h2>
    <p className="section_about_section1_who_ami_text  section_why_me_text">
    My work is rooted in a deep understanding of both data and strategy. 
    I meticulously analyze performance metrics to make data-driven decisions,
     optimizing every aspect of your campaign for maximum impact. I also develop 
     comprehensive strategies that align with your business objectives, ensuring that your ads not
     only reach the right audience but also drive significant results.
    </p>
  </div>


</div>







<div className="section_about_section1">
<img src='/whyme3.svg' alt="image" className="section_about_section1_who_ami_image1  why_me_image" />

  <div className="section_about_section1_who_ami">
    <h2 className="section_about_section1_who_ami_title  section_why_me_title  "> Creative Problem Solving</h2>
    <p className="section_about_section1_who_ami_text   section_why_me_text">
    Creativity is key to standing out in the crowded digital landscape.
     I bring a broad marketing vision that helps guide the creative process,
      ensuring that every campaign features compelling ad copy and engaging visuals. 
      My approach focuses on finding innovative solutions to complex challenges, 
    making sure your campaigns capture attention and resonate with your target audience.
    </p>
  </div>
  <img src='/whyme3.svg' alt="image" className="section_about_section1_who_ami_image" />
</div>





</div>

<div className='section_stories' id='stories'>
<h2 className="section_stories_title">Success Stories</h2>

<div className='section_stories_section1'>
<img src='/whyme3.svg'   className='section_stories_section1_image'/>
<div className='section_stories_section1_content'>
  <div className='section_stories_section1_content_mission'>
  <h2 className='section_stories_section1_content_mission_title' >Mission</h2>
<p className='section_stories_section1_content_mission_text'>
As the Marketing Manager for Webhived, an agency that collaborates with a network 
of freelancers, my mission was to enhance the agency’s online presence. I managed
 social media accounts and executed paid advertising campaigns across Google and Facebook to drive
 visibility and engagement.
</p>
  </div>





  <div className='section_stories_section1_content_results'>
  <h2 className='section_stories_section1_content_results_title' >Result</h2>
<p className='section_stories_section1_content_results_text'>
In just three months, I effectively managed $50,000 in ad spend,
 achieving a 2.03% return on ad spend (ROAS). The campaigns generated over 500 leads, 
 demonstrating the successful impact of my marketing strategies.

</p>
<li className='section_stories_section1_content_results_text_link'>Ad Spend: $50,000</li>
<li className='section_stories_section1_content_results_text_link'>ROAS: 2.03%</li>
<li className='section_stories_section1_content_results_text_link'>Leads Generated: Over 500</li>



  </div>





</div>







</div>




<div className='section_stories_section1  section_stories_section2 '>
<img src='/whyme3.svg'   className='section_stories_section1_image'/>
<div className='section_stories_section1_content'>
  <div className='section_stories_section1_content_mission'>
  <h2 className='section_stories_section1_content_mission_title  section_stories_section2_mission_title' >Mission</h2>
<p className='section_stories_section1_content_mission_text  section_stories_mission_section2_text'>
At Afriquick, an e-commerce business operating in South Africa,
 Zambia, Tanzania, and other countries,
 I was responsible for managing Facebook Ads across multiple 
 countries and languages, including French, English, and local languages.
 My role also included overseeing the creation of ad copies and
  creatives to effectively target diverse audiences..
</p>
  </div>





  <div className='section_stories_section1_content_results'>
  <h2 className='section_stories_section1_content_results_title  section_stories_results_section2_title' >Result</h2>
<p className='section_stories_section1_content_results_text section_stories_results_section2_text'>
With over $100,000 in ad spend, I achieved exceptional results,
 generating hundreds of thousands of leads and exceeding a 2.5%
  return on ad spend (ROAS). These outcomes reflect the 
success of the tailored advertising strategies and
 creative approaches implemented.

</p>
<li className='section_stories_section1_content_results_text_link section_stories_results_section2_link'>Ad Spend: $100,000+</li>
<li className='section_stories_section1_content_results_text_link section_stories_results_section2_link'>ROAS: Over 2.5%</li>
<li className='section_stories_section1_content_results_text_link section_stories_results_section2_link'>Leads Generated: Hundreds of thousands</li>



  </div>





</div>







</div>



<div className='section_stories_section1'>
<img src='/whyme3.svg'   className='section_stories_section1_image'/>
<div className='section_stories_section1_content'>
  <div className='section_stories_section1_content_mission'>
  <h2 className='section_stories_section1_content_mission_title' >Mission</h2>
<p className='section_stories_section1_content_mission_text'>
At Sitfile, an online SaaS platform offering file conversion,
 compression, and image background removal, I was responsible for creating, managing,
  and analyzing Google Ads campaigns. My SEO expertise played a crucial role in enhancing
   campaign performance by minimizing CPC and boosting ROAS and conversion rates. Additionally,
    I contributed to shaping the online strategy, leveraging my broad marketing knowledge.

</p>
  </div>





  <div className='section_stories_section1_content_results'>
  <h2 className='section_stories_section1_content_results_title' >Result</h2>
<p className='section_stories_section1_content_results_text'>
Through strategic management and optimization, 
I effectively oversaw over $60,000 in ad spend, achieving a 2.7% return on ad spend (ROAS). 
This approach resulted in thousands of new users, reflecting the success 
of the improved advertising and strategy efforts.


</p>
<li className='section_stories_section1_content_results_text_link'>Ad Spend: $60,000+</li>
<li className='section_stories_section1_content_results_text_link'>ROAS: 2.7%</li>
<li className='section_stories_section1_content_results_text_link'>New Users: Thousands</li>



  </div>





</div>







</div>




</div>


<Contact/>
<Faq/>




   </div>
  )
}
   export default App
