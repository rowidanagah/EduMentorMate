const UserStatus = ({time_since_created,created_at,Title}) => {

    return (
        <div style={{width:"105%",marginLeft:'-20%'}} className="card card-outline-secondary text-xs-center mt-2 p-4 ">
            <figure className=" " >
                <blockquote className="blockquote  text-dark">
                        {Title}
                </blockquote>
                <figcaption className="blockquote-footer mb-0 font-italic ">
                    {time_since_created} . {created_at}
                </figcaption>
            </figure>
        </div>
    )
}

export default UserStatus;