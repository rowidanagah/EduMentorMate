const Profile_Image_Icon = ({ user_profile }) => {
  return (
    <div className="image mt-3">
      {user_profile && (
        <img
          src={user_profile}
          class="rounded-circle"
          style={{ width: `40px` }}
        />
      )}
      {/* <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        class="rounded-circle"
        style={{ width: `40px` }}
        alt="Avatar"
      /> */}
    </div>
  );
};

export default Profile_Image_Icon;
