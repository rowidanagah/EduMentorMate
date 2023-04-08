import React from 'react'
import"./ourteam.css"
import KareemImage from "../..//img/iti.jpg"
import RadyImage from "../../img/youssef.jpeg"
import RowidaImage from "../../img/rowida.jpeg"
import OsamaImage from "../../img/osama.jpeg"
import AbdallahImage from "../../img/abdallah.jpeg"

//"/media/hp/kareem/finalprojectNew/Final_Project/src/img/abdallah.jpeg"
//import image from "/media/hp/kareem/finalprojectNew/Final_Project/src/img/COVER.png"

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
          <p className="our-pragraph py-3">Young Motivated Team inspired to become World-Class Developers.
         
            </p>
          <div className="row justify-content-center ">
          <div className="our-item our-hover1 col-md-2">
              <div className="imagee">
                <img src={KareemImage} alt="" width="100%"/>
                <div className="ourteam-layer d-flex justify-content-evenly align-items-center">
                  <a href=""><i className="fab fa-twitter text-white"></i></a>
                  <a href="https://www.facebook.com/kareemmMohsen99"><i className="fab fa-facebook text-white"></i></a>
                  <a href="https://www.linkedin.com/in/kareem-mohsen-a27b6526a/"><i className="fab fa-linkedin text-white"></i></a>
                  <a href="https://github.com/KareemMohsenAli"><i className="fa fa-github text-white "></i></a>
                </div>
              </div>
              <p><strong> Kareem Mohsen </strong> <br/> Full Stack Web Developer</p>
            </div>
          <div className="our-item our-hover4 col-md-2  ">
              <div className="imagee">
                <img src={RowidaImage} alt="" width="100%"/>
                <div className="ourteam-layer d-flex justify-content-evenly align-items-center">
                  <a href=""><i className="fab fa-twitter text-white"></i></a>
                  <a href=""><i className="fab fa-facebook text-white"></i></a>
                  <a href="https://www.linkedin.com/in/rowida-nagah/"><i className="fab fa-linkedin text-white"></i></a>
                  <a href="https://github.com/rowidanagah"><i className="fa fa-github text-white"></i></a>
                </div>
              </div>
              <p><strong> Rowida Nagah </strong> <br/> Full Stack Web Developer</p>
            </div>
           

              
            <div className="our-item our-hover3 col-md-2">
              <div className="imagee">
                <img src={RadyImage} alt="" width="100%"/>
                <div className="ourteam-layer d-flex justify-content-evenly align-items-center">
                  <a href="https://twitter.com/Yo_Rady"><i className="fab fa-twitter text-white"></i></a>
                  <a href="https://www.facebook.com/profile.php?id=100009245710721"><i className="fab fa-facebook text-white"></i></a>
                  <a href="https://www.linkedin.com/in/youssef-rady/"><i className="fab fa-linkedin text-white"></i></a>
                  <a href="https://github.com/Youssef-Rady"><i className="fa fa-github text-white"></i></a>
                </div>
              </div>
              <p><strong> Youssef Rady </strong> <br/>Full Stack Web Developer</p>
            </div>

            <div className="our-item our-hover4 col-md-2  ">
              <div className="imagee">
                <img src={OsamaImage} alt="" width="100%"/>
                <div className="ourteam-layer d-flex justify-content-evenly align-items-center">
                  <a href=""><i className="fab fa-twitter text-white"></i></a>
                  <a href="https://www.facebook.com/OsamaAhmedAlkatkoti"><i className="fab fa-facebook text-white"></i></a>
                  <a href="https://www.linkedin.com/in/oosamaahmed/"><i className="fab fa-linkedin text-white"></i></a>
                  <a href="https://github.com/OosamaAhmed"><i className="fa fa-github text-white"></i></a>
                </div>
              </div>
              <p><strong> Osama Ahmed </strong> <br/> Full Stack Web Developer</p>
            </div>
            <div className="our-item our-hover2 col-md-2 ">
              <div className="imagee">
                <img src={AbdallahImage} alt="" width="100%"/>
                <div className="ourteam-layer d-flex justify-content-evenly align-items-center">
                  <a href=""><i className="fab fa-twitter text-white"></i></a>
                  <a href=""><i className="fab fa-facebook text-white"></i></a>
                  <a href="https://www.linkedin.com/in/abdallah-abdelsabour/"><i className="fab fa-linkedin text-white"></i></a>
                  <a href="https://github.com/abdallah-abdelsabour"><i className="fa fa-github text-white"></i></a>
                </div>
              </div>
              <p><strong> Abdallah AbdelSabour </strong> <br/> Full Stack Web Developer</p>
            </div>
          

          
           
          </div>
        </div>
       

      </div>
    </div>
    </div>
 
  )
}
