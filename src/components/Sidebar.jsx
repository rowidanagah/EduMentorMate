import React from 'react'

export default function Sidebar() {
  return(
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse bg-white">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
        <a
          href="#"
          style={{backgroundColor:"#172e59"}}
          className="list-group-item list-group-item-action py-2 ripple active" 
          aria-current="true"
        >
          <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Main Category</span>
        </a>
        <a href="#"  className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></a
        >
        <a href="#" className="list-group-item list-group-item-action py-2 ripple">
          <i className="fas fa-chart-pie fa-fw me-3"></i><span>SEO</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></a
        >
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-globe fa-fw me-3"></i><span>International</span></a
        >
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-building fa-fw me-3"></i><span>Partners</span></a
        >
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></a
        >
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-users fa-fw me-3"></i><span>Users</span></a
        >
        <a href="#" className="list-group-item list-group-item-action py-2 ripple"
          ><i className="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></a
        >
      </div>
    </div>
  </nav>
  
  )
}
