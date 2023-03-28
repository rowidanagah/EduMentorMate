import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

// import img from "https://raw.githubusercontent.com/codingwithmuhib/Online-Educational-Website/main/src/assests/images/testimonial01.png";


const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  };
  return (
    <div style={{marginTop:"7%"}} className="container">
        <section >
      <Container>
        <Row>
          <Col className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src='https://www.realexpertadvice.com/wp-content/uploads/2021/09/rea-background-1024x903.png' className="w-75"/>
              </div>

              <div className="w-50">
                {/* <h2 className="mb-4 display-5 ">Our Students Voice</h2> */}

                <div class="about-title text-center mb-4">
                <h2 className="display-6 ">Our Students Voice</h2>
                <div class="line"></div>
                <div class="about-layer">
                    <h4 >Our Students</h4>
                </div>
                </div>

                
                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold fs-4">
                        Excellent course of materials
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold fs-4">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold fs-4">
                        Excellent course of materials
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold fs-4">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold fs-4">
                        Excellent course of materials
                      </h6>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Facilis saepe id voluptas molestiae. Aperiam corrupti
                        voluptas earum at molestiae neque!
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold fs-4">Jhon Doe</h6>
                        <p>California, United State</p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    </div>
    
  );
};

export default Testimonials;