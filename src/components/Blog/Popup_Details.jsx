import React, { useState } from 'react'
import Profile_Image_Icon from '../profile/Profile_Image_Icon';
import axios from "axios";

// kemoo
export default function Popup_Details({ name, bio, mentor_id, followed_by_user ,user_profile,username}) {

  const [isFollowing, setFollow] = useState(followed_by_user ? 'unfollow' : "follow")
  console.log('-----------------is follow ', followed_by_user);
  
  let getToken = localStorage.getItem("token");
  let getuser = JSON.parse(localStorage.getItem('user'))// {}
  const userId = getuser.user_id;

  const headers = {
    'Authorization': `Token ${getToken}`,
    'Content-Type': 'application/json',
  };

  
  const follow_data = {
    student: userId,
    following_mentor: mentor_id,
  };

  const toggleFollow = async () => {
    // if (e.target.innerHTML == 'Follow') {
    //   setFollow('unfollow')
    // }
    // else {
    //   setFollow('Follow')
    // }
    try {
      console.log("mentor", mentor_id , follow_data);
      const response = await axios.post("http://127.0.0.1:8000/follow/", follow_data, {
        headers,
      });

      console.log(
        "------------------Follow STATE true ---------",
        mentor_id,
        isFollowing
      );

      setFollow(response.data.data.isfollow ? "unfollow" : "follow");
      console.log(
        "------------------Follow STATE ---------",
        mentor_id,
        isFollowing
      );
      console.log(
        "------------------Follow STATE---------",
        mentor_id,
        response.data.data.isfollow
      );
    } catch (error) {
      console.error("------------------------------- error", error);
    }
  };
  // const toggleFollow = (e) => {
  //   if (e.target.innerHTML == 'Follow') {
  //     setFollow('unFollow')
  //   }
  //   else {
  //     setFollow('Follow')
  //   }
  // }
  return (
    <div class="card text-center">
      <div style={{ background: "#faf9f6" }}>
        <Profile_Image_Icon user_profile={user_profile} />
        <strong>{username}</strong>
      </div>
      <div class="card-body">
        <h5 class="card-title">{bio}</h5>
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        {
          mentor_id!=userId &&
          <button onClick={() => toggleFollow()} className='  follow_btn' style={{ width: '100px' }}>
          {isFollowing}
        </button>
        }
      

      </div>
    </div>
  )
}
