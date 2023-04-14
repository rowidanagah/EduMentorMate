import { useState } from "react";
import BlogsSection from "../components/Blog/BlogsSection";
import ProfileBackGround from "../components/profile/MentorProfile/ProfileBackGround";
import ProfileBioCard from "../components/profile/MentorProfile/ProfileBioCard";
import { useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
const MentorProfile = () => {
  let getData = JSON.parse(localStorage.getItem("user"));
  console.log("-------------", getData);
  let ismentor = getData.usertype == "mentor" ? true : false;

  const [viewmentor, setmentor] = useState("");
  const [blogs, setblogs] = useState("");
  const [sessions, setsessions] = useState("");
  const params = useParams();
  const Cid = params.id;
  console.log("-------id", Cid);
  let getToken = localStorage.getItem("token");
  const headers = {
    Authorization: `Token ${getToken}`,
    "Content-Type": "application/json",
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/mentoractivity/${Cid}`, {
        headers,
      })
      .then((info) => {
        setmentor(info.data);
        setblogs(info.data.mentor_blog);
        setsessions(info.data.mentor_session);
      })
      .catch((err) => console.log(err));
  }, [blogs, sessions]);

  const [isFollowing, setFollow] = useState(
    viewmentor.followed_by_user ? "Following" : "Follow"
  );
  console.log("-----------------is follow ", viewmentor.followed_by_user);

  const follow_data = {
    student: getData.user_id,
    following_mentor: Cid,
  };

  const toggleFollow = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/follow/",
        follow_data,
        { headers }
      );
      setFollow(response.data.data.isfollow ? "following" : "follow");
    } catch (error) {
      console.error("------------------------------- error", error);
    }
  };

  useEffect(() => {}, [isFollowing , viewmentor.number_of_follows]);

  // console.log(viewmentor, "mentor");
  // function ScrollToTop() {
  //   const { pathname } = useLocation();
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [pathname]);

  //   return null;
  // }

  return (
    <div className="background">
      {/* <ScrollToTop /> */}
      <ProfileBackGround />
      <ProfileBioCard
        mentor_info={viewmentor}
        id={Cid}
        followState={isFollowing}
        handlar={toggleFollow}
        number_of_follows={viewmentor.number_of_follows}
        number_of_blogs={viewmentor.number_of_blogs}
        ismentor={ismentor}
        number_of_sessions={viewmentor.number_of_sessions}
      />
      {ismentor && (
        <BlogsSection
          user_id={getData.user_id}
          mentor_id={Cid}
          // mentor_blogs={viewmentor.mentor_blog}
          // mentor_sessions={viewmentor.mentor_session}
          mentor_blogs={blogs}
          mentor_sessions={sessions}
        />
      )}
    </div>
  );
};

export default MentorProfile;
