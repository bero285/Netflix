import React, { useState } from 'react';

import '../styles/infobox.css';
interface InfoboxProps {
    headText: string;
    Text: string;
   
  }

function Infobox({headText,Text}: InfoboxProps) {
    const[appear,setAppear] = useState<boolean>(false)
    
    function makeAppear(){
     
        setAppear(!appear)
        
    }

  return (
    <div className="info-container">
        <button onClick={makeAppear} className='info-text'><h1 className='info-head-text'>{headText}</h1>
        <button className='plus-button'><h1 className='plus'>{!appear ? '+' : 'x'} </h1></button>
        </button>
         {appear ? 
      
         <div className='info-bottom-text' dangerouslySetInnerHTML={{__html: Text}}></div> : null}
         {/* <div className='info-bottom-text' ><h1>{Text}</h1></div> */}
    </div>
  );
}

export default Infobox;
