import UserBlogs from "../profile/UserBlogs";
import UserStatus from "../profile/MentorProfile/UserStatus";
import { Link } from "react-router-dom";

const BlogsSection = ({ mentor_blogs, mentor_sessions }) => {
  console.log(typeof mentor_blogs, "----------", typeof mentor_sessions);

  // const sortedData = mentor_blogs.sort((a, b) => {
  //     if (a.created_at < b.created_at) return -1;
  //     if (a.created_at > b.created_at) return 1;
  //     return 0;
  //   });

  // const mentor_sessions_sorted = mentor_sessions.sort((a,b) => new Date(b.created_at) - new Date(a.created_at))
  return (
    <section className=" ">
      <div className="container py-5 h-100 ">
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
                            Title={data.title}
                            tags={data.tags}
                            sessionId={data.id}
                            name={data.mentor.name}
                            bio={data.mentor.bio}
                            created_at={data.updated_at}
                            user_profile={data.mentor.user_profile}
                            time_since_created={data.time_since_created}
                            mentor_id={data.mentor.user_id}
                            followed_by_user={data.mentor.followed_by_user}
                          />
                        );
                      })}
                  </div>
                ) : (
                  <div className="text-center mt-5">
                    <a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&pause=1000&color=070C10&width=435&lines=There's+no+sessions+for+you+yet" alt="Typing SVG" /></a>
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

                  {mentor_blogs.slice().reverse().map((blog) => {
                      return (
                        <UserBlogs
                          id={blog.id}
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
                <div className="text-center d-flex justify-content-center flex-column mt-5 align-items-center" style={{ zIndex: "10" }}>

<a href="https://git.io/typing-svg"><img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&duration=4000&pause=1000&color=070C10&width=435&lines=There's+no+blogs+for+you+yet." alt="Typing SVG" /></a>
                 <button
                    className="btn btn-outline-success rounded-pill me-2   "
                    type="button" style={{width:"37%"}}
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
