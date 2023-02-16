import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
function App() {
  return (
    <div className=''>
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route exact path={"/"} component={Home}/>
    </Switch>
    </BrowserRouter>
  </div>
  );
}

export default App;
