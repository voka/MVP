import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Homepage from './pages/Homepage';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage></Homepage>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
