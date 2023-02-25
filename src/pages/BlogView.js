import Sidebar from "../components/sideBar/SideBar";
import SinglePost from "../components/singlePlog/singlePlog";

const BlogView = () => {
  return (
    <div className=" container d-flex g-4">
      <SinglePost></SinglePost>
      <Sidebar></Sidebar>
    </div>
  );
};

export default BlogView;
