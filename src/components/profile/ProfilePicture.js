
const ProfilePicture = ({ imgSrc }) => {
    return (

        /* <!-- Here I create a New Div for image with class name card_img --> */
        <div className="card_img">
            <img src={imgSrc} alt="user-image" />
        </div>
        


    );
}

export default ProfilePicture;