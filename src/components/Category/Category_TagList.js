// retreve tags list
const TagsList = ({ tags }) => {
    return (

        <ul class="nav">
            {tags.map(ele => {
                return (
                    <li className="nav-item ">
                        <a style={{color:"#172e59"}} className=" nav-link"  href="#">#{ele}</a>
                    </li>
                );
            })}
        </ul>
    )
}

export default TagsList;
