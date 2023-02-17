import Profile_Image_Icon from "../Profile_Image_Icon";

const BlogHeader = () => {
    return (
        <div class="card-image-top d-flex align-content-center ps-3 mt-3 ">
           <Profile_Image_Icon />
            <div className="content ms-2">
                <strong>Kareem Mohsen </strong><br />
                <small>13 Feb</small>
            </div>

        </div>
    )
}

export default BlogHeader;