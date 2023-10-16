import React, { useState } from 'react';
import navicon from '../../assets/navicon.svg'
import Menu from '../../compnents/menu/menu'
import './time.css'
import TimerContainer from '../../compnents/timerContainer/timerContainer';



const Time: React.FC = () => {

    const [ isMenuVisible, setIsMenuVisible ] = useState(false);

    const handleButtonClick = () => {
        setIsMenuVisible(true);
    }
    
    const hideMenu = () => {
        setIsMenuVisible(false);
    };

    return(
        <div className='home-container'>
            {!isMenuVisible && <img className='logo' src={ navicon } alt='logo image'
            onClick={handleButtonClick}></img>}
            {isMenuVisible && <Menu hideMenu={hideMenu}></Menu>}
            <TimerContainer /> 
        </div>

    )
}

export default Time;