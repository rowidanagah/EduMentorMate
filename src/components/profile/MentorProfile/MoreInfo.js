const MoreInfo = ({info , number_of_blogs , number_of_sessions}) => {
    return (

        <div className="">
            <hr />
            <h6 className="dispaly-6"> Mentor Activities</h6>
           <p className="mb-4"> <i class="fa-solid fa-newspaper me-1"></i> {number_of_blogs} blogs published   
           <i class="fa-solid fa-podcast ms-2"></i> {number_of_sessions} launched sessions
           </p>
        </div>
    )
}

export default MoreInfo;