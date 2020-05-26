import React from 'react';
import './SiteHeader.css'
import { Link } from 'react-router-dom'

const SiteHeader = () => {

    return (
        <header>
            <h2>WELCOME TO</h2>
            <Link to={"/"}><h1>Keep Me Alive</h1></Link>
        </header>
    )
}

export default SiteHeader;