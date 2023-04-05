import { Link } from "react-router-dom";
import ProfilePicture from "../profile/ProfilePicture";
import "./sideBar.css";

export default function Sidebar({mentor}) {
  console.log(mentor,"mentorrr")
  return (
    <div className="sidebar " style={{ backgroundColor: "#b9e5eb" ,marginTop:"12%" }}>
      <div className="sidebarItem">
        {/* <span className="sidebarTitle" style={{ marginBottom: "50px" }}>
          ABOUT ME
        </span> */}
        {/* <img
          src="https://avatars.githubusercontent.com/u/38044666?s=400&u=eadf8d7e0f821251fcb9e6a1800776199870480d&v=4"
          alt=""
        /> */}
        <ProfilePicture imgSrc={mentor && mentor.user_profile} ></ProfilePicture>
        <Link to={`/mentorProfile/${mentor && mentor.user_id}`} style={{textDecoration:'none'}} className="link text-dark HoverForLink"><strong>{mentor && mentor.name}</strong></Link>
        <p>
          {mentor && mentor.bio}
        </p>
      </div>
      {/* <div className="sidebarItem">
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
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW ME</span>
        <div className="sidebarSocial">
          
          <Link target="_blank" to={mentor && mentor.facebook_link}> <i className="sidebarIcon fab fa-facebook-square "></i></Link>
          <Link target="_blank" to={mentor && mentor.github_link}><i className="sidebarIcon fab fa-instagram-square " style={{color:'#ff59c7'}}></i></Link>
          <Link target="_blank" to={mentor && mentor.instgram_link} ><i className="sidebarIcon fab fa-github-square text-dark"></i></Link>
        </div>
      </div>
    </div>
  );
}

