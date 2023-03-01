const BlogHeader = ({ title, img }) => {
  return (
    <div class="card-img-top d-flex align-content-center">
      <div className=" image">
        <img
          src={img}
          class="rounded-circle"
          style={{ width: "40px" }}
          alt="Avatar"
        />
      </div>
      <div className="content ms-2">
        <a style={{ color: "blue", textDecoration: "undeline" }}>
          <strong>{title}</strong>
        </a>
        <br />
        <small>13 Feb</small>
      </div>
    </div>
  );
};

export default BlogHeader;
