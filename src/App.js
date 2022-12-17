import React from 'react';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import About from './About';
import Portfolio from './Portfolio';

export const AppContext = React.createContext();


const App = (() => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<About />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/portfolio' element={<Portfolio />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
});

export default App;
