import React from 'react';
import { useHistory } from 'react-router-dom';
//mui import
import Button from '@mui/material/Button';


function BackButton () {
    //declare history
    const history = useHistory();

    //send user to movieList page on button click
    const sendHome = (event) => {
        event.preventDefault();
        history.push('/');
    }

    return (
        <>
        <Button 
            style={{
                backgroundColor: '#222',
                color: 'white'
            }}
            size="large"
            variant="contained"
            onClick={(event)=>{sendHome(event)}}>Back</Button>
        </>
    )
}

export default BackButton;