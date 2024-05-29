import logo from './logo.svg';
import './App.css';
import FaqSection from './FaqSection';
import Educators from './Educators';
import Navbar from './Navbar';
import Creditanalyst from './Creditanalyst';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';


function App() {
  return (
    <>
    {/* <Home/> */}
    <BrowserRouter>
          <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="creditanalyst" element={<Creditanalyst/>}/>
            </Routes>
            </BrowserRouter>
    {/* <Creditanalyst/> */}
    </>
  );
}

export default App;
