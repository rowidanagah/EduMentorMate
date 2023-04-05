const SocialContact = ({ contacts,mentor_socialLinks ,color}) => {
    return (
        <div>
            {contacts.map( contact =>{
                return (<a href={mentor_socialLinks}><i className={` text-${color} fa fa-${contact}`}></i></a>                )
            }
                )}
        </div>
    )
}

export default SocialContact;
/* 
<a href="#"><i class="fa fa-dribbble"></i></a>
<a href="#"><i class="fa fa-twitter"></i></a>
<a href="#"><i class="fa fa-linkedin"></i></a>
<a href="#"><i class="fa fa-facebook"></i></a> */