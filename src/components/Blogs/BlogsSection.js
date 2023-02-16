const BlogsSection = () => {
    return (
        <section className=" ">
            <div className="container py-5 h-100">
               {/*  <div className="title text-center m-3">
                    <h6 class="position-relative d-inline-block display-3">Here is With Your Most dominent Qoutes ?</h6>
                </div> */}
                <div className="row d-flex align-items-center h-100" id="qoutesSection">
                    <div className="card col-lg-3 col-sm-12 mb-4 mb-lg-0  ">
                        <figure className=" p-3  " >
                            <blockquote className="blockquote pb-2">
                                <p>
                                    Age is an issue of mind over matter. If you don't mind, it doesn't matter.
                                </p>
                            </blockquote>
                            <figcaption className="blockquote-footer mb-0 font-italic">
                                Mark Twain
                            </figcaption>
                        </figure>
                    </div>
                    <div className=" col-lg-8 col-sm-12 mb-4 mb-lg-0">
                        <figure className="bg-white p-3 rounded blogCaption" >
                            <figure  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{ width: "40px" }}
            alt="Avatar"></figure>
                            <blockquote className="blockquote pb-2">
                                <p>
                                    Age is an issue of mind over matter. If you don't mind, it doesn't matter.
                                </p>
                            </blockquote>
                            <figcaption className="blockquote-footer mb-0 font-italic">
                                Mark Twain
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>

    );
}


export default BlogsSection;