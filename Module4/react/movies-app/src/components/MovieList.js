import { Component } from "react";
import {movies} from "../movieData";



class MovieList extends Component{
    render(){
       let moviesArr =   movies.results

       return(
        <>
       
       <div>
                    <h3 className="text-center"><strong>Trending</strong></h3>
                </div>

          <div className="movies-list">
             {moviesArr.map((movieEle) => {

                return(
                    <div className="card movie-card">
                    <img src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} style = {{heigth: '40vh', width: '20vw'}} className="card-img-top movie-img" alt="..."/>
                    
                      <h5 className="card-title movie-title">{movieEle.title}</h5>
                   <div style= {{display: 'flex', justifyContent: 'center'}}>
                   <a href="#" type="button" class="btn btn-primary movies-button">Add to favourites</a>
                   </div>
                  </div>
                )
                
                  
                
             })}
          </div>
              
        </>
       )

    }
       
    }    

export default MovieList;