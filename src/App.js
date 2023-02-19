import logo from './logo.svg';
import './App.css';
import Login from './pages/login';
import Register from './pages/Registeration';
import { BrowserRouter , Switch , Route } from 'react-router-dom';
import Categories from './pages/Categories';
function App() {
  return (
    <div className="">
<BrowserRouter>
<Switch>
  <Route exact path="/login" component={Login} />
  <Route exact path="/register" component={Register} />
  <Route exact path="/cat" component={Categories} />
</Switch>

</BrowserRouter>
{/* <Login />
<Register /> */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
