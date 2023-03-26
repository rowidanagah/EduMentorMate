import HeroSection from "../components/GuestHome/HeroSection";
import Testemonials from "../components/GuestHome/Testemonials";
import Trending from "../components/GuestHome/Trending";
import ExtraSection from "../components/GuestHome/ExtraSection";
import TitleSection from "../components/GuestHome/TitleSection";
import Team from "../components/Home/Team";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import boxshadow from "../assets/theme/base/boxShadows";
import boxShadow from "../assets/theme/functions/boxShadow";
//console.log("shdoooooooooo",boxshadow);
const { xxl } = boxshadow;

function GuestHome() {
  // const xxl = "0rem 1.25rem 1.6875rem 0rem rgba(0, 0, 0, 0.05)";
  console.log("shdoooooooooo", xxl);

  return (
    <div>
      <HeroSection />
      <TitleSection />
      <ExtraSection />
      <Trending />
      <Testemonials />
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Team />
      </Card>
    </div>
  );
}

export default GuestHome;
