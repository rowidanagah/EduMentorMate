import React from 'react'
import Blog from '../components/Blog/Blog'
import Footer from '../components/layout/Footer'
import Sidebar from '../components/Sidebar'
import Search from '../components/search'
import Rightside from '../components/Rightside'


export default function Home() {
  return (
    <div className=" mt-2">
      <div className="container">
        <div className=" row">
          <div className="col-lg-3"><Sidebar /></div>
          <div className="col-lg-6">
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
