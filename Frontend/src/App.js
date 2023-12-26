import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './page/home/home';
import MovieList from './component/movielist/movielist';
import React from 'react';
import MovieDetails from './page/moviedetails/moviedetails';
import Signup from './user_credentials/signup'
//import imdbHome from './user_credentials/home'
import Login from './user_credentials/login'


function App() {
  return (
    <div className="App">
        <Router>
          
            <Routes>
            <Route index element={<Login />}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/home" element={<Home />}></Route>
                <Route path="movie/:id" element={<MovieDetails/>}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                
            </Routes>
        </Router>
    </div>
  );
}

export default App;
