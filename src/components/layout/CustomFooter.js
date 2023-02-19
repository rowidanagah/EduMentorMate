const CustomFooter = () => {
    return (
        <footer className="bg-dark py-5">
            <div className="container">
                <div className="row text-dark g-4">
                    <div className="col-sm-12 col-lg-6">
                        <a className=" text-decoration-none brand text-white">
                            <i className="fa-brands fa-2x  fa-edu&mentor mate-p  fa-footer "> </i>
                            <h6 className="display-6 d-inline-block ms-1 mt-1">edu&mentor mate</h6>
                        </a>
                    </div>

                    <div className="col-md-6 col-lg-2">
                        <h5 className="text-light">About Us</h5>
                        <ul className="list-unstyled">
                            <li className="my-3">
                                <a href="#" className="text-white text-decoration-none text-muted">
                                    <i className="fas fa-chevron-right me-1"></i> What's edu&mentor mate
                                </a>
                            </li>
                            <li className="my-3">
                                <a href="#" className="text-white text-decoration-none text-muted">
                                    <i className="fas fa-chevron-right me-1"></i> Our edu&mentor mate profile
                                </a>
                            </li>
                            <li className="my-3">
                                <a href="#" className="text-white text-decoration-none text-muted">
                                    <i className="fas fa-chevron-right me-1"></i> Engineering Blogs
                                </a>
                            </li>
                            <li className="my-3">
                                <a href="#" className="text-white text-decoration-none text-muted">
                                    <i className="fas fa-chevron-right me-1"></i> edu&mentor mate Labs
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-lg-2">
                        <h5 className="text-light mb-3">Contact Us</h5>
                        <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                            <span className="me-3">
                                <i className="fas fa-map-marked-alt"></i>
                            </span>
                            <span className="fw-light">
                                edu&mentor mate Community
                            </span>
                        </div>
                        <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                            <span className="me-3">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="fw-light">
                                Stack Overflow
                            </span>
                        </div>
                        <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                            <span className="me-3">
                                <i className="fab fa-twitter"></i>
                            </span>
                            <span className="fw-light">
                                Twitter BLog
                            </span>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-2">
                        <h5 className="fw-light mb-3">Follow Us</h5>

                    </div>
                </div>
                <div className="col-12 text-light">
                    <p classNameName="">&copy; 2022
                        edu&mentor mate</p>
                </div>
            </div>

        </footer>
    );
}

export default CustomFooter;