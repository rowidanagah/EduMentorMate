const SocialContact = ({ contacts,mentor_socialLinks }) => {
    return (
        <div>
            {contacts.map( contact =>{
                return (<a href={mentor_socialLinks}><i className={`fa fa-${contact}`}></i></a>                )
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