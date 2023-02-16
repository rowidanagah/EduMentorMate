import Profile_Image_Icon from "../Profile_Image_Icon";

const BlogHeader = () => {
    return (
        <div class="card-header d-flex align-content-center">
           <Profile_Image_Icon />
            <div className="content ms-2">
                <strong>Kareem Mohsen </strong><br />
                <small>13 Feb</small>
            </div>

        </div>
    )
}

export default BlogHeader;