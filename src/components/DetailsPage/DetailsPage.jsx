import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
//import app components
import GenreList from './GenreList';
import BackButton from './BackButton';
//mui components
import { Box, Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

function DetailsPage () {
        //declare dispatch
        const dispatch = useDispatch();

        //subscribe to movies and movieID reducer
        const movieDetails = useSelector(store => store.movieDetails);
        const movieID = useSelector(store => store.movieID);

        //grabbing id from route parameter
        let { id } = useParams();

        //fetch movieDetails fron db on page load
        useEffect(() => {
            console.log(id);
            dispatch({ 
                type: 'FETCH_DETAILS',
                payload: id });
        }, []);

    return (
        <>
            <BackButton />
            <Box sx={{p: 4}}> 
                <Grid 
                    flexDirection = "row"
                    flexWrap = "nowrap"
                    container spacing={2}
                    justifyContent="center"
                >
                    <Card 
                        sx={{ minWidth: 275}}>
                        <CardContent>
                            <h2>{movieDetails.title}</h2>
                            <img 
                                src={movieDetails.poster} 
                                alt={movieDetails.title}
                            /> 
                        </CardContent>
                    </Card>
                    <Card 
                        sx={{ maxWidth: 500}}
                    >
                        <CardContent>
                            <GenreList />
                            <p className="movieDesc">{movieDetails.description}</p>
                        </CardContent>
                    </Card>
                </Grid>
            </Box>
        </>
    )
}

export default DetailsPage;