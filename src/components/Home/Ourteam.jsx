import React from 'react'
import"./ourteam.css"
import KareemImage from "/media/hp/kareem/finalprojectNew/Final_Project/src/img/iti.jpg"
import RadyImage from "/media/hp/kareem/finalprojectNew/Final_Project/src//img/youssef.jpeg"
import RowidaImage from "/media/hp/kareem/finalprojectNew/Final_Project/src//img/rowida.jpeg"
import OsamaImage from "/media/hp/kareem/finalprojectNew/Final_Project/src//img/osama.jpeg"
import AbdallahImage from "/media/hp/kareem/finalprojectNew/Final_Project/src/img/abdallah.jpeg"
import image from "/media/hp/kareem/finalprojectNew/Final_Project/src/img/COVER.png"

export default function Ourteam() {
  return (
    <div style={{marginTop:"7%"}} className="our-team text-center">
    <div className="ourteam-title">
    <h2 className="display-6 ">Our Team</h2>
      <div className="line"></div>
      <div className="our-layer">
        <h4>Our Team</h4>
      </div>
    </div>

    <div className="container ">
      <div className="row">
        <div className="col-md-12">
          <p className="our-pragraph py-3">young motivated team inspired to become world class developer
         
            </p>
          <div className="row justify-content-center ">
          <div className="our-item our-hover4 col-md-2  ">
              <div className="imagee">
                <img src={RowidaImage} alt="" width="100%"/>
                <div className="ourteam-layer d-flex justify-content-center align-items-center">
                  <i className="fab fa-twitter px-3 text-white"></i>
                  <i className="fab fa-facebook px-3 text-white"></i>
                  <i className="fab fa-invision px-3 text-white"></i>
                  <i className="fas fa-basketball-ball px-3 text-white"></i>
                </div>
              </div>
              <p><strong> Rowida Nagah </strong> <br/> Full Stack Web Developer</p>
            </div>
            <div className="our-item our-hover1 col-md-2">
              <div className="imagee">
                <img src={KareemImage} alt="" width="100%"/>
                <div className="ourteam-layer d-flex justify-content-center align-items-center">
                  <i className="fab fa-twitter px-3 text-white"></i>
                  <i className="fab fa-facebook px-3 text-white"></i>
                  <i className="fab fa-invision px-3 text-white"></i>
                  <i className="fas fa-basketball-ball px-3 text-white "></i>
                </div>
              </div>
              <p><strong> Kareem Mohsen </strong> <br/> Full Stack Web Developer</p>
            </div>
            <div className="our-item our-hover2 col-md-2 ">
              <div className="imagee">
                <img src={AbdallahImage} alt="" width="100%"/>
                <div className="ourteam-layer d-flex justify-content-center align-items-center">
                  <i className="fab fa-twitter px-3 text-white"></i>
                  <i className="fab fa-facebook px-3 text-white"></i>
                  <i className="fab fa-invision px-3 text-white"></i>
                  <i className="fas fa-basketball-ball px-3 text-white"></i>
                </div>
              </div>
              <p><strong> Abdallah AbdelSabour </strong> <br/> Full Stack Web Developer</p>
            </div>
            <div className="our-item our-hover3 col-md-2">
              <div className="imagee">
                <img src={RadyImage} alt="" width="100%"/>
                <div className="ourteam-layer d-flex justify-content-center align-items-center">
                  <i className="fab fa-twitter px-3 text-white"></i>
                  <i className="fab fa-facebook px-3 text-white"></i>
                  <i className="fab fa-invision px-3 text-white"></i>
                  <i className="fas fa-basketball-ball px-3 text-white"></i>
                </div>
              </div>
              <p><strong> Youssef Rady </strong> <br/>Full Stack Web Developer</p>
            </div>
            <div className="our-item our-hover4 col-md-2  ">
              <div className="imagee">
                <img src={OsamaImage} alt="" width="100%"/>
                <div className="ourteam-layer d-flex justify-content-center align-items-center">
                  <i className="fab fa-twitter px-3 text-white"></i>
                  <i className="fab fa-facebook px-3 text-white"></i>
                  <i className="fab fa-invision px-3 text-white"></i>
                  <i className="fas fa-basketball-ball px-3 text-white"></i>
                </div>
              </div>
              <p><strong> Osama Ahmed </strong> <br/> Full Stack Web Developer</p>
            </div>
          
           
          </div>
        </div>
       

      </div>
    </div>
    </div>
 
  )
}
