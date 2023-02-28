import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import GuestHome from "./pages/GuestHome";
import Navbar from "./components/layout/Navbar";
import Login from "./pages/login";
import Register from "./pages/Registeration";
//import Navbar from './components/CustomNavbar';

import MentorProfile from "./pages/MentorProfile";

import Home from './pages/Home';
import Footer from './components/layout/Footer';
import BlogView from './pages/BlogView';
import CreateBLog from './pages/CreateBlog';
import { Calender } from "./pages/Calender";
import logo from './logo.svg';
import './App.css';

import Categories from './pages/Categories';

function App() {
  return (
    <div style={{ background: "#f5f5f7" }}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={GuestHome} />
          <Route exact path={"/home"} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/mentorProfile" component={MentorProfile} />
          <Route exact path="/viewBlogDetails" component={BlogView} />
          <Route exact path="/CreateBLog" component={CreateBLog} />
          <Route exact path="/calender" component={Calender} />
          <Route exact path="/blog" component={BlogView} />
          <Route exact path="/cat" component={Categories} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
    
  );
}
// MentorProfile

export default App;
