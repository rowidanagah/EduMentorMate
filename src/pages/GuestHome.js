import HeroSection from "../components/HeroSection";
import Testemonials from "../components/Testemonials";
import Trending from "../components/Trending";
import ExtraSection from "../components/ExtraSection";
import TitleSection from "../components/TitleSection";

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