import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function DetailsPage () {
        //declare dispatch
        const dispatch = useDispatch();
        //declare history
        // const history = useHistory();
        //subscribe to movies reducer
        const movieDetails = useSelector(store => store.movieDetails);
        const movieID = useSelector(store => store.movieID);

        useEffect(() => {
            console.log(movieID);
            dispatch({ 
                type: 'FETCH_DETAILS',
                payload: movieID });
        }, []);

    return (
        <>
        <h2>Specific {movieDetails.title} details!</h2>
        {/* <h3>{movie.title}</h3>
        <img src={movie.poster} alt={movie.title}/> */}
        </>
    )
}

export default DetailsPage;