import React from "react"
import "./header.css"
import { useLocation,useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"
const Header =() =>{

    const location=useLocation()
    
    return(
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt=" images not found" /></Link>
                <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
            </div>
            <div className="headerRight">
            <h5>Welcome {location.state.id}</h5>  
            </div>
        </div>
    )
}

export default Header