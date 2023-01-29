import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {
    //declare dispatch
    const dispatch = useDispatch();
    
    //declare history
    const history = useHistory();

    //subscribe to movies reducer
    const movies = useSelector(store => store.movies);

    //get movie list upon page load
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //send user to the details page on image click
    const sendToDetails = (event, {movie}) => {
        event.preventDefault();
        let id = movie.id
        console.log(id);
        history.push(`/${id}`);
        dispatch({
            type: 'SET_ID',
            payload: id
        })
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img 
                                src={movie.poster} 
                                alt={movie.title}
                                onClick={(event) =>{sendToDetails(event, {movie})}}
                                />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;