import React from 'react';
import { createSelector } from 'reselect';
import { useSelector } from 'react-redux';
import TimerAnalog from '../timerAnalog/timerAnalog';
import TimerDigital from '../timerDigital/timerDigital';
import { GlobalState } from '../../types/types';
import './timerContainer.css';

const TimerContainer: React.FC = () => {

  // Select the values from the state using createSelector to skip unnecessary re-renders
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

    return (
      <div className='timer-container'>
        <div style={{ display: selectedValues.viewMode === 'analog' ? 'flex' : 'none' }}>
          <TimerAnalog
            count={selectedValues.count?.toString()}
            interval={selectedValues.interval}
            isBreak={selectedValues.isBreak}
          />
        </div>
        <div style={{ display: selectedValues.viewMode === 'digital' ? 'flex' : 'none' }}>
          <TimerDigital
            count={selectedValues.count?.toString()}
            interval={selectedValues.interval}
            isBreak={selectedValues.isBreak}
          />
        </div>
      </div>
    );
};

export default TimerContainer;
