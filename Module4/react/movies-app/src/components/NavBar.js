import { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component{
    render(){
        return(
            <div style={{display:"flex",padding:'0.5rem',color:"blue"}}>
                 <Link to="/"  style={{textDecoration:"none"}}><h1>Movies App</h1></Link>
                 <Link to="favourites"  style={{textDecoration:"none"}}><h2 style = {{marginLeft:"2rem",marginTop:"2.5rem"}}>Favourites</h2></Link>
                {/* <h1>Movies App</h1>
                <h2 style = {{marginLeft:"2rem",marginTop:"2.5rem"}}>Favourites</h2> */}
            </div>
        )
    }
}

export default NavBar