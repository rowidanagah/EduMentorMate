import Profile_Image_Icon from "../profile/Profile_Image_Icon";
import HoverPopup from "./BlogPopup";

const BlogHeader = ({
  title,
  bio,
  created_at,
  user_profile,
  mentor_id,
  followed_by_user,
}) => {

  return (
    <div class="card-image-top d-flex align-content-center ps-3 mt-2 ">
      <Profile_Image_Icon user_profile={user_profile}  />
      <div className="content ms-2 w-75">
        <HoverPopup
          name={title}
          bio={bio}
          user_profile={user_profile}
          created_at={created_at}
          mentor_id={mentor_id}
          followed_by_user={followed_by_user}
        />
      </div>
    </div>
  );
};
export default BlogHeader;
