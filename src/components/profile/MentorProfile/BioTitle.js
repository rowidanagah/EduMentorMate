const BioTitle = ({ title , specialization,joined , number_of_follows}) => {
    return (
        <div  className="">
            <h2 className="crayons-title dispaly-4 fw-heavy ">{title}</h2>
            <small style={{fontSize:'12px'}}><i class="fa-solid fa-cake-candles"></i> Joined on {joined}</small>
            <small style={{fontSize:'12px'}} className="ms-3"><i class="fa-solid fa-users me-1"></i>{number_of_follows} Followers</small>

            <p className="spw mt-1 fs-5" >{specialization}</p>
        </div>

    )
}

export default BioTitle;