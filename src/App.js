import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import GuestHome from "./pages/GuestHome";
import Navbar from "./components/layout/Navbar";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/registeration";
// import Login from "./pages/login";
// import Register from "./pages/Registeration";

//import Navbar from './components/CustomNavbar';

import MentorProfile from "./pages/MentorProfile";

import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import BlogView from "./pages/BlogView";
import CreateBLog from "./pages/CreateBlog";
import { Calender } from "./pages/Calender";
import EditMentor from "./components/profile/EditMentor";

import Categories from "./pages/Categories";
import Room from "./pages/Room";
import Hall from "./pages/Hall";
import LaunchSession from "./pages/LaunchSession";
import Sessions from "./pages/SessionsSection";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={GuestHome} />
        <Route exact path={"/home"} component={Home} />
        <Route exact path="/sessions" component={Sessions} />

        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/mentorProfile" component={MentorProfile} />
        <Route exact path="/viewBlogDetails" component={BlogView} />
        <Route exact path="/CreateBLog" component={CreateBLog} />
        <Route exact path="/calender/:sessionid" component={Calender} />
        <Route exact path="/blog/:id" component={BlogView} />
        <Route exact path="/cat" component={Categories} />
        <Route exact path="/room/:roomID" component={Room} />
        <Route exact path="/hall" component={Hall} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/editMentor" component={EditMentor} />
        <Route exact path="/launchSession" component={LaunchSession} />

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
// Mentorrofile

export default App;
