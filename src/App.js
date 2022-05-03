import './App.css';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from './sites/Homepage';
import Histroy from './sites/Histroy';
import React from 'react';
import './mystyles.css';
function App() {
  return (
    <div >
      <BrowserRouter>
        <div className='background'>
        <Routes>
        <Route  path='/' element={<Homepage/>}></Route>
        <Route path='/somepath' element={<Histroy/>}></Route>
        <Route path="*" 
        element={
        <React.Fragment>
        <h1>Ooops... diese Adresse befindet sich nicht bei uns</h1>
        </React.Fragment>}></Route>
        </Routes>
        </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
