import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/Home'
import Profile from './pages/profile';

function App() {
 return (
     <Routes>
       <Route path="/" element={<Home />} exact/>
       <Route path="/login" element={<Login />} exact />
       <Route path="/profile" element={<Profile />} exact />
     </Routes>   
 );
}

export default App;
