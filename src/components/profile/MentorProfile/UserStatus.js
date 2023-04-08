import { Link } from "react-router-dom";

const UserStatus = ({time_since_created,created_at,Title ,sessionId} ) => {
    const capitalizedTitle = Title.charAt(0).toLocaleUpperCase() + Title.slice(1);

    return (
        <div style={{width:"105%",marginLeft:'-20%'}} className="card card-outline-secondary text-xs-center mt-2 p-4 ">
            <figure className=" " >
                <blockquote className="blockquote  text-dark">
                <Link
        to={`/SessionDetail/${sessionId}`}
        style={{ margin: "15px 0px 15px 15px", textDecoration: "none" }}
        className="text-dark fs-4 HoverForLink">{capitalizedTitle}</Link>

                </blockquote>
                <figcaption className="blockquote-footer mb-0 font-italic mt-1 text-end ">
                    {time_since_created} ,{created_at}
                </figcaption>
            </figure>
        </div>
    )
}

export default UserStatus;