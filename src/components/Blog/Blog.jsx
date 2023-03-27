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
}) {
  return (
    <div style={{height:'200'}} class="card mt-2  ">
      <BlogHeader />
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
          <Link to={`/blog/${id}`} style={{textDecoration:'none'}} className="fs-4 text-primary p-0 text-dark HoverForLink">{title}</Link>
        </div>
        <p class="card-text fs-6 ps-3">{body}</p>
        <TagsList tags={[tags]} />
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
          <small class="text-muted pe-2">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
}
