import UserBlogs from "../profile/UserBlogs";
import UserStatus from "../profile/UserStatus";
import BlogHeader from "./BlogHeader";

const BlogsSection = () => {
    return (
        <section className=" ">
            <div className="container py-5 h-100">
                
                <div className="row d-flex align-items-center h-100" id="qoutesSection">
                    <div class="col-auto col-md-3 col-xl-3 px-sm-2 px-0 ">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

                            <div className="row">

                            <UserBlogs />
                            <UserBlogs />
                                <UserBlogs />
                                <UserBlogs />
                                <UserBlogs />
                            </div>
                        </div>
                    </div>
                    <div className=" col ms-4 py-3 mb-4 mb-lg-0">
                        <div className="row">
                            <UserStatus />
                            <UserStatus />
                            <UserStatus />
                            <UserStatus />
                            <UserStatus />
                            <UserStatus />
                            <UserStatus />
                            <UserStatus />
                            <UserStatus />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}


export default BlogsSection;