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
                    <img src="https://www.cnet.com/a/img/resize/c2372505b1ec497b5e8f397f9ff807f8ef4438c3/2021/12/14/76af5f8b-4ae5-4eae-b4d7-b5ff968ef9fa/spider-man-no-way-home-osx1440-comp-v005-300dpi-1003.jpg?auto=webp&fit=crop&height=675&width=1200" style = {{heigth: '40vh', width: '20vw'}} className="card-img-top movie-img" alt="..."/>
                    
                      <h5 className="card-title movie-title">{movieEle.original_title}</h5>
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