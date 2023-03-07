import { useState } from "react";
import BlogsSection from "../components/Blog/BlogsSection";
import ProfileBackGround from "../components/profile/MentorProfile/ProfileBackGround";
import ProfileBioCard from "../components/profile/MentorProfile/ProfileBioCard";

const MentorProfile = () => {
    let getData = JSON.parse(localStorage.getItem("typeuser"));
    console.log("-------------", getData)
    let ismentor = getData == "mentor" ? true : false;
    
    const [follow, SetFollow] = useState('Following ');

    const toggleFollow = () => {
        const text =  follow == "Follow " ? "Following " : "Follow " ;
        SetFollow(text);
    }
   
    return (
        <div className="background">
            <ProfileBackGround/>
            <ProfileBioCard followState={follow} handlar={toggleFollow}/>
            {ismentor && <BlogsSection/>}
           
        </div>
    );
}

export default MentorProfile;