import React from "react";
import TagsList from "../Category/Category_TagList";
import BlogHeader from "./BlogHeader";

export default function Blog(props) {
  return (
    <div class="card mt-3 ">
      <BlogHeader />
      <div class="card-body ">
        <p class="card-text fs-4 ps-3">
          {props.title}
        </p>
        <TagsList tags={["react", "python", "flask"]} />
      </div>
      <div class="card-footer d-flex justify-content-between ps-4">
        <div className="reaction-comment">
          <button type="button" class="btn btn-light ">
            <i class="fa-solid fa-heart"></i>
            <small> {props.reaction_title}</small>
          </button>

          <button type="button" className="btn btn-light">
            <i class="fa-regular fa-comment"></i>
            <small> {props.comment_title}</small>
          </button>
        </div>
        <div className="post-time mt-1">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
}
