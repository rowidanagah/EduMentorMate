import React from 'react'
import Blog from '../components/Blog'
import Footer from '../components/Footer'
import Sidebar from '../components/Sidebar'
import Search from '../components/search'


export default function Home() {
  return (
    <div className=" mt-4">
      <div className="container">
        <div className=" row">
            <div className="col-lg-3"><Sidebar/></div>
            <div className="col-lg-6">
              <Search/>
            <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Active</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Mentor</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Vist</a>
  </li>
             </ul>
              
               <Blog/>
            </div>
            <div className="col-lg-3">Empty For Now</div>
            
        </div>
      </div>

    <Footer/>
    </div>
    
  )
}
