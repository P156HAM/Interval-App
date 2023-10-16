import React from 'react';
import useTimer from 'easytimer-react-hook';
import './break.css';
import pause from '../../assets/pause.svg';
import { useNavigate } from 'react-router-dom';

const BreakView: React.FC = () => {
    const navigate = useNavigate();

    // Set up the timer
    const [timerBreak, isTargetAchieved] = useTimer({
        target: { minutes: 0, seconds: 0 },
        precision: 'seconds',
        countdown: false,
        updateWhenTargetAchieved: true,
    });

    // Start the timer when the component mounts
    React.useEffect(() => {
        timerBreak.start({
            startValues: {
                days: 0,
                hours: 0,
                minutes: 5,
                seconds: 0,
            },
            countdown: true,
            precision: 'seconds',
        });
    }, []);

    // Handle different scenarios when the target is reached
    React.useEffect(() => {
        if (isTargetAchieved) {
            navigate('/time');
        }
    }, [isTargetAchieved]);

    const handleButtonClick = () => {
        navigate('/time');
    }

    return (
        <div className='break-view'>
            <div className='break-items-container'>
                <img src={pause} alt="" />
                <h1 className='break-items__text'>Pause & breath</h1>
                <div className='break-items__timer'>
                {timerBreak.getTimeValues().toString(['minutes', 'seconds'])}
                </div>
                <button className="btn btn-wide btn-styled__times-up"
                onClick={handleButtonClick}>NO PAUSE, GO NOW!</button>
            </div>
        </div>
    )
}

export default BreakView;