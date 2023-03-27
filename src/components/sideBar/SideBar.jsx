import { Link } from "react-router-dom";
import ProfilePicture from "../profile/ProfilePicture";
import "./sideBar.css";

export default function Sidebar() {
  return (
    <div className="sidebar" style={{ backgroundColor: "#e7e8eb" }}>
      <div className="sidebarItem">
        <span className="sidebarTitle" style={{ marginBottom: "50px" }}>
          ABOUT ME
        </span>
        {/* <img
          src="https://avatars.githubusercontent.com/u/38044666?s=400&u=eadf8d7e0f821251fcb9e6a1800776199870480d&v=4"
          alt=""
        /> */}
        <ProfilePicture></ProfilePicture>
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <Link style={{textDecoration:'none'}} className="HoverForLink text-dark"  to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link style={{textDecoration:'none'}} className="HoverForLink text-dark" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link style={{textDecoration:'none'}} className="HoverForLink text-dark" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link style={{textDecoration:'none'}} className="HoverForLink text-dark" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link style={{textDecoration:'none'}} className="HoverForLink text-dark" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="sidebarListItem">
            <Link style={{textDecoration:'none'}} className="HoverForLink text-dark" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
         <Link> <i className="sidebarIcon fab fa-facebook-square "></i></Link>
          <Link><i className="sidebarIcon fab fa-instagram-square " style={{color:'#ff59c7'}}></i></Link>
          <Link><i className="sidebarIcon fab fa-pinterest-square text-danger"></i></Link>
          <Link><i className="sidebarIcon fab fa-twitter-square text-info" ></i></Link>
        </div>
      </div>
    </div>
  );
}
