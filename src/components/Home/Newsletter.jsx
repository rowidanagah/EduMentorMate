import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  return (
    <section style={{marginTop:"8%"}} className=" p-5 container">
      <Container className="newsletter ">
        <Row>
          <Col  className="text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <div className="subscribe">
              <input type="text" className="" placeholder="Email" />
              <button style={{backgroundColor:"#25caac"}} className="btn btn-outline-light rounded-5 ">Subscribe</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;