import './App.css';
import ErrorPage from './components/Error-page/Error-page';
import Home from './components/Home';
import LoginSignupContainer from './components/Login_Signup/LoginSignupContainer';
import NavigationBar from './components/NavigationBar/NavigationBar';
import DescriptionContainer from './components/Profile/DescriptionContainer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div className='content'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<LoginSignupContainer />} />
            <Route exact path='/about' element={<DescriptionContainer />} />
          </Routes>
          {/* <LoginSignupContainer />  */}
          {/* <DescriptionContainer />  */} 
        </div>
      </div>
    </Router>
  );
}

export default App;
