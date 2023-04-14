import BlogHeader from "../Blog/BlogHeader";
import Blog from "../Blog/Blog";
import { Link } from "react-router-dom";

import "@github/markdown-toolbar-element";
import { Remarkable } from "remarkable";
import axios from "axios";
import { useState } from "react";
const md = new Remarkable();


const UserBlogs = ({
  title,
  user_id,
  body,
  mentor_id,
  time_since_created,
  created_at,
  number_of_likes,
  commitCount,
  id,
}) => {
  const[isDeleteing,setIsDeleting]= useState(null);
  const capitalizedTitle = title.charAt(0).toLocaleUpperCase() + title.slice(1);
  // let userData= JSON.parse(localStorage.getItem('user'))// {}
  let getToken = localStorage.getItem("token");
    const headers = {
      Authorization: `Token ${getToken}`,
      "Content-Type": "application/json",
    };
    const delete_session =(id) =>{
        axios
          .delete(`http://localhost:8000/api/blogsapi/${id}`, {
            headers,
          })
          .then((info) => {
            console.log(info)
          })
          .catch((err) => console.log(err));
          setIsDeleting(false)
    }

  return (
    <div className="mt-4  ">
      {/*<img class="card-img-top blog_img" src="https://res.cloudinary.com/practicaldev/image/fetch/s--nZI14gr9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/786tq34bio3szgfhbbyp.png" alt="Card image cap"></img>
       */}
      <figure
        className="bg-white rounded blogCaption "
        style={{ width: "100%" ,wordWrap:'break-word'}}
      >
        <div style={{position:"relative"}}>
        {isDeleteing ===id && (
              <div style={{position:"absolute" ,width:'99.9%',height:'100%',backgroundColor:"#b9e5eb"}} className=" d-flex justify-content-center align-items-center rounded-2">
              <div className="">
              <p >Are you sure you want to delete this blog ?</p>
          <div className="d-flex justify-content-center align-items-center">
          <button onClick={() =>delete_session(id)} className=" btn btn-danger" >Delete</button>
          <button className="btn btn-light ms-2" onClick={() => setIsDeleting(false)}>Cancel</button>
          </div>

              </div>
            </div>
                )}


          <blockquote className="blockquote pb-2 p-4" >
          <div  className=" d-flex justify-content-between text-end align-items-start ">
            <Link
              to={`/blog/${id}`}
              style={{ textDecoration: "none"}}
              
              className="fs-4 text-primary p-0 text-dark HoverForLink w-75 text-start"
            >
              {capitalizedTitle}
            </Link>
            {mentor_id == user_id && (
        
                <button className="btn " onClick={() =>setIsDeleting(id)}>
                  <i class="text-end fa-solid fa-x text-danger"></i>
                </button>
             
            )}
             </div>

            {/* <p className="p-2">
                       <div dangerouslySetInnerHTML={{ __html: md.render(body) }}></div>
                    </p> */}
          </blockquote>

          <div class=" mb-3 d-flex justify-content-between ps-4">
            <div className="reaction-comment">
              <i className={`fa-solid fa-heart me-2 text-dark`}> </i>
              <small className=" me-4"> {number_of_likes} </small>

              <i class="fa-regular fa-comment me-2"></i>
              <small> {commitCount}</small>
            </div>
            <div className="post-time mt-1 "></div>
          </div>

          <figcaption className="blockquote-footer mb-0 font-italic mt-2 ps-3 pb-2">
            {created_at}
            <small class="text-muted pe-3 d-flex justify-content-end">
              Last updated {time_since_created && time_since_created}
            </small>
          </figcaption>
        </div>
      </figure>
    </div>
  );
};

export default UserBlogs;
