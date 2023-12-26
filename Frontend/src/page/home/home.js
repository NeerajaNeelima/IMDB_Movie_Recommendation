import React, { useEffect, useState } from "react"

import "./home.css"
import Header from '../../component/header/header';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom"
import MovieList2 from "../../component/movielist2/movielist2";
const Home = () => {
    
    const [popularmovies, setpopularmovies ]=useState([])
    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res =>res.json())
        .then(data => setpopularmovies(data.results))
    }, [])
    return(
        <><Header />
            <div className="poster">
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                    >
                        {
                            popularmovies.map(movie => (
                                <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`}>
                               <div className="posterImage">
                               <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt="img not found"/>
                               </div>
                               <div className="posterImage__overlay">
                               <div className="posterImage__title">{movie ? movie.original_title: ""}</div>
                               <div className="posterImage__runtime">
                                {movie ? movie.release_date: ""}
                                <span className="posterImage__rating">
                                    {movie ? movie.vote_average: ""}
                                    <i className="fas fa-star" />{" "}
                                </span>
                               </div>
                               <div className="posterImage__description">{movie ? movie.overview: ""}</div>
                               </div>
                               </Link>
                            ))
                        }
                    </Carousel>
                    <MovieList2 />
            </div>
        </>    
    )
}
export default Home