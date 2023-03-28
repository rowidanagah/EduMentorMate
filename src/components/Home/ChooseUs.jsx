import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

// import chooseImg from "../../assests/images/why-choose-us.png";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div style={{marginTop:"6%"}} className="container p-5">
    <section>
      <Container>
        <Row>
          <Col>

          <div className=" text-dark choose__content align-items-center text-center">
                    {/* <h2 className="display-5">Save ideas you like</h2> */}
                    <div class="about-title text-center mb-4">
                        <h4 className="text-center display-6 ">Save ideas you like</h4>
                        <div class="line "></div>
                        <div class="about-layer">
                            <h4 >Save ideas</h4>
                        </div>
                    </div>

                    <p>Collect your favorites so you can get back to them later
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cupiditate facilis provident quidem accusamus impedit
                tenetur laboriosam debitis nisi eius!
                    </p>
                    <button style={{backgroundColor:"#074f57"}} className="btn btn-success rounded-pill me-2 pe-5 ps-5" type="button">Explore</button>
                </div>
            {/* <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Incidunt mollitia nostrum harum eos praesentium odit a sed quod
                aut fugit. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Reprehenderit omnis, culpa eligendi inventore perspiciatis
                minus. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores cupiditate facilis provident quidem accusamus impedit
                tenetur laboriosam debitis nisi eius!
              </p>
            </div> */}
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=uHgt8giw1LY"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src="https://miro.medium.com/v2/resize:fit:900/1*BnfRsHHZ_zRufD68WC7w1Q.jpeg" alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                  
                  class="fa-solid fa-video"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </div>
  );
};

export default ChooseUs;