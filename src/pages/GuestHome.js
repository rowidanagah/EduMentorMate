import HeroSection from "../components/GuestHome/HeroSection";
import Testemonials from "../components/GuestHome/Testemonials";
import Trending from "../components/GuestHome/Trending";
import ExtraSection from "../components/GuestHome/ExtraSection";
import TitleSection from "../components/GuestHome/TitleSection";
import Testimonials from "../components/Home/Testomonel"

import { Fragment } from "react";
import Newsletter from "../components/Home/Newsletter";



function GuestHome()
{
    return (
        <div className="background">
       
            
            <HeroSection />
            <Testimonials/>
            <Trending />
            <ExtraSection />
            <Testemonials/>
            <Newsletter/>
        

        </div>
    )
}

export default GuestHome;