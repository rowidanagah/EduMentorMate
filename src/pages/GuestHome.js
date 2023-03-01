import HeroSection from "../components/GuestHome/HeroSection";
import Testemonials from "../components/GuestHome/Testemonials";
import Trending from "../components/GuestHome/Trending";
import ExtraSection from "../components/GuestHome/ExtraSection";
import TitleSection from "../components/GuestHome/TitleSection";

function GuestHome()
{
    return (
        <div>
            <HeroSection />
            <TitleSection />
            <ExtraSection />
            <Trending />
            <Testemonials />
        </div>
    )
}

export default GuestHome;