"use client"

import React, { useEffect,useState } from 'react';
// import { FaFacebook } from 'react-icons/fa';
import './faq.css'
import { MdExpandMore, MdExpandLess } from 'react-icons/md';
// import { Footer ,Navbar} from '../components'
import Link from 'next/link';
// import loading from '../loading';
import Head from 'next/head';

function Faq() {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      // Simulate a 3-second delay before setting isLoading to false
      const timer = setTimeout(() => {
        setIsLoading(false);
      });
  
      return () => {
        clearTimeout(timer);
      };
    }, []);

    const [select , setSlect]= useState(false)
    const toggle =(i)=>{
        if(select === i){
          return  setSlect(false)
        }
        
       return    setSlect(i)
        
    }
    const data = [
        {
            "question":'question1' ,
            "answer":'answer1'
        },  {
          "question":'question1' ,
          "answer":'answer1'
      }, 
      {
        "question":'question1' ,
        "answer":'answer1'
    }, 
    {
      "question":'question1' ,
      "answer":'answer1'
  }, 
  {
    "question":'question1' ,
    "answer":'answer1'
}, 

      
         ]
  return (

 


            
      <div className='faq' id='FAQs'>



<div className="according-title">FAQs</div>

<div className="according">
{
data.map((item ,i ) =>{
    return(

<div className="item">
<div className="title-item" onClick={()=>toggle(i)}>
<div className="title-faq">{item.question}</div>
<div className="icons-item"> {select === i ? <MdExpandLess/> : <MdExpandMore/>}</div>
</div>
<div className={select === i ? 'show':'item-content'}>{item.answer}</div>
</div>
)
})
}

</div>
</div>
   
   

  )
 

}

export default Faq