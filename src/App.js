import './App.css';
import Login from './pages/Login'
import Nav from './components/Nav'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      
      <Nav/>
        
          <Routes>
            
          <Route path='/landing'  element={<LandingPage/>}/>
              <Route path='/'  element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
          </Routes>
        
      
      
      {/* <Login/> */}
      {/* <LandingPage/> */}
      {/* <Footer/> */}
    </div>
  );
}

export default App;
