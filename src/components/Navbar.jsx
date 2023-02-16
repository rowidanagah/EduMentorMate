import { Link } from "react-router-dom"
function Navbar() {
  return (

    <nav style={{ backgroundColor: "#172e59" }} className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">UpWork</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <button type="button" class="btn position-relative">
              <i class="fa-solid fa-bell text-white"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                10+
                <span class="visually-hidden">unread messages</span>
              </span>
            </button>
            <li className="nav-item">
              <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>

            </li>
          </ul>
        </div>
        <div class="dropdown ">
          <button style={{ backgroundColor: "#172e59" }} class="btn dropdown-toggle text-white " type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{ width: "30px" }}
              alt="Avatar" />
            <strong className="text-white">Kareem Mohsen</strong>
          </button>

          <ul class="dropdown-menu ">
            <li><a class="dropdown-item" href="#">Profile</a></li>
            <li><a class="dropdown-item" href="#">Calendar</a></li>
            <li><a class="dropdown-item" href="#">Logout</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar