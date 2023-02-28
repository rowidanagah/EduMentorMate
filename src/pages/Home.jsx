import React from 'react'
import Blog from '../components/Blog/Blog'
import Footer from '../components/layout/Footer'
import Sidebar from '../components/Sidebar'
import Search from '../components/search'
import Rightside from '../components/Rightside'
import Error from '../components/ErrorAndSuccess/Error'
import Success from '../components/ErrorAndSuccess/Success'
import EditProfile from '../components/EditProfile'
import Modal from '../components/Modal/Modal'
import { useState } from 'react'
import { Navbar } from 'react-bootstrap'

export default function Home() {
  const[openModal,setOpenModal] = useState(false)
  return (
    <div className=" mt-2"> 
     <Modal open={openModal} onClose={()=>setOpenModal(false)}/>
      <div className="container">
        <div className=" row">
          <div className="col-lg-3"><Sidebar /></div>
          <div className="col-lg-6">
            {/* <EditProfile/> */}
            <div>
            <button className='btn btn-danger modalBtn' onClick={()=>setOpenModal(true)}> open</button>
           
            </div>
            
            <Search />

            <ul class="nav home-tags">
              <li class="nav-item" >
                <a class="nav-link active" href="#">Active</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Mentor</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Vist</a>
              </li>
            </ul>

            <Blog comment_title="Comment" reaction_title="Reaction" title="Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres,Docker" />
            <Blog comment_title="Comment" reaction_title="Reaction" title="Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres,Docker" />
            <Blog comment_title="Comment" reaction_title="Reaction" title="Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres,Docker"/>
          </div>
          
          <div className="col-lg-3">
            <Rightside blogRate={["first rate blog","second rate blog","third rate blog"]}/>
          </div>
          

        </div>
      </div>

    </div>

  )
}
