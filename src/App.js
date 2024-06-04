import logo from './logo.svg';
import './App.css';

import Creditanalyst from './Creditanalyst';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Homehero from './Homehero';
// import PlacedStudents from './PlacedStudents';
// import Checkpage from './Checkpage';



function App() {
  return (
    <>
    {/* <Homehero/> */}
   {/* <Checkpage/> */}
   {/* <PlacedStudents/> */}
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
