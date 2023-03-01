import Title from "./Title";


function TitleSection() {


    return (
        <div className="container-fluid">
            <div className="row d-flex justify-content-between">
                <div className="col-5">
                    <div className="card-body m-2">
                        <h1 className="mt-5 mb-5">What Is Mentorizm</h1>
                        <p className="card-text">
                                Mentorizm is a web application that allows users to create a mentorship profile.
                                Users can create mentorship profiles, view their mentorship profiles, and delete their mentorship profiles.
                                Mentorship profiles can also be viewed by users.
                        </p>
                    </div>
                </div>
                <div className="col-5 p-0">
                    <div className="card-body">
                        <img src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" className="w-100" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleSection;