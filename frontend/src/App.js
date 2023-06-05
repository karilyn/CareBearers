import './App.css';
import LoginSignupContainer from './components/Login_Signup/LoginSignupContainer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero_Section/Hero';
import DescriptionContainer from './components/Profile/DescriptionContainer';
import Calendar from 'react-calendar';

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <div className="hero">
        <Hero />
      </div>
      <LoginSignupContainer />


      {/* <DescriptionContainer />  */}

    </div>
  );
}

export default App;
