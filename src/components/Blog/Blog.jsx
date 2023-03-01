import React from "react";
import TagsList from "../Category/Category_TagList";
import BlogHeader from "./BlogHeader";
import { NavLink } from "react-router-dom";

export default function Blog({
  title,
  body,
  tags,
  reaction_title,
  commitCount,
}) {
  return (
    <div class="card mt-2  ">
      <BlogHeader />
      <div class="card-body ">
        <div
          className="blog title"
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            fontFamily: "ui-sans-serif",
            paddingLeft: "22px",
            marginBottom: "28px",
            textDecoration: "underline",
          }}
        >
          <NavLink to="/blog/10">{title}</NavLink>
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
