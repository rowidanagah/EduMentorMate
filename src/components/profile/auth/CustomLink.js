import { Link } from "react-router-dom";

const CustomLink = ({linkto, text}) => {
    return (
        <Link
        to={linkto}>{text}
    </Link>

    )
}

export default CustomLink;