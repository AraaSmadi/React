
import {BrowserRouter, Routes,  Route} from 'react-router-dom'; //
import Home from './Components/Home';
import About from './Components/About';
import Nav from './Components/Nav';
import React from 'react';


function App(){
 return(
<BrowserRouter>
<div className='App'>
<Nav/>
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
</Routes> 
</div>
</BrowserRouter>
 );

  }

export default App;
