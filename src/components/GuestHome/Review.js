import React from 'react';

function Review({ name, image, comment }) {
  return (
    <div className="carousel-item h-100 w-100 row d-flex">
        <div className="col-12 col-xl-6 col-lg-6 col-md-12 d-flex p-5">
            <div className="card w-100">
                <div className="card-body">
                    <p className="display-xl-4 display-lg-4 display-md-4 display-sm-6 display-6">{name}</p><hr/>
                    <p className="card-text fs-sm-5 fs-1 fw-lighter mt-5">{comment}</p>
                </div>
            </div>
        </div>
        <div className="col-12 col-xl-6 col-lg-6 col-md-12">
            <img className="rounded-circle w-100 p-5" src={image} alt={name}/>
        </div>
    </div>
  );
}

export default Review;