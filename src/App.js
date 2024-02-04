import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './home';
import Resources from './resources';
import Budget from './budget';
import Points from './points';
import MiniMe from './minime';

import Closet from './closet';

import './App.css';

import { useState } from 'react';


function App() {



  return (

    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/budget/308190645117" element={<Budget />} />
          <Route path="/budget/308190645117/rent" element={<Points percentage={25} />} />
          <Route path="/budget/308190645117/food" element={<Points percentage={100} />} />
          <Route path="/budget/308190645117/loans" element={<Points percentage={30} />} />
          <Route path="/budget/308190645117/gas" element={<Points percentage={70} />} />
          <Route path="/budget/308190645117/trip" element={<Points percentage={4} />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/minime/308190645117/sad" element={<MiniMe state={'happy'} />} />
          <Route path="/minime/308190645117/happy" element={<MiniMe state={'sad'} />} />
          <Route path="/shoppe/308190645117" element={<Closet />} />

        </Routes>

      </BrowserRouter>

    </div>

  );

}


export default App;