import React from 'react';
import "../stylesheets/Home.css"

const Iframe = ({ source }, { title }) => {

    if (!source) {
        return <div>Loading...</div>;
    }

    const src = source;
    return (
        <div className="home-wrapper">
            <iframe title={title} className="home-iframe" src={src}/>
        </div>
    );
};

export default Iframe;