import React from 'react';
import splashImage from '../pexels-richard-wilson-10768025.jpg';

function SplashImage ({ onStart}) {
    return (
        <div className="splash-image-container">
            <h1>React-a-Mole</h1>
            <img src={splashImage} alt='Photo by Richard Wilson: https://www.pexels.com/photo/black-whack-a-mole-hammers-on-arcade-machines-10768025/' className="splash-image" />
            <button className="start-button" onClick={onStart}>Start</button>
        </div>
    )
}

export default SplashImage