import React, { useEffect, useState } from "react";
import TagsList from "../Category/Category_TagList";
import BlogHeader from "./BlogHeader";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";
import "@github/markdown-toolbar-element";
import { Remarkable } from "remarkable";

const md = new Remarkable();

export default function Blog({ id, title, body, tags, reaction_title, commitCount, name, number_of_likes, username,
  bio, time_since_created, created_at, blog_cover, liked_by_user, mentor_id, followed_by_user, user_profile }) {

  const capitalizedTitle = title.charAt(0).toLocaleUpperCase() + title.slice(1);

  const [like, setToggleLIke] = useState(liked_by_user ? 'solid' : 'regular')
  let getToken = localStorage.getItem("token");

  const headers = {
    'Authorization': `Token ${getToken}`,
    'Content-Type': 'application/json',
  };

  // =========================(get userid from locastorage)======================
  let getuser = JSON.parse(localStorage.getItem('user'))// {}
  const userId = getuser.user_id;

  // ========================================================================....
  // getting user fro his token 
  const data = {
    user: userId,
    blog: id
  };

  const toggle_like = async () => {
    try {
      console.log(data, headers)
      const response = await axios.post('http://127.0.0.1:8000/like/', data, { headers });

      console.log('------------------LIKE STATE blog---------', id, like)

      setToggleLIke(response.data.data.isLike ? 'solid' : 'regular')
      console.log('------------------LIKE STATE blog---------', id, like)
      console.log('------------------LIKE STATE---------', id, response.data.data.isLike)

    } catch (error) {
      console.error('-------------------------------rowida error', error);
    }
  }

  useEffect(() => {

  }, [number_of_likes, time_since_created, like, commitCount]);

  return (
    <div style={{ height: "200" }} class="card mt-2  ">
      {blog_cover && <img src={blog_cover} className="cover_img card-img-top" />}

      <BlogHeader title={name} bio={bio} username={username} name={name}
      created_at={created_at} followed_by_user={followed_by_user} mentor_id={mentor_id} user_profile={user_profile} />
      <div class="card-body ">
        <div
          className="blog title ps-4"
        // style={{
        //   fontWeight: "bold",
        //   fontSize: "1.5rem",
        //   fontFamily: "ui-sans-serif",
        //   paddingLeft: "22px",
        //   marginBottom: "28px",
        //   color: "#496793",
        //   // textDecoration: "underline",
        // }}
        >
          <Link
            to={`/blog/${id}`}
            style={{ textDecoration: "none" }}
            className="fs-4 text-primary p-0 text-dark HoverForLink"
          >
            {capitalizedTitle}
          </Link>
        </div>
        <p class="card-text fs-6 ps-4 ">
          <div
            dangerouslySetInnerHTML={{ __html: md.render(body) }}
          ></div>

        </p>

        {/* <TagsList tags={[tags]} /> */}
        <div className="ps-3" >
          {tags.map(tag => (
            <Link className="HoverForLink text-dark" style={{ textDecoration: "none" }} key={tag}>#{tag}</Link>
          ))}
        </div>
      </div>
      <div class=" mb-3 d-flex justify-content-between ps-4">
        <div className="reaction-comment">
          <button type="button" class="btn btn-light me-1 " onClick={toggle_like}>
            <i class={`fa-${like} fa-heart me-2`}> </i>
            <small> {number_of_likes}</small>
          </button>

          <Link to={`/blog/${id}`} >
            <button type="button" class="btn btn-light ">
              <i class="fa-regular fa-comment me-2"></i>
              <small> {commitCount}</small>
            </button>
          </Link>
        </div>
        <div className="post-time mt-1 ">

          <small class="text-muted pe-3">Last updated {time_since_created && time_since_created}</small>
        </div>
      </div>
    </div>
  );
}
