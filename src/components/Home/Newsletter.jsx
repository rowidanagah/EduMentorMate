import React, { useEffect, useState } from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";


const Newsletter = () => {
  const [email, setEmail] = useState('');

  // useEffect(() => {
  //   axios.post('/api/gmail-accounts/')
  //     .then(response => setGmailAccounts(response.data))
  //     .catch(error => console.log(error));
  // }, []);

  const handleSubmit = async (e) => {
    console.log(e.target.value)
    // axios.get('http://127.0.0.1:8000/roomsession/', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     //'Authorization': 'Token 0dba9d202f030608724613043df6dbb4bd0e4d86', 
    //     'Authorization': 'Token 562aa9f6b2f54b6784d2dd3fc02f4ccee1c60d0b',
    //   },
    // })
    e.preventDefault();
    const data = { email }
    const res = await axios.post('http://127.0.0.1:8000/roomsession/api/gmail-accounts/', data, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token 26c6119c808fd0883dab770238f63b5a1dd1fad4',
      }
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };
  return (
    <section style={{marginTop:"8%"}} className=" p-5 container">
      <Container className="newsletter ">
        <Row>
          <Col  className="text-center">
            <h2 className="mb-4">Subscribe Our Newsletter</h2>
            <div className="subscribe">
            <form onSubmit={handleSubmit} className="w-100 d-flex justify-content-between">
              <input onChange={(e) => setEmail(e.target.value)} type="text" className="" placeholder="Email" value={email}/>
              <button type="submit" style={{backgroundColor:"#25caac"}} className="btn btn-outline-light rounded-5 text-right">Subscribe</button>
            </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;