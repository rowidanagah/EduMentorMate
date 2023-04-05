const BioTitle = ({ title , specialization,joined}) => {
    return (
        <div  className="">
            <h2 className="crayons-title dispaly-4 fw-heavy ">{title}</h2>
            <small style={{fontSize:'12px'}}><i class="fa-solid fa-cake-candles"></i> Joined on {joined}</small>
            <p className="spw mt-1 fs-5" >{specialization}</p>
        </div>

    )
}

export default BioTitle;