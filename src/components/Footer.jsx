import React from 'react'

export default function Footer() {
  return (
    <div>
          <div style={{backgroundColor:"#172e59"}} class="container-fluid mt-5 text-white ">
        <div class="d-flex justify-content-between">
            <div class="mb-4">
                Follow
                {/* <!-- Facebook --> */}
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fab fa-facebook-f"></i></a>

                {/* <!-- Twitter --> */}
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fab fa-twitter"></i></a>

                {/* <!-- Google --> */}
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fab fa-google"></i></a>

                {/* <!-- Instagram --> */}
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fab fa-instagram"></i></a>

                {/* <!-- Linkedin --> */}
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fab fa-linkedin-in"></i></a>

                {/* <!-- Github --> */}
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fab fa-github"></i></a>
            </div>
            <div>
                Emotions
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fa-regular fa-face-laugh"></i></a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fa-regular fa-face-laugh-wink"></i></a>
                <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i
                        class="fa-regular fa-face-laugh-squint"></i></a>

            </div>
        </div>

        <div class="row ">
            <div class="col-lg-3 mt-3">
                <div class="about">
                    <span class="text-white">About Us</span>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam modi culpa ex ab hic sint?</p>
                    <i class="fa-solid fa-house text-primary"></i><small>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit.
                        Velit, assumenda.</small>
                    <br/> <br/>
                    <i class="fa-solid fa-phone-volume text-primary"></i><small> +20 010 199 72 </small>
                    <br/> <br/>
                    <a style={{color: "#212529"}} class="text-decoration-none text-white" target="_blank"
                        href="mailto:kareemtall99@gmail.com"> <i class="fa-solid fa-envelope text-primary"></i>
                        kareemtall99@gmail.com </a>
                </div>
            </div>
            <div class="col-lg-2 mt-3">
                <div class="nav">
                    <ul >
                        <span class="text-white">For Clients</span> <br/> <br/>
                        <li>Web Hosting</li>
                        <li>How to Hire</li>
                        <li>Talent Marketplace</li>
                        <li>Project Catalog</li>
                        <li>Talent Scout</li>
                        <li>Enterprise</li>
                        <li>Enterprise</li>
                        <li>Direct Contracts</li>
                        <li>Hire Worldwide</li>

                    </ul>
                </div>
            </div>
            <div class="col-lg-2 mt-3">
                <div class="nav">

                    <ul>
                        <span class="text-white">For Talent</span> <br/> <br/>
                        <li>How to Find Work</li>
                        <li>Direct Contracts</li>
                        <li>Direct Contracts</li>
                        <li>Direct Contracts</li>
                    </ul>
                </div>
            </div>
            <div class="col-lg-2 mt-3">
                <div class="nav">
                    <ul >
                        <span class="text-white">Resources</span> <br/> <br/>
                        <li>Help & Support</li>
                        <li>Success Stories</li>
                        <li>Success Stories</li>
                        <li>Success Stories</li>
                        <li>Community</li>
                        <li>Affiliate Program</li>
                        <li>Free Business tools</li>
                    </ul>
                </div>
            </div>

            <div class="col-lg-3 mt-3">
                <div class="tags d-flex flex-wrap">

                    <ul>
                        <span class="text-white">Company</span> <br/><br/>
                        <li>About Us</li>
                        <li>Leadership</li>
                        <li>Investor Relations</li>
                        <li>Careers</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Contact Us</li>
                        <li>Trust, Safety & Security</li>
                        <li>Trust, Safety & Security</li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
    <footer style={{backgroundColor:"#172e59"}} class="container-fluid ">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <a class="text-decoration-none text-white" href="">KareemMohsen 2013 </a> Primary Policy
                </div>
                <div class="col-lg-6 text-end">
                    <i class="fa-regular text-light  fa-user"></i>
                    <i class="fa-regular text-light ms-3 fa-image"></i>
                    <i class="fa-regular text-light ms-3 fa-envelope"></i>
                    <i class="fa-regular text-light ms-3 fa-star"></i>
                    <i class="fa-regular text-light ms-3 fa-heart"></i>
                    <i class="fa-regular text-light ms-3 fa-comment"></i>
                    <i class="fa-regular text-light ms-3 fa-face-smile"></i>
                    <i class="fa-regular text-light ms-3 fa-face-surprise"></i>
                    <i class="fa-regular text-light ms-3 fa-face-smile-wink"></i>
                    <i class="fa-regular text-light ms-3 fa-face-flushed"></i>

                </div>
            </div>
        </div>
    </footer>
    </div>
  )
}
