import HeroSection from "../components/GuestHome/HeroSection";
import Testemonials from "../components/GuestHome/Testemonials";
import Trending from "../components/GuestHome/Trending";
import ExtraSection from "../components/GuestHome/ExtraSection";
import TitleSection from "../components/GuestHome/TitleSection";
import Testimonials from "../components/Home/Testomonel"
import { Fragment } from "react";
import Newsletter from "../components/Home/Newsletter";
import ChooseUs from "../components/Home/ChooseUs";
import Ourteam from "../components/Home/Ourteam";






function GuestHome()
{
    return (
        <div className="background">
       
            
            <HeroSection />
            <Testimonials/>
            <Trending />
            {/* <ExtraSection /> */}
            <ChooseUs/>
            {/* <Testemonials/> */}
            <Ourteam/>
            <Newsletter/>
           
        

        </div>
    )
}

export default GuestHome;