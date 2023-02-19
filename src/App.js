import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import GuestHome from './pages/GuestHome';
import Navbar from './components/Navbar';
import Login from './pages/login';
import Register from './pages/Registeration';
//import Navbar from './components/CustomNavbar';

import Home from './pages/Home';

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
        </Switch>
      </BrowserRouter>

    </>
    )
}

export default App;
