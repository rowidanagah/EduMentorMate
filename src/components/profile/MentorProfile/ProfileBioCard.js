import BioText from "./BioText";
import BioTitle from "./BioTitle";
import FollowingBtn from "./FollowingBtn";
import MoreInfo from "./MoreInfo";
import ProfilePicture from "./../ProfilePicture";
import SocialContact from "./SocialContacts";

const ProfileBioCard = ({ handlar ,followState ,mentor_info , id, number_of_follows, number_of_sessions, number_of_blogs ,ismentor}) => {
    const color = ["dark", "info", "danger"];
    const contacts = ["github", "facebook", "instagram"];
    const social_links=[`${mentor_info && mentor_info.github_link}`,`${mentor_info && mentor_info.facebook_link}`,`${mentor_info && mentor_info.instgram_link }`]
    console.log(mentor_info,'text2')
    let userData= JSON.parse(localStorage.getItem('user'))// {}
    //const [isFollowing, setFollow] = useState(followed_by_user ? 'unfollow' : "follow")
   // console.log('-----------------is follow ', followed_by_user);
    
    return (
        <div class="card mx-4  mx-md-5 shadow-5-strong profile_bio" >
            <ProfilePicture imgSrc={mentor_info && mentor_info.user_profile} />
            <BioTitle title={mentor_info && mentor_info.name} number_of_follows={number_of_follows} specialization={mentor_info && mentor_info.bio} joined={mentor_info.joinDate} />
            <BioText text={mentor_info && mentor_info.tools} />
            {/* <SocialContact mentor_socialLinks={social_links}  contacts={contacts} color={color}/> */}
            {id!=userData.user_id &&<FollowingBtn text={followState} handlar={handlar} />}
            {ismentor&&
            <MoreInfo info={"working experiance related staff "}  number_of_blogs={number_of_blogs}  number_of_sessions={number_of_sessions}/>

            }
        </div>
    )
}

export default ProfileBioCard;