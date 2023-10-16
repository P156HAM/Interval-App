// LoadingScreen.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoadingScreen.css';

const LoadingScreen: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        // If the user clicks on the LoadingScreen
        navigate('/home')
    };

    return (
        <div className="loading-screen">
            <div className='logo-container' onClick={handleClick}>
                <div className="container">
                    <div className="line"></div>
                    <div className="line line-2"></div>
                    <div className="line line-3"></div>
                    <div className="line line-4"></div>
                </div>
                <div className='logo-text'>
                    <h1>INTERVAL</h1>
                </div>
            </div>
            <div className='text'>
                <h2>For all your timing needs</h2>
            </div>
        </div>
    );
    };

export default LoadingScreen;
