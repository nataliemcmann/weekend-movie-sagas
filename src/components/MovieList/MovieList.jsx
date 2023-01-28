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

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const sendToDetails = ({movie}) => {
        history.push('/details');
        dispatch({
            type: 'SET_ID',
            payload: `${movie.id}`
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
                                onClick={sendToDetails}
                                />
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;