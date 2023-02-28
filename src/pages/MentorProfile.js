import { useState } from "react";
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
        <div className="background">
            <ProfileBackGround/>
            <ProfileBioCard followState={follow} handlar={toggleFollow}/>
            <BlogsSection/>
        </div>
    );
}

export default MentorProfile;