const SocialContact = ({ contacts }) => {
    return (
        <div>
            {contacts.map( contact =>{
                return (<a href="#"><i className={`fa fa-${contact}`}></i></a>                )
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