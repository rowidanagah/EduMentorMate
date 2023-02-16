import React from 'react'
import TagsList from '../Category/Category_TagList'
import BlogHeader from './BlogHeader'

export default function Blog() {
  return (
    <div class="card">
      <BlogHeader />
      <div class="card-body">
        <p class="card-text fs-1">Build a CRUD Rest API in JavaScript using Nodejs, Express, Postgres, Docker</p>
        <TagsList tags={["react","python", "flask"]}/>
      </div>
      <div class="card-footer text-end   text-muted">2 days ago</div>
    </div>
  )
}
