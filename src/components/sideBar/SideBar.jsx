import { Link } from "react-router-dom";
import ProfilePicture from "../profile/ProfilePicture";
import "./sideBar.css";
import SocialContact from "../profile/MentorProfile/SocialContacts";

export default function Sidebar({mentor}) {
  const contacts = ["github", "facebook", "instagram"];
  const color = ["dark", "info", "danger"];
  const social_links=[`${mentor && mentor.github_link}`,`${mentor && mentor.facebook_link}`,`${mentor && mentor.instgram_link }`]
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

      
      <div className="sidebarItem">
        <span className="sidebarTitle">FAVORITE BINS</span>
        <ul className="sidebarList">
        {mentor && mentor.favourite_bins.map((tag) => (
              <li className="sidebarListItem">
                <Link style={{textDecoration:'none'}} className="HoverForLink text-dark fs-6"  to="/posts?cat=Life">
                  #{tag}
                </Link>
              </li>
            ))}
        </ul>
      </div>
      
      <div className="sidebarItem">
        <span className="sidebarTitle w-75">FOLLOW ME</span>
        <div className="sidebarSocial">
        <SocialContact mentor_socialLinks={social_links}  contacts={contacts} color={color} />
{/*           
          <Link target="_blank" to={mentor && mentor.facebook_link}> <i className="sidebarIcon fab fa-facebook-square "></i></Link>
          <Link target="_blank" to={mentor && mentor.github_link}><i className="sidebarIcon fab fa-instagram-square " style={{color:'#ff59c7'}}></i></Link>
          <Link target="_blank" to={mentor && mentor.instgram_link} ><i className="sidebarIcon fab fa-github-square text-dark"></i></Link> */}
        </div>
      </div>
    </div>
  );
}

