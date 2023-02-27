import React from "react";
export default function Rightside(props) {
  return (
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
      <div className="list-group list-group-flush">
        {props.blogRate.map(ele => {
          return (
            <a href="#" className="list-group-item list-group-item-action py-2 ripple">
              <span>{ele}</span>
            </a>
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
