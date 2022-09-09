import React from 'react'
import {Routes,Route} from 'react-router-dom';
import LoginPage from './pages/login';
import Home from './pages/Home'
import Profile from './pages/profile';

function App() {
 return (
     <Routes>
       <Route path="/" element={<Home />} exact/>
       <Route path="/login" element={<LoginPage />} exact />
       <Route path="/profile" element={<Profile />} exact />
     </Routes>   
 );
}

export default App;
