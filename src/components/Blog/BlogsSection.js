
import UserBlogs from "../profile/UserBlogs";
import UserStatus from "../profile/MentorProfile/UserStatus";
import BlogHeader from "./BlogHeader";

const BlogsSection = ({mentor_blogs,mentor_sessions}) => {
    console.log(mentor_blogs, mentor_sessions)

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
                            <div className="ourteam-title ms-5">
                                <h2 className=" text-dark  ">Sessions</h2>
                                <div className="line"></div>
                                <div className="our-layer">
                                    <h4>Our Team</h4>
                                </div>
                                </div>
                            {mentor_sessions && mentor_sessions.map((data) => {
                                return (
                                    <UserStatus
                                    key={data.id}
                                    Title={data.title}
                                    tags={data.tags}
                                    name={data.mentor.name}
                                    bio={data.mentor.bio}
                                    created_at={data.updated_at}
                                    user_profile={data.mentor.user_profile}
                                    time_since_created={data.time_since_created}
                                    mentor_id={data.mentor.user_id}
                                    followed_by_user={data.mentor.followed_by_user}
                                    />
                                )
                                })}
                                {/* <UserStatus />
                                <UserStatus />
                                <UserStatus />
                                <UserStatus />
                                <UserStatus />
                                <UserStatus /> */}
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-10">
                        <div className="ourteam-title ms-5">
                                <h2 className=" text-dark text-center ">Blogs</h2>
                                <div className="line"></div>
                                <div className="our-layer">
                                    <h4>Blogs</h4>
                                </div>
                                </div>
                                {mentor_blogs && mentor_blogs.map((blog) => {
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
                    </div>
                </div>
            </div>

        </section >

    );
}


export default BlogsSection;