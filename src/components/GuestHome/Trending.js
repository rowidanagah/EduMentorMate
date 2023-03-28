import React from "react";
import Trend from "./Trends";


function Trending() {
    return (
        <div style={{marginTop:"7%"}} className="container">
            <div className="row m-4 justify-content-evenly ">
                {/* <h4 className="col-12 mb-4 text-center display-6">Trending on Medium</h4> */}

                <div class="about-title text-center mb-4">
                <h4 className="text-center display-6 ">Trending on Medium</h4>
                <div class="line "></div>
                <div class="about-layer">
                    <h4 >Trending</h4>
                </div>
                </div>
                
                <Trend id="01" image="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg" creator="Youssef Rady" title="The Maze is in the mouse" date="Feb16"/>
                <Trend id="02" image="https://raw.githubusercontent.com/codingwithmuhib/Online-Educational-Website/main/src/assests/images/testimonial01.png" creator="Youssef Rady" title="The Maze is in the mouse" date="Feb16"/>
                <Trend id="03" image="https://raw.githubusercontent.com/codingwithmuhib/Online-Educational-Website/main/src/assests/images/testimonial01.png" creator="Youssef Rady" title="The Maze is in the mouse" date="Feb16"/>
                <Trend id="04" image="https://raw.githubusercontent.com/codingwithmuhib/Online-Educational-Website/main/src/assests/images/testimonial01.png" creator="Youssef Rady" title="The Maze is in the mouse" date="Feb16"/>
                <Trend id="05" image="https://raw.githubusercontent.com/codingwithmuhib/Online-Educational-Website/main/src/assests/images/testimonial01.png" creator="Youssef Rady" title="The Maze is in the mouse" date="Feb16"/>
                <Trend id="06" image="https://raw.githubusercontent.com/codingwithmuhib/Online-Educational-Website/main/src/assests/images/testimonial01.png" creator="Youssef Rady" title="The Maze is in the mouse" date="Feb16"/>
            </div>
        </div>
    );
}
export default Trending;