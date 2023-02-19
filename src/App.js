import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import GuestHome from './pages/GuestHome';
import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={GuestHome}/>
        </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default App;
