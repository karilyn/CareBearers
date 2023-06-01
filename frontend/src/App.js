import './App.css';
import LoginSignupContainer from './components/Login_Signup/LoginSignupContainer';
import NavigationBar from './components/NavigationBar/NavigationBar';

function App() {

  return (
    <div className="App">
      <NavigationBar />
      <LoginSignupContainer />
    </div>
  );
}

export default App;
