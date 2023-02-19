import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import GuestHome from './pages/GuestHome';
import Navbar from './components/Navbar';
import Login from './pages/login';
import Register from './pages/Registeration';
//import Navbar from './components/CustomNavbar';

import MentorProfile from './pages/MentorProfile';
import CustomFooter from './components/CustomFooter';
import EditProfile from './components/profile/editProfile.js/EditProfile';


import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={GuestHome} />
          <Route exact path={"/home"} component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/mentorProfile" component={MentorProfile} />
        </Switch>
        <Footer/>
      </BrowserRouter>

    </>
  )
}
// MentorProfile

export default App;
