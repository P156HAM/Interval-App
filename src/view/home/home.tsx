import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import './home.css';
import navicon from '../../assets/navicon.svg'
import decrementImg from '../../assets/decrement.svg'
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS styles
import 'daisyui/dist/full.css'; // Import DaisyUI styles
import Menu from '../../compnents/menu/menu';
import ValueSelector from '../../compnents/valueSelector/valueSelector';
import { increment, decrement, changeBreak, changeInterval } from '../../actions/actions';
import { GlobalState } from '../../types/types';

const Home: React.FC = () => {
    

    const dispatch = useDispatch();
    const selectedValuesSelector = createSelector(
        (state: GlobalState) => state.count,
        (state: GlobalState) => state.interval,
        (state: GlobalState) => state.isBreak,
        (state: GlobalState) => state.viewMode,
        (count, interval, isBreak, viewMode) => ({
          count,
          interval,
          isBreak,
          viewMode
        })
      );
      
    const selectedValues = useSelector(selectedValuesSelector);
    const [ isMenuVisible, setIsMenuVisible ] = useState(false);
    const navigate = useNavigate()

    const handleButtonClick = () => {
        setIsMenuVisible(true);
    }

    const decrementCount = () => {
        dispatch(decrement());
    };
    
    const incrementCount = () => {
        dispatch(increment());
    };

    const setIntervalCheckbox = () => {
        dispatch(changeInterval());
    }

    const setBreakCheckbox = () => {
        dispatch(changeBreak());
    }

    const handleStartTimer = () => {
    navigate('/time');
    };

    const hideMenu = () => {
        setIsMenuVisible(false);
    };
    

    return (
        <div className='home-container'>
                {!isMenuVisible && <img className='logo' src={ navicon } alt='logo image'
                onClick={handleButtonClick}></img>}
                {isMenuVisible && <Menu hideMenu= {hideMenu}></Menu>}
                <div className='home-container__buttom'>
                    <div className='home-container__counter'>
                        <img className='count-img' src={decrementImg} alt="" 
                        onClick={decrementCount}/>
                        <h1 className='count-h1'>{selectedValues.count}</h1>
                        <img className='count-img count-img__rotated' src={decrementImg} alt="" 
                        onClick={incrementCount}/>
                    </div>
                    <div className='time-count__text'>
                        <h2>Minutes</h2>
                    </div>
                    <ValueSelector checkboxType='interval' 
                    updateWhenTargetAchieved= {selectedValues.interval} 
                    setFunction={setIntervalCheckbox}
                    />
                    <ValueSelector checkboxType='5minBreak' 
                    updateWhenTargetAchieved= {selectedValues.isBreak} 
                    setFunction={setBreakCheckbox}
                    />
                    <button className="btn btn-wide btn-styled" 
                    onClick={handleStartTimer}>START TIMER</button>
                </div>
        </div>
    )
}

export default Home;