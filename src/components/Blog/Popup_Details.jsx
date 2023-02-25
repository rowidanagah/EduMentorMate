import React, { useState } from 'react'
import Profile_Image_Icon from '../Profile_Image_Icon'
// kemoo
export default function Popup_Details({name}) {
    const[isFollowing,setFollow]=useState('Follow')

    
    const toggleFollow=(e)=>{
        if(e.target.innerHTML=='Follow'){
            setFollow('unFollow')
        }
        else{
            setFollow('Follow')
        }
    } 
  return (
    <div class="card text-center">
    <div  style={{background:"#ece8dd"}}>
    <Profile_Image_Icon/>
    <strong>{name}</strong>
    </div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <button onClick={(e) => toggleFollow(e)}className='btn btn-primary'>
        {isFollowing}
      </button>

    </div>
  </div>
  )
}
