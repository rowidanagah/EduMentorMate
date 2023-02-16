// retreve tags list
const TagsList = ({ tags }) => {
    return (
        <ul class="nav">
            {tags.map(ele => {
                return (
                    <li class="nav-item">
                        <a class="nav-link" href="#">#{ele}</a>
                    </li>
                );
            })}
        </ul>
    )
}

export default TagsList;
