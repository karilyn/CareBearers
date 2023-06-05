import './App.css';
import LoginSignupContainer from './components/Login_Signup/LoginSignupContainer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Hero from './components/Hero_Section/Hero';
import DescriptionContainer from './components/Profile/DescriptionContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<Hero />} />
            <Route exact path='/login' element={<LoginSignupContainer />} />
            <Route exact path='/about' element={<DescriptionContainer />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
