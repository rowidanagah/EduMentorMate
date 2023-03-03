import { useState } from "react";
import BlogsSection from "../components/Blog/BlogsSection";
import ProfileBackGround from "../components/profile/MentorProfile/ProfileBackGround";
import ProfileBioCard from "../components/profile/MentorProfile/ProfileBioCard";

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