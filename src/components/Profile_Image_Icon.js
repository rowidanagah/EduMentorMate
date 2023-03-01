const Profile_Image_Icon = (props) => {
    return (
        <div className="image">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" class="rounded-circle" style={{ width: `${props.size}` }}
                alt="Avatar" />
        </div>
    );
}

export default Profile_Image_Icon;