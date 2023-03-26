import Profile_Image_Icon from "../profile/Profile_Image_Icon";
import HoverPopup from "./BlogPopup";

const BlogHeader = () => {
    return (
        <div class="card-image-top d-flex align-content-center ps-3 mt-2 ">
           <Profile_Image_Icon />
            <div className="content ms-2 w-75">
                <HoverPopup name="Rady" text="13 Feb" />
            </div>

        </div>
    )
}

export default BlogHeader;