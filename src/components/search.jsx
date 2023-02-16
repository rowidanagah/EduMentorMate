import React from 'react'

export default function Search() {
  return (
    <nav className="navbar">
  <div className="container-fluid d-flex justify-content-center">
    <form role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
  </div>
</nav>
  )
}
