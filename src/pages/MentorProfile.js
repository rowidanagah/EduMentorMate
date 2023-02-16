import { useState } from "react";
import Blog from "../components/Blogs/blog";
import BlogsSection from "../components/Blogs/BlogsSection";
import ProfileBackGround from "../components/profile/ProfileBackGround";
import ProfileBioCard from "../components/profile/ProfileBioCard";

const MentorProfile = () => {
    const [follow, SetFollow] = useState('Following ');

    const toggleFollow = () => {
        const text =  follow == "Follow " ? "Following " : "Follow " ;
        SetFollow(text);
    }
   
    return (
        <div>
            <ProfileBackGround/>
            <ProfileBioCard followState={follow} handlar={toggleFollow}/>
            <Blog/>
        </div>
    );
}

export default MentorProfile;