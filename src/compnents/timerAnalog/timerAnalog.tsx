import { useNavigate } from 'react-router-dom';
import minutesImg from '../../assets/minutes.svg'
import useTimer from 'easytimer-react-hook';
import { useDispatch } from 'react-redux';
import { abortTimer } from '../../actions/actions';
import React from 'react';
import './timerAnalog.css'

interface TimerProps {
    count?: string; 
    interval?: boolean;
    isBreak?: boolean
}

const TimerAnalog: React.FC<TimerProps> = ({ count, interval, isBreak }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // Function to handle timer abortion
    const handelAbortTimer = () => {
        dispatch(abortTimer());
        navigate('/home')
    }

    // Get the count value or default to '0'
    const countValue = count || '0';
    const minutes = parseInt(countValue, 10) || 0;

    // Set up the timer
    const [timer, isTargetAchieved] = useTimer({
        target: { minutes: 0, seconds: 0 },
        precision: 'seconds',
        countdown: false,
        updateWhenTargetAchieved: true,
    });

    // Get the current time values
    const timeValues = timer.getTimeValues();
    const minuteRotation = (360 / 60) * timeValues.minutes;
    const secondRotation = (360 / 60) * timeValues.seconds;

    // Start the timer when the component mounts
    React.useEffect(() => {
          console.log('Timer starting...');
          timer.start({
            startValues: {
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0,
            },
            target: {
              days: 0,
              hours: 0,
              minutes: minutes,
              seconds: 0,
            },
            countdown: false,
            precision: 'seconds',
          });
      }, []);

    // Handle different scenarios when the target is reached
    React.useEffect(() => {
        if (isTargetAchieved && interval && !isBreak) {
          console.log('Timer reached 0, restarting...');
          timer.start({
            startValues: {
              days: 0,
              hours: 0,
              minutes: 0,
              seconds: 0,
            },
            target: {
              days: 0,
              hours: 0,
              minutes: minutes,
              seconds: 0,
            },
            countdown: false,
            precision: 'seconds',
          });
        } else if (isTargetAchieved && !interval) {
            console.log('Timer reached 0, aborting...');
            navigate('/timesup');
        } else if (isTargetAchieved && interval && isBreak) {
            console.log('Timer reached 0, starting break...');
            navigate('/break');
        }
      }, [isTargetAchieved, interval, minutes, timer, isBreak]);

    // Render the analog timer component
    return(
        <div className='timer-container-analog'>

                <div className='timer-img-container'>
                    <img className='timer-img' src={minutesImg} alt="Analog timer" />
                    <div className='point'></div>
                    <div className='minute-handle'
                    style={{ transform: `translateX(-50%) rotate(${minuteRotation}deg)` }}></div>
                    <div className='second-handle'
                    style={{ transform: `translateX(-50%) rotate(${secondRotation}deg)` }}></div>
                </div>

            <div className='bottom'>
            <button className='btn btn-wide btn-styled'
            onClick={handelAbortTimer}>ABORT TIMER</button>
            </div>
        </div>
    )
}

export default TimerAnalog; 