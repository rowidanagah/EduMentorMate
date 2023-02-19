import BlogHeader from "../Blogs/BlogHeader";

const UserBlogs = () => {

    return (
        
                <div className="">
{/*                       <img class="card-img-top blog_img" src="https://res.cloudinary.com/practicaldev/image/fetch/s--nZI14gr9--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/786tq34bio3szgfhbbyp.png" alt="Card image cap"></img>
 */}                    <figure className="bg-white p-3 rounded blogCaption" >
                        <BlogHeader />
                        <blockquote className="blockquote pb-2">
                            <p >
                                Age is an issue of mind over matter. If you don't mind, it doesn't matter.
                            </p>
                        </blockquote>
                        <figcaption className="blockquote-footer mb-0 font-italic">
                            Mark Twain
                        </figcaption>
                    </figure>
                </div>
            
    )
}


export default UserBlogs;