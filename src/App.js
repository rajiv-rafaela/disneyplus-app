import React from 'react';
import './App.css';
import Nav from "./page1/component/Nav/Nav"
import Hero from './page1/component/Hero/Hero'
import Watch from "./page1/component/Watch/Watch"
import Device from "./page1/component/Device/Device"
import Footer from "./page1/component/Footer/Footer"
import  {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";

import Login from './login/Login';
import Signup from './login/Signup';

import ErorrPage from './ErorrPage'; 

 




function App() {
  return (
    
    
    <div className='app'> 
    
     <Router>
     
   
    <Routes>
     
     <Route path="/" element= { <> <Nav/>, <Hero/>, <Watch/>  </>  } />
    
     <Route path="/loginpage" element= {<> < Login/>  </>} />
    
     <Route path='/signup' element= {   <Signup/> } />  
     
    <Route path="*" element= { <ErorrPage/> } />
     
     
     </Routes>
    </Router>
    
   
    
    </div>
  );
}

export default App;
