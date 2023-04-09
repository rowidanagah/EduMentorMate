import UserBlogs from "../profile/UserBlogs";
import UserStatus from "../profile/MentorProfile/UserStatus";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const BlogsSection = ({
  mentor_blogs,
  mentor_sessions,
  mentor_id,
  user_id,
}) => {
  console.log(typeof mentor_blogs, "----------", typeof mentor_sessions);

  // const sortedData = mentor_blogs.sort((a, b) => {
  //     if (a.created_at < b.created_at) return -1;
  //     if (a.created_at > b.created_at) return 1;
  //     return 0;
  //   });

  // const mentor_sessions_sorted = mentor_sessions.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
  const [reservedSessions, setReservedSessions] = useState([]);
  let getToken = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`http://localhost:8000/roomsession/mintor_picked_session-list/`, {
        headers: {
          "Authorization": `Token ${getToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setReservedSessions(response.data);
      })
      .catch((error) => {
        console.log(
          "single mento_______________________________",
          error.response.data
        );
      });
  }, []);

  return (
    <section className=" ">
      <div className="container py-5 h-100 ">
        <div className="container row" style={{padding: '2rem', gap: '2rem'}}>
          <h2 className=" text-dark  " style={{textAlign:'center'}}>your reserved rooms</h2>
          {reservedSessions.sort((a,b)=> new Date(a.session_date ) -new Date(b.session_date)).map((s) => {
            return <div className="card col ">
              <div
                className="card-header"
              >
                {s.formatted_session_date}
                { new Date(s.session_date ).getDate() == new Date().getDate() && <span style={{color: 'rebeccapurple',
color: '#43e31a',
padding: '4px',
color: '#100d07',
background: '#0afb97',
marginLeft: '4rem',
padding: '7px',
borderRadius: '10px'}}>
  today 
                </span>}
                
              </div>

              
  <div className="card-body">
    <h5 className="card-title">{s.session_room.title}</h5>
    <p className="card-text">{s.session_room.description}</p>
    <a href={s.session_room.sessionUrl} className="btn btn-primary"   style={{ background: "#3d9d7e" }}>Go to the Room </a>
  </div>
</div>
 ;
          })}
        </div>
        <div class="container-fluid">
          <div class="row flex-nowrap ">
            <div class="col-lg-4 d-none d-lg-block ">
              <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                {mentor_sessions && mentor_sessions.length ? (
                  <div className="ourteam-title ms-5">
                    <h2 className=" text-dark  ">Sessions</h2>
                    <div className="line"></div>
                    <div className="our-layer">
                      <h4>Our Team</h4>
                    </div>
                    {mentor_sessions
                      .slice()
                      .reverse()
                      .map((data) => {
                        return (
                          <UserStatus
                            key={data.id}
                            user_id={user_id}
                            Title={data.title}
                            tags={data.tags}
                            sessionId={data.id}
                            name={data.mentor.name}
                            bio={data.mentor.bio}
                            session_dates_count={data.session_dates_count}
                            created_at={data.updated_at}
                            user_profile={data.mentor.user_profile}
                            time_since_created={data.time_since_created}
                            mentor_id={mentor_id}
                            followed_by_user={data.mentor.followed_by_user}
                          />
                        );
                      })}
                  </div>
                ) : (
                  <div className="text-center mt-5">
                    <a href="https://git.io/typing-svg">
                      <img
                        src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&pause=1000&color=070C10&width=435&lines=There's+no+sessions+for+you+yet"
                        alt="Typing SVG"
                      />
                    </a>
                    <button
                      className="btn btn-outline-success rounded-pill me-2 mt-1 w-50"
                      type="button"
                    >
                      <Link className="nav-link" to="/launchSession">
                        Launch Session
                      </Link>
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* session */}
            <div class="col-lg-8 col-md-10">
              {mentor_blogs && mentor_blogs.length ? (
                <div className="ourteam-title ms-5">
                  <h2 className=" text-dark text-center ">Blogs</h2>
                  <div className="line"></div>
                  {/* <div className="our-layer"><h4>Blogs</h4></div> */}

                  {mentor_blogs
                    .slice()
                    .reverse()
                    .map((blog) => {
                      return (
                        <UserBlogs
                          user_id={user_id}
                          id={blog.id}
                          mentor_id={mentor_id}
                          liked_by_user={blog.liked_by_user}
                          key={blog.id}
                          commitCount={blog.number_of_comments}
                          title={blog.title}
                          body={blog.content}
                          tags={blog.tags}
                          name={blog.mentor.name}
                          bio={blog.mentor.bio}
                          user_profile={blog.mentor.user_profile}
                          blog_cover={blog.cover_image}
                          time_since_created={blog.time_since_created}
                          mentor_id={blog.mentor.user_id}
                          created_at={blog.updated_at}
                          number_of_likes={blog.number_of_likes}
                          followed_by_user={blog.mentor.followed_by_user}
                        />
                      );
                    })}
                </div>
              ) : (
                <div
                  className="text-center d-flex justify-content-center flex-column mt-5 align-items-center"
                  style={{ zIndex: "10" }}
                >
                  <a href="https://git.io/typing-svg">
                    <img
                      src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&duration=4000&pause=1000&color=070C10&width=435&lines=There's+no+blogs+for+you+yet."
                      alt="Typing SVG"
                    />
                  </a>
                  <button
                    className="btn btn-outline-success rounded-pill me-2   "
                    type="button"
                    style={{ width: "37%" }}
                  >
                    <Link className="nav-link" to="/CreateBLog">
                      Create Blog
                    </Link>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
