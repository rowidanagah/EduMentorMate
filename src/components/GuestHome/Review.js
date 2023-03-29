import React from 'react';

function Review({ name, image, comment }) {
  return (
    <div className="carousel-item h-100 w-100 row d-flex " style={{backgroundColor: "#25CAAC"}}>
        <div className="d-flex p-5">
            <div className="w-100">
                    <div className='d-flex align-items-center'>
                    <img className="rounded-circle w-25 p-5" src={image} alt={name}/>
                    <p className="display-xl-4 display-lg-4 display-md-4 display-sm-6 display-4">{name}</p>
                    </div>
                    <hr/>
                    <p className="card-text fs-sm-5 display-6 fw-lighter mt-5">{comment}</p>
            </div>
        </div>
    </div>
  );
}

export default Review;