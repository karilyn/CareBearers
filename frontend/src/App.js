import './App.css';
import LoginSignupContainer from './components/Login_Signup/LoginSignupContainer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero_Section/Hero';

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <LoginSignupContainer />
      <header>
        <Hero />
      </header>
    </div>
  );
}

export default App;
