const BioTitle = ({ title , specialization}) => {
    return (
        <div  className="">
            <h2 className="crayons-title dispaly-4 fw-heavy mt-2">{title}</h2>
            <p className="spw" >{specialization}</p>
        </div>

    )
}

export default BioTitle;