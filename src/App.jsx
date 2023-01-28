import './App.css';
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Header from './components/header/header'
import BottomNav from './components/Navbar/mainNav'
import Container from '@mui/material/Container'
import Trending from './components/pages/trending/trending';
import Movies from './components/pages/movies/movies'
import Search from './components/pages/search/search'
import Tvshows from './components/pages/tvshows/tvshows'
import Footer from './components/footer/footer';
function App() {
  return (
  
    <BrowserRouter>
    <Header/> 
   <div className="app">
    <Container>  
      <Routes>
        <Route path='/' element={<Trending/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/tvshows' element={<Tvshows/>}/>
      </Routes>
    </Container>
   </div>
   <BottomNav/>
   <Footer/>
    </BrowserRouter>
      
  );
}

export default App;
