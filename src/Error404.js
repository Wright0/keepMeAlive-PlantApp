import React from 'react';
import { Link, useHistory } from 'react-router-dom'

function Error404() {

    const history = useHistory();
    
    return (
      <>
        <h1>Error - 404</h1>
        <p>The page you're looking for cannot be found.</p>
        <button onClick={() => history.goBack()}>Go back</button> | <Link to="/"><button>Go Home</button></Link>
      </>
    );
}

export default Error404;

