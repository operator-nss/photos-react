import spinner from '../../assets/spinner.svg';

import React from 'react';

const Preloader = () => {
    return (
        <div className="preloader">
            <img src={spinner} alt="loading"/>
        </div>
    );
};

export default Preloader;