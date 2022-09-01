import { Component } from "react";
//import {movies} from "../movieData";
import axios from 'axios';



class MovieList extends Component{
   constructor(){
      super();
      this.state={
         hover:"",
         pArr:[1],
         movies:[],
         currPage:1
      }
   }

   async componentDidMount(){
      console.log("Component Did Mount");
     // https://api.themoviedb.org/3/movie/popular?api_key=7625eb597151e5bf891aa1ae42b1bc3d
    //  const res = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=7625eb597151e5bf891aa1ae42b1bc3d');
   
    const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81242a2aa2066e052c78ec9ac1700c59&language=en-US&page=${this.state.currPage}`);
      console.log(res.data);
      this.setState({
         movies:[...res.data.results]
      })
   }

   changeMovies = async()=>{
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=81242a2aa2066e052c78ec9ac1700c59&language=en-US&page=${this.state.currPage}`);
      console.log(res.data);
      this.setState({
         movies:[...res.data.results]
      })
   }

   handleNext=()=>{
      this.setState({
         pArr:[...this.state.pArr,this.state.pArr.length+1],
         currPage:this.state.currPage+1
      }, this.changeMovies)
     
   }

   handlePrevious=()=>{
if(this.state.currPage!=1){

   this.setState({
      currPage:this.state.currPage-1
   },this.changeMovies);
}

   }


   handlePageClick=(ele)=>{

      if(this.state.currPage!=1){
this.setState({
   currPage: ele
},this.changeMovies);
      }
   }



    render(){
      console.log("rendered");
    //   let moviesArr =   movies.results

    

       return(
        <>
       
       <div>
                    <h3 className="text-center"><strong>Trending</strong></h3>
                </div>

          <div className="movies-list">
             {this.state.movies.map((movieEle) => {

                return(
                    <div className="card movie-card" onMouseEnter={()=>this.setState({hover:movieEle.id})}  onMouseLeave={()=>this.setState({hover:""})}>
                    <img src={`https://image.tmdb.org/t/p/original${movieEle.backdrop_path}`} style = {{heigth: '40vh', width: '20vw'}} className="card-img-top movie-img" alt="..."/>
                    
                      <h5 className="card-title movie-title">{movieEle.title}</h5>
                    
                    
                   <div style= {{display: 'flex', justifyContent: 'center'}}>
                   {this.state.hover == movieEle.id && ( <a href="#" type="button" class="btn btn-primary movies-button">Add to favourites</a>)}

                   </div>
                  </div>
                )
                
                  
                
             })}
          </div>

          <div style = {{display:"flex", justifyContent: "center"}}>
          <nav aria-label="Page navigation example">
  <ul className="pagination">
    <li className="page-item"><a className="page-link" onClick={this.handlePrevious}>Previous</a></li>
    {this.state.pArr.map((ele)=>(
                            <li className="page-item"><a className="page-link" onClick={()=>this.handlePageClick(ele)}>{ele}</a></li>
                        ))}

    <li className="page-item"><a className="page-link"  onClick={this.handleNext}>Next</a></li>
  </ul>
</nav>
          </div>


          
              
        </>
       )

    }
       
    }    

export default MovieList;