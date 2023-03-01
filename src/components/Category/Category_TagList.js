// retreve tags list
const TagsList = ({ tags }) => {
  console.log(tags);
  return (
    <ul class="nav">
      {tags.map((ele) => {
        return (
          <li className="nav-item " style={{ marginLeft: "20px" }}>
            <a style={{ color: "#172e59" }} className=" nav-link" href="#">
              #{ele}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default TagsList;
