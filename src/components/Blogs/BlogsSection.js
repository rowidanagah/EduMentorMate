
import UserBlogs from "../profile/UserBlogs";
import UserStatus from "../profile/UserStatus";
import BlogHeader from "./BlogHeader";

const BlogsSection = () => {
    return (
        <section className=" ">
            <div className="container py-5 h-100">

                <div class="container-fluid">
                    <div class="row flex-nowrap">
                        <div class="col-lg-4 d-none d-lg-block">
                            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                                <UserStatus />
                                <UserStatus />
                                <UserStatus />
                                <UserStatus />
                                <UserStatus />
                                <UserStatus />
                            </div>
                        </div>
                        <div class="col-lg-8 col-md-10">
                            <UserBlogs />
                            <UserBlogs />
                            <UserBlogs />
                            <UserBlogs />
                            <UserBlogs />
                            <UserBlogs />
                            <UserBlogs />
                        </div>
                    </div>
                </div>
            </div>

        </section >

    );
}


export default BlogsSection;