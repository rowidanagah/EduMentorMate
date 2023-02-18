function HeroSection() {
    return (
        <>
            <div className="container-fluid p-5 w-100 hero d-flex align-items-center justify-content-center text-center">
                <div className="row">
                    <div className="col-12">
                        <div className="content">
                            <h2 className="display-2" style={{color: "green"}}>How work should work</h2><br/>
                            <p className="display-6" style={{color: "#5e6d55"}}>Forget the old rules. You can have the best peopleRight now. Right here.</p>
                            <button type="button" className="btn btn-outline-success rounded-pill ps-5 pe-5">Get started</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeroSection;