import React from 'react';

function Child() {
// We can use the `useParams` hook here to access
// the dynamic pieces of the URL.
    

    return (
        <div>
        <h3>ID: {id}</h3>
        </div>
    );
}

export default Child;