import React from 'react'

export default function Blog() {
  return (
    <div class="card">
  <div class="card-header d-flex align-content-center">
    <div className="image">
    <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{width: "40px"}}
  alt="Avatar" />
    </div>
  <div className="content">
  <strong>Kareem Mohsen </strong><br />
  <small>13 Feb</small>
  </div>
  
  </div>
  <div class="card-body">
    <p  class="card-text fs-1">Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres, Docker</p>
    <ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">#Beginner</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">#Javascript</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">#React</a>
  </li>
        </ul>
  </div>
  
  <div class="card-footer text-end   text-muted">2 days ago</div>
</div>
  )
}
