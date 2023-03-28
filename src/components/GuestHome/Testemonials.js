import Review from "./Review"

function Testemonials() {
    return (
        <div style={{marginTop:"7%"}} className="container  ">
            <div className="display-6 text-center mt-4 p-2 text-dark ">
                Our Website's Review
            </div>
            <div className="p-5 w-100 h-100 d-flex align-items-center justify-content-center text-center" >
                <div id="carouselExampleFade" className="d-flex container carousel slide carousel-fade  h-100">
                    <div className="carousel-inner w-100">
                        <div className="carousel-item h-100 w-100 row active d-flex">
                            <div className="col-12 col-xl-6 col-lg-6 col-md-12 d-flex p-5">
                                <div className="card w-100">
                                    <div className="card-body">
                                        <p className="display-xl-4 display-lg-4 display-md-4 display-sm-6 display-6">Kareem Mohsen</p><hr/>
                                        <p className="card-text fs-sm-5 fs-1 fw-lighter mt-5">" Some quick example text to build on the card title and make up the bulk of the card's content. "</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-xl-6 col-lg-6 col-md-12">
                                <img className="rounded-circle w-100 p-5" src="https://pps.whatsapp.net/v/t61.24694-24/323051590_495687692729574_5375521014487805603_n.jpg?ccb=11-4&oh=01_AdQHRi_FGYG5fio0GyLiQEEJpfwkTCwiMmJblGeUE32gbw&oe=63FCAB53" alt=""/>
                            </div>
                        </div>
                        <Review name="Youssef Rady" image="https://pps.whatsapp.net/v/t61.24694-24/187567939_497838901269550_7409252473440426783_n.jpg?ccb=11-4&oh=01_AdQp3k7Yv0bvqmruOPhxciTc-n8z-WRmO_FUs3Y2t6yXWA&oe=63FCDE88" comment=" Some quick example text to build on the card title and make up the bulk of the card's content. " />
                        <Review name="Osama Ahmed" image="https://pps.whatsapp.net/v/t61.24694-24/328068570_736406551401918_4223041881596076077_n.jpg?ccb=11-4&oh=01_AdRrG2eFFaz5xx3NOo4L21usfd-3qL720APRrXasv5Jalg&oe=640480B4" comment=" Some quick example text to build on the card title and make up the bulk of the card's content. " />
                        <Review name="Kareem Mohsen" image="https://pps.whatsapp.net/v/t61.24694-24/323051590_495687692729574_5375521014487805603_n.jpg?ccb=11-4&oh=01_AdQHRi_FGYG5fio0GyLiQEEJpfwkTCwiMmJblGeUE32gbw&oe=63FCAB53" comment=" Some quick example text to build on the card title and make up the bulk of the card's content. " />
                        <Review name="Rowida Nagah" image="https://avatars.githubusercontent.com/u/52299389?v=4" comment=" Some quick example text to build on the card title and make up the bulk of the card's content. " />
                        <Review name="Abdullah Abdelsabor" image="https://avatars.githubusercontent.com/u/38044666?v=4" comment=" Some quick example text to build on the card title and make up the bulk of the card's content. " />
                    </div>
                    <button className="carousel-control-prev justify-content-start w-50 rounded-pill" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" style={{width: "100%"}}>
                        <span className="carousel-control-prev-icon bg-success rounded-pill" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next justify-content-end w-50" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" style={{width: "100%"}}>
                        <span className="carousel-control-next-icon bg-success rounded-pill" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Testemonials