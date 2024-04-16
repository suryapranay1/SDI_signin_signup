import React from 'react';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import SimpleSheet from './Loginsheet.tsx';
import SignupSheet from './signupsheet.tsx';
import ForgetPassSheet from './Forgetpasssheet.tsx';

function Appp() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<SimpleSheet/>} />
      <Route path="/signup" element={<SignupSheet/>} />
      <Route path="/Forget" element={<ForgetPassSheet/>} />
      

    </Routes>
    </BrowserRouter>
    
  );
}

export default Appp;
