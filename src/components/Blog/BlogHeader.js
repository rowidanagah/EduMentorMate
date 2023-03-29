import Profile_Image_Icon from "../profile/Profile_Image_Icon";
import HoverPopup from "./BlogPopup";

const BlogHeader = ({title,bio,created_at}) => {
    return (
        <div class="card-image-top d-flex align-content-center ps-3 mt-2 ">
           <Profile_Image_Icon />
            <div className="content ms-2 w-75">
                <HoverPopup name={title} bio={bio} created_at={created_at} />
            </div>

        </div>
    )
}
export default BlogHeader; 