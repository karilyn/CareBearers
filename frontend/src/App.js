import './App.css';
import LoginSignupContainer from './components/Login_Signup/LoginSignupContainer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import DescriptionContainer from './components/Profile/DescriptionContainer';

function App() {

  return (
    <div className="App">
      <NavigationBar />
     <LoginSignupContainer /> 
      {/* <DescriptionContainer />  */}
    </div>
  );
}

export default App;
