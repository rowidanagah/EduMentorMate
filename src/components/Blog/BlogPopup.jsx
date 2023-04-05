import React, { useState } from 'react'
import Popup_Details from './Popup_Details';
import { Link } from 'react-router-dom';

export default function HoverPopup({ name, created_at, bio, mentor_id, followed_by_user,user_profile }) {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className="position-relative"
      onMouseEnter={() => setShowPopup(true)}
      onMouseLeave={() => setShowPopup(false)}
    >
      <Link className="HoverForLink text-dark" style={{ textDecoration: "none" }} to={`/mentorProfile/${mentor_id}`}><strong className='m-0'>{name}</strong></Link> <br />

      <small className='ms-1'>{created_at}</small>
      {showPopup && <div className="position-absolute pop " style={{ width: "320px", zIndex: '5' }}>

        <Popup_Details name={name} bio={bio} mentor_id={mentor_id} followed_by_user={followed_by_user}  user_profile={user_profile}/>
      </div>}
    </div>
  )
}
