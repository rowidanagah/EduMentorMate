import React from "react";
import BlogHeader from "./Blogs/BlogHeader";
export default function Rightside(props) {
  return (
    <nav
      id="sidebarMenu"
      className="collapse d-lg-block sidebar collapse"
      style={{ width: "30rem" }}
    >
      <div className="list-group list-group-flush">
        <h2 style={{ textAlign: "center" }}>most trend blogs </h2>
        {props.blogRate.map((ele) => {
          return (
            <div>
              <a
                href="#"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <BlogHeader
                  title={ele}
                  img={"https://picsum.photos/200/300"}
                ></BlogHeader>
                {/* <span>{ele}<  /span> */}
              </a>
            </div>
          );
        })}

        {/* <a href="#"  className="list-group-item list-group-item-action py-2 ripple">
        <span>Webiste traffic</span>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-2 ripple">
        <span>Analytics</span></a>
      <a href="#" className="list-group-item list-group-item-action py-2 ripple">
        <span>SEO</span>
      </a>
      <a href="#" className="list-group-item list-group-item-action py-2 ripple">
        <span>Orders</span></a
      >
      <a href="#" className="list-group-item list-group-item-action py-2 ripple">
        <span>International</span></a
      >
      <a href="#" className="list-group-item list-group-item-action py-2 ripple"
        ><span>Partners</span></a
      >
      <a href="#" className="list-group-item list-group-item-action py-2 ripple"
        ><span>Calendar</span></a
      >
      <a href="#" className="list-group-item list-group-item-action py-2 ripple"
        ><span>Users</span></a
      >
      <a href="#" className="list-group-item list-group-item-action py-2 ripple"
        ><span>Sales</span></a
      > */}
      </div>
    </nav>
  );
}
