import NavBar from './components/NavBar';
import './App.css';
import Banner from './components/Banner';
import MovieList from './components/MovieList';
import Fav from './components/Fav';


function App() {
  return (
   <>
    <NavBar/>
   {/* <Banner/>
   <MovieList/> */}

   <Fav/>
   </>
  );
}

export default App;
