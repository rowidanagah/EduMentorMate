import React, { useState } from 'react'
import Popup_Details from './Popup_Details';
export default function HoverPopup({name}) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="position-relative"
    onMouseEnter={() => setShowPopup(true)}
    onMouseLeave={() => setShowPopup(false)}
  >
     <strong>{name}</strong>
    {showPopup && <div className="position-absolute pop w-75"> <Popup_Details name={name}/>
    </div>}
  </div>
  )
}
