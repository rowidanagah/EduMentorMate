const UserStatus = ({time_since_created,created_at,Title}) => {

    return (
        <div className="card card-outline-secondary text-xs-center m-2 p-2 ps-3 ">
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