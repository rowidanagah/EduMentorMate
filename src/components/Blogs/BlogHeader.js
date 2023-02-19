
const BlogHeader = () => {
    return (
        <div class="card-img-top d-flex align-content-center">
            <div className=" image">
                <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{ width: "40px" }}
                    alt="Avatar" />
            </div>
            <div className="content ms-2">
                <strong>Kareem Mohsen </strong><br />
                <small>13 Feb</small>
            </div>
        </div>
    )
}

export default BlogHeader;