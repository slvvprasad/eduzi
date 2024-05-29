import logo from './logo.svg';
import './App.css';

import Creditanalyst from './Creditanalyst';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
// import Checkpage from './Checkpage';



function App() {
  return (
    <>
   {/* <Checkpage/> */}
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
