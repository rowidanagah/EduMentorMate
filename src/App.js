import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
//import { Routes, Route, Link, Navigate } from 'react-router-dom';

import "./App.css";
import GuestHome from "./pages/GuestHome";
import Navbar from "./components/layout/Navbar";

// import Login from "./pages/auth/Login";
import Register from "./pages/auth/registeration";
import Login from "./pages/login";
// import Register from "./pages/Registeration";

//import Navbar from './components/CustomNavbar';

import MentorProfile from "./pages/MentorProfile";

import Home from "./pages/Home";
import Footer from "./components/layout/Footer";
import BlogView from "./pages/BlogView";
import CreateBLog from "./pages/CreateBlog";
import  FullCalendar  from "./pages/Calender" 
import EditMentor from "./components/profile/EditMentor";

import Categories from "./pages/Categories";
import Room from "./pages/Room";
import Hall from "./pages/Hall";
import LaunchSession from "./pages/LaunchSession";
import Sessions from "./pages/SessionsSection";
import { useEffect } from "react";
import PrivateRoute from "./private_route";
import CardSession from "./components/Home/CardSession";
import SessionDetail from "./pages/SessionDetail";
// import PayPalComponent from "./pages/payment";

import PageNotFound from "./pages/pagenotfound";
import EmailVerify from "./pages/Email-verify";
// import requireAuth from "./private_route";
// c5ad076e14b57d1504fc830f0cd3c12f9cd287d6A

//        <Route exact path={"/home"} component={Home} />

function App() {
  // let checkLogin = localStorage.getItem("token") || '';
  // let isLogin = checkLogin ? true : false;
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={GuestHome} />
        
        {/* <Route exact path="/pay" component={PaymentForm} /> */}
        <Route exact path="/email-verify/:token" component={EmailVerify} />
        {/* <Route exact path="/pay" component={PayPalComponent} /> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute path="/home" component={Home} />
        <PrivateRoute exact path="/calender/:sessionid" component={FullCalendar} />
        {/* <Route exact path="/cat" component={Categories} /> */}
        <PrivateRoute exact path="/hall" component={Hall} />
        <PrivateRoute exact path="/sessions" component={Sessions} />
        <PrivateRoute exact path="/mentorProfile/:id" component={MentorProfile} />
        <PrivateRoute exact path="/viewBlogDetails" component={BlogView} />
        <PrivateRoute exact path="/CreateBLog" component={CreateBLog} />
        {/* <Route exact path="/calender/:sessionid" component={Calender} /> */}
        <PrivateRoute exact path="/blog/:id" component={BlogView} />
        <PrivateRoute exact path="/cat" component={Categories} />
        <PrivateRoute exact path="/room/:roomID" component={Room} />
        <PrivateRoute exact path="/hall" component={Hall} />
        <PrivateRoute exact path="/categories" component={Categories} />
        <PrivateRoute exact path="/editMentor" component={EditMentor} />
        <PrivateRoute exact path="/launchSession" component={LaunchSession} />
        <PrivateRoute exact path="/SessionDetail/:id" component={SessionDetail} />
        <Route exact path="*" component={PageNotFound} />

      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
// Mentorrofile

export default App;
