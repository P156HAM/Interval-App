import React from 'react';
import { useDispatch } from 'react-redux';
import { checkTimerType } from '../../actions/actions';
import nvaiconWhite from '../../assets/naviconWhite.svg'
import './menu.css'

interface MenuProps {
    hideMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ hideMenu }) => {
    const dispatch = useDispatch();

    const handleClickAnalog = () => {
        dispatch(checkTimerType('analog'))

        hideMenu(); 
    }

    const handleClickDigital = () => {
        dispatch(checkTimerType('digital'))

        hideMenu();
    }
    
    return(
        <div className='menu-container'>
            <img className='logo-menu' src={ nvaiconWhite } alt='logo image'/>
            <div className='main-container'>
                <ul className='menu main-container__menu'>
                    <li onClick={handleClickAnalog}><a>ANALOG TIMER</a></li>
                    <li onClick={handleClickDigital}><a>DIGITAL TIMER</a></li>
                    <li><a>VISUAL TIMER</a></li>
                    <li><a>TEXT TIMER</a></li>
                    <li><a>CIRCLES TIMER</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Menu;