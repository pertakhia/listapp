import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const  Single = ({title, info}) => {
    const [showinfo,setShowinfo] = useState(false);
    
    return (

        <article className='content'>
           <header >
               <h1 className="text">
                   {title}
               </h1>
               <button  className="btn" onClick = {()=> setShowinfo(!showinfo)}> 
               {
                   showinfo ? <AiOutlineMinus className="icon1"/> : <AiOutlinePlus className="icon"/>
               }
               </button>
           </header>
           {
                showinfo && <p>{info}</p>
           }
        </article>
    );
};

export default Single;