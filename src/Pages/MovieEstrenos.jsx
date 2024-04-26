// import React from 'react'
// import 'boostrap/dist/css/boostrap.min.css';
// import axios from "axios";
import { useEffect, useState } from "react";
import { fetchData } from "../Service/apiService";



const MovieEstreno = () => {

   //obtnermos la APi

   const IMAGEN_BASE_URL = 'https://image.tmdb.org/t/p/w500';
   const [movies, setMovies] = useState([]);
 
 
  //  useEffect(() => {
  //    const fetchMovies = async () =>  {
  //      try {
  //        const response = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  //        setMovies(response.data.results);
  //      } catch (error) {
  //        console.error('Error para mostrar las peliculas: ', error);
  //      }
  //    };
 
  //    fetchMovies();
  //  }, [])

  useEffect(() => {
    const fetchMovies = async () => {
      const pagedata = await fetchData('movie/upcoming');
      setMovies(pagedata)
    };

    fetchMovies();
  }, [])

  return (

    <div className='container '>
            <h1>Peliculas de accion</h1>
            <div className='row'>
                {movies.map((movie) => (
                    <div key={movie.id} className=''>
                        <div className='card'>
                            <img src={`${IMAGEN_BASE_URL}${movie.poster_path}`} className='card-img-top' alt="" />
                        </div>
                        <div className='card-body'>
                            <h6 className='card-title'> {movie.title} </h6>
                            <p>{movie.release_date}</p>
                            <p className='card-text'>
                                <strong>Calificacion: </strong> {movie.vote_average}
                            </p>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    // <div>
    //   <h2>Estrenos</h2>
    //   <div className="card" > 
    //     <div className="card-body">
    //       {movies.map((movie) =>(
    //         <li  key={movie.id}>
    //           <h5 >{movie.original_title}</h5>
    //           <img  className="card-img-top" src={`${IMAGEN_BASE_URL}${movie.poster_path}`} alt="" />
    //           <h6 className="card-subtitle mb-2 text-muted">{movie.release_date}</h6>
    //         </li>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  )
}

export default MovieEstreno