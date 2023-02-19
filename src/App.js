import logo from './logo.svg';
import './App.css';
import MentorProfile from './pages/MentorProfile';
import CustomFooter from './components/CustomFooter';
import EditProfile from './components/profile/editProfile.js/EditProfile';


function App() {
  return (
    <div className="">
      <div className='App'>
        <MentorProfile />
{/*         <EditProfile/>
 */}      </div>
      <CustomFooter />
    </div>
  );
}

export default App;
