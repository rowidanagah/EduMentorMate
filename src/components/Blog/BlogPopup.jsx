import React, { useState } from 'react'
import Popup_Details from './Popup_Details';
export default function HoverPopup({name,text}) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="position-relative"
    onMouseEnter={() => setShowPopup(true)}
    onMouseLeave={() => setShowPopup(false)}
  >
     <h5 className='m-0'>{name}</h5>
     <small>{text}</small>
    {showPopup && <div className="position-absolute pop " style={{width:"320px" ,zIndex:'5'}}> <Popup_Details name={name}/>
    </div>}
  </div>
  )
}
