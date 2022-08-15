import { Component } from "react";
import {movies} from "../movieData";



class MovieList extends Component{
    render(){
       let moviesArr =   movies.results
       return(
        <>


 
<div>
           <h3 className=""><strong>Trending</strong></h3>
           </div>

            <div>
            {moviesArr.map((movieELe) => (
            <h5>{movieELe.original_title}</h5>
           ))}
            </div>


           
          
        </>

       )
    }
}

export default MovieList;