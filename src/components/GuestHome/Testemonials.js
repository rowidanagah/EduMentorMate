import Review from "./Review"

function Testemonials() {
    return (
        <div style={{marginTop:"7%"}}  className="container p-5">
            <div className="d-flex align-items-center justify-content-center text-center">
                <div id="carouselExampleFade" className="d-flex container carousel slide carousel-fade">
                    <div className="carousel-inner">
                        <div className="carousel-item row active d-flex align-items-center" style={{width: "1200px"}}>
                            <img src="https://th.bing.com/th/id/R.b337bc045a2d419582befd68f8c87b0c?rik=iS7rXkR1FxpHNg&pid=ImgRaw&r=0"/>
                        </div>
                        <Review className="carousel-item active" name="Youssef Rady" image="https://pps.whatsapp.net/v/t61.24694-24/187567939_497838901269550_7409252473440426783_n.jpg?ccb=11-4&oh=01_AdQpHYaVmW9DGzcEtBYhDJ2YJkixxf5KnnKsn6cjApRuxA&oe=64308148" comment=" Some quick example text to build on the card title and make up the bulk of the card's content. " />
                        <Review name="Osama Ahmed" image="https://pps.whatsapp.net/v/t61.24694-24/328040994_905046387472853_472201516306657961_n.jpg?ccb=11-4&oh=01_AdQ226d_gRzE_TPlGQjxf72OSxID8X7LNCGQfK8peS66CA&oe=643073FC" comment=" Some quick example text to build on the card title and make up the bulk of the card's content. " />
                        <Review name="Kareem Mohsen" image="https://pps.whatsapp.net/v/t61.24694-24/336279013_233303285743334_829327077240516692_n.jpg?ccb=11-4&oh=01_AdSynPRgieLPhWub-zlNks8kvwh2t87pD_w0NSWTCr7hEQ&oe=64307EB4" comment=" Some quick example text to build on the card title and make up the bulk of the card's content. " />
                        <Review name="Rowida Nagah" image="https://avatars.githubusercontent.com/u/52299389?v=4" comment=" Some quick example text to build on the card title and make up the bulk of the card's content. " />
                        <Review name="Abdullah Abdelsabor" image="https://avatars.githubusercontent.com/u/38044666?v=4" comment=" Some quick example text to build on the card title and make up the bulk of the card's content. " />
                    </div>
                    <button className="carousel-control-prev justify-content-start w-50 ms-4" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev" style={{width: "100%"}}>
                        <span className="carousel-control-prev-icon bg-success rounded-pill" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next justify-content-end w-50 me-4" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next" style={{width: "100%"}}>
                        <span className="carousel-control-next-icon bg-success rounded-pill" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Testemonials













