import HeroSection from "./HeroSection";
import Testemonials from "./Testemonials";
import Trending from "./Trending";
import ExtraSection from "./ExtraSection";

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