import HeroSection from "../components/HeroSection";
import Testemonials from "../components/Testemonials";
import Trending from "../components/Trending";
import ExtraSection from "../components/ExtraSection";

function GuestHome()
{
    return (
        <div>
            <HeroSection />
            <ExtraSection />
            <Trending />
            <Testemonials />
        </div>
    )
}

export default GuestHome;