import './App.css';
import LoginSignupContainer from './components/Login_Signup/LoginSignupContainer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero_Section/Hero';
import DescriptionContainer from './components/Profile/DescriptionContainer';

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <Hero />
      <LoginSignupContainer />


      {/* <DescriptionContainer />  */}

    </div>
  );
}

export default App;
