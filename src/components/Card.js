

function Card(props)  {






    return (
        <>
<div>
    <div className="card w-50 m-auto  bg-dark text-white hover-overlay">
        <div className="card-body" >
            <h5 className="card-title">{props.title}</h5> 

        </div>
    </div>
</div>

        </>
    )
}

export default Card;

