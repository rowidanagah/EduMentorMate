import React from "react";
import TagsList from "../Category/Category_TagList";
import BlogHeader from "./BlogHeader";
import { Link, NavLink } from "react-router-dom";

export default function Blog({
  id,
  title,
  body,
  tags,
  reaction_title,
  commitCount,
  name,
  bio,
  created_at,
  user_profile,
  blog_cover,
}) {
  const capitalizedTitle = title.charAt(0).toLocaleUpperCase() + title.slice(1);

  return (
    <div style={{ height: "200" }} class="card mt-2  ">
      {blog_cover && <img src={blog_cover} className="cover_img card-img-top" />}

      <BlogHeader title={name} bio={bio} created_at={created_at} />
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
        <p class="card-text fs-6 ps-4 ">{body}</p>

        {/* <TagsList tags={[tags]} /> */}
        <div className="ps-3" >
          {tags.map(tag => (
            <Link className="HoverForLink text-dark" style={{ textDecoration: "none" }} key={tag}>#{tag}</Link>
          ))}
        </div>
      </div>
      <div class=" mb-3 d-flex justify-content-between ps-4">
        <div className="reaction-comment">
          <button type="button" class="btn btn-light me-1  ">
            <i class="fa-regular fa-heart me-2 "> </i>
            <small> {reaction_title}</small>
          </button>

          <button type="button" class="btn btn-light ">
            <i class="fa-regular fa-comment me-2"></i>
            <small> {commitCount}</small>
          </button>
        </div>
        <div className="post-time mt-1 ">
          <small class="text-muted pe-3">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
}
