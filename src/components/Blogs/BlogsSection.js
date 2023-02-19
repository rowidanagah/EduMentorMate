
import UserBlogs from "../profile/UserBlogs";
import UserStatus from "../profile/UserStatus";
import BlogHeader from "./BlogHeader";

const BlogsSection = () => {
    return (
        <section className=" ">
            <div className="container py-5 h-100">

                <div class="container-fluid">
                    <div class="row flex-nowrap">
                        <div class="col-auto col-md-3 col-xl-4 px-sm-2 px-0  col-sm-0">
                            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                                <UserStatus />
                                <UserStatus />
                                <UserStatus />
                                <UserStatus />
                                <UserStatus />
                                <UserStatus />
                            </div>
                        </div>
                        <div class="col py-3">
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