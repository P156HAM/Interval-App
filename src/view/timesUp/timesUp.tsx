import React from 'react';
import './timesUp.css';
import alarmIcon from '../../assets/alarmIcon.svg';
import { useNavigate } from 'react-router-dom';

const TimesUpView: React.FC = () => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate('/home');
    }

    return (
        <div className='times-up-view'>
            <div className='times-up-items-container'>
                <img src={alarmIcon} alt="" />
                <h1 className='times-up-items__text'>Times up!</h1>
                <button className="btn btn-wide btn-styled__times-up"
                onClick={handleButtonClick}>SET NEW TIMER</button>
            </div>
        </div>
    )
}

export default TimesUpView;

//