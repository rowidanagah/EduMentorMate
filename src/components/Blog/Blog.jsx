import React from "react";
import TagsList from "../Category/Category_TagList";
import BlogHeader from "./BlogHeader";

export default function Blog(props) {
  return (
    <div  class="card mt-2  ">
      <BlogHeader/>
      <div class="card-body ">
        <p class="card-text fs-6 ps-3">
          {props.title}
        </p>
        <TagsList tags={["react", "python", "flask"]} />
      </div>
      <div class=" mb-3 d-flex justify-content-between ps-4">
        <div className="reaction-comment">
          <button type="button" class="btn btn-light me-1  ">
            <i class="fa-regular fa-heart me-2 " > </i>
            <small> {props.reaction_title}</small>
          </button>

          <button type="button" class="btn btn-light ">
            <i class="fa-regular fa-comment me-2"></i>
            <small> {props.comment_title}</small>
          </button>

        </div>
        <div className="post-time mt-1 ">
          <small class="text-muted pe-2">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  );
}
