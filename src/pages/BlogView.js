import { useParams } from "react-router-dom";
import Sidebar from "../components/sideBar/SideBar";
import SinglePost from "../components/singlePlog/singlePlog";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogView = () => {
    // const [isMounted, setIsMounted] = useState(false);
  const [blogDetails, setDetails] = useState("")
  const [comments, setComments] = useState('')
  const params = useParams()
  const Cid = params.id
  let getToken = localStorage.getItem("token");
  const headers = {
    'Authorization': `Token ${getToken}`,
    'Content-Type': 'application/json',
  };
  useEffect(() => {
    axios.get(`http://localhost:8000/api/blogsapi/${Cid}`, {
      headers
    })
    .then((response) => {
      setDetails(response.data);
      setComments(response.data.student_blog_comment);
      // TODO: Handle success
    })
      .catch((err) => console.log(err))
},[])


// console.log(blogDetails,'test')
// const [comments, setComments] = useState([])
  // const reversedComments = comments.slice().reverse();
  return (
    
    <div className="background">
    <div className="container">
        <div className="row">
        <div className="col-lg-9 ">
                <SinglePost

                  id={blogDetails.id}
                  liked_by_user={blogDetails.liked_by_user}
                  key={blogDetails.id}
                  commitCount={blogDetails.number_of_comments}
                  comments_details={comments}
                  // comment_state={setComments}
                  reaction_title="Reaction"
                  title={blogDetails.title}
                  body={blogDetails.content}
                  tags={blogDetails.tags}
                  // name={blogDetails.mentor.name}
                  // bio={blogDetails.mentor.bio}
                  // user_profile={blogDetails.mentor.user_profile}
                  blogDetails_cover={blogDetails.cover_image}
                  time_since_created={blogDetails.time_since_created}
                  mentor={blogDetails.mentor}
                  created_at={blogDetails.created_at}
                  number_of_likes={blogDetails.number_of_likes}
                  // followed_by_user={blogDetails.mentor.followed_by_user}
                />
        </div>
        <div className="col-lg-3">
        <Sidebar mentor={blogDetails.mentor}></Sidebar>
         </div>
         
         
        </div>
      
    </div>
    </div>
  );
};

export default BlogView;
