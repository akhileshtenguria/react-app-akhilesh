import React  from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import About from './About';
import Contact from './Contact';
import AddNotes from './AddNotes';
import Home from './Home';
import User from './User';
// import Search from './Search';
import Search from './search';
import Errorpage from './Errorpage';

function App() {
 
  return (
        <>
        
          <Routes> 
            <Route  path="/" element={<Home/> } >
                <Route path="/contact" element={<Contact/> } /> 
                <Route path="/about" element={<About/> } /> 
                <Route path="/addnotes" element={<AddNotes/> } /> 
                <Route path="/search" element={<Search/> } /> 
                <Route path="/user/:fname/:lname" element={<User/>} /> 
                <Route path="*" element={<Errorpage/> } /> 
            </Route> 
          </Routes> 
      
         
        
        </>
  );
}

export default App;
