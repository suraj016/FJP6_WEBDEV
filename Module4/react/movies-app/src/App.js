import NavBar from './components/NavBar';
import './App.css';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import Fav from './components/Fav';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'


function App() {
  return (
   <>
    {/* <NavBar/> */}
   {/* <Banner/>
   <MovieList/> */}

   {/* <Fav/> */}



   <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<><Banner/><MovieList/></>}/>
        <Route path="/favourites" element={<Fav/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
