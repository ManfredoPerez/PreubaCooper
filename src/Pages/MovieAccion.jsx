import { useEffect, useState } from 'react'
import { fetchData } from '../Service/apiService';
import { Carousel } from 'react-bootstrap';

const MovieAccion = () => {

    const IMAGEN_BASE_URL = 'https://image.tmdb.org/t/p/w500';
   const [moviesAccion, setMoviesAccion] = useState([]);
//    const [moviesTreding, setMoviesTreding] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
          const pagedata = await fetchData('movie/popular');
          setMoviesAccion(pagedata)
        };
    
        fetchMovies();
      }, [])
      
      const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
      arr.slice(i * size, i * size + size)
    );

  const chunkedMovies = chunk(moviesAccion, 3);
  return (
    //     <div className='container'>
    //         <h1>Peliculas de accion</h1>
    //         <div className='row'>
    //             {moviesAccion.map((movie) => (
    //                 <div key={movie.id} className='col-md-4 mb-4'>
    //                     <div className='card'>
    //                         <img src={`${IMAGEN_BASE_URL}${movie.poster_path}`} className='card-img-top' alt="" />
    //                     </div>
    //                     <div className='card-body'>
    //                         <h6 className='card-title'> {movie.title} </h6>
    //                         <p>{movie.release_date}</p>
    //                         <p className='card-text'>
    //                             <strong>Calificacion: </strong> {movie.vote_average}
    //                         </p>
    //                     </div>
    //                 </div>
    //             ))}
                
    //         </div>
    // </div>
    <div className="container">
      <h1 className="my-4">Películas de Estreno</h1>
      <Carousel>
        {chunkedMovies.map((movieChunk, index) => (
          <Carousel.Item key={index}>
            <div className="row">
              {movieChunk.map((moviesAccion) => (
                <div key={moviesAccion.id} className="col-md-4">
                  <img
                    className="d-block w-100"
                    src={`${IMAGEN_BASE_URL}${moviesAccion.poster_path}`}
                    alt={moviesAccion.title}
                  />
                  <h5 className='card-title'>{moviesAccion.title}</h5>
                    <p>{moviesAccion.release_date}</p>
                    <p>
                      <strong>Calificación:</strong> {moviesAccion.vote_average}
                    </p>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  )
}

export default MovieAccion