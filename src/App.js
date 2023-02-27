import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import GuestHome from './pages/GuestHome';
import Navbar from './components/layout/Navbar';
import Login from './pages/login';
import Register from './pages/Registeration';
//import Navbar from './components/CustomNavbar';

import MentorProfile from './pages/MentorProfile';
import CustomFooter from './components/layout/CustomFooter';
import EditProfile from './components/profile/editProfile.js/EditProfile';

import Home from './pages/Home';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div style={{background:"#f5f5f7"}}>
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

    </div>
  )
}
// MentorProfile

export default App;
