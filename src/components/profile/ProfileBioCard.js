import BioText from "./BioText";
import BioTitle from "./BioTitle";
import FollowingBtn from "./FollowingBtn";
import MoreInfo from "./MoreInfo";
import ProfilePicture from "./ProfilePicture";
import SocialContact from "./SocialContacts";

const ProfileBioCard = ({ handlar, followState }) => {
    const contacts = ["twitter", "facebook", "linkedin"];

    return (
        <div class="card mx-4  mx-md-5 shadow-5-strong profile_bio" >
            <ProfilePicture />
            <BioTitle title={"Rowida Nagah"} specialization={"Software Develpoer"} />
            <BioText text={"Code is Life. Crossfitter. Technical Architect. Just another human walking the earth! https://youtube.com/c/mohamadlawand"} />
            <SocialContact contacts={contacts} />
            <FollowingBtn text={followState} handlar={handlar} />
            <MoreInfo info={"working experiance related staff "} />
        </div>
    )
}

export default ProfileBioCard;