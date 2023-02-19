import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/CustomNavbar';
import Home from './pages/Home';
function App() {
  return (
    <div className=''>
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path={"/home"} component={Home}/>
    </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
