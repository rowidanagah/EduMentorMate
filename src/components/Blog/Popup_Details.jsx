import React, { useState } from 'react'
import Profile_Image_Icon from '../profile/Profile_Image_Icon';
import axios from "axios";

// kemoo
export default function Popup_Details({ name, bio, mentor_id, followed_by_user }) {
  const [isFollowing, setFollow] = useState(followed_by_user ? 'unfollow' : "follow")
  console.log('-----------------is follow ', followed_by_user);

  const headers = {
    'Authorization': 'Token 562aa9f6b2f54b6784d2dd3fc02f4ccee1c60d0b',
    'Content-Type': 'application/json',
  };
  const follow_data = {
    student: 4,
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
      console.log("mentor", mentor_id);
      const response = await axios.post("http://127.0.0.1:8000/follow/", follow_data, {
        headers,
      });

      console.log(
        "------------------Follow STATE ---------",
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
      <div style={{ background: "#ece8dd" }}>
        <Profile_Image_Icon />
        <strong>{name}</strong>
      </div>
      <div class="card-body">
        <h5 class="card-title">{bio}</h5>
        {/* <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> */}
        <button onClick={() => toggleFollow()} className='  follow_btn' style={{ width: '100px' }}>
          {isFollowing}
        </button>

      </div>
    </div>
  )
}
