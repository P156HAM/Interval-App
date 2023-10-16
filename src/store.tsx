import { createStore } from 'redux';
import { GlobalState, TimeValues, Action } from './types/types';

const CLOCK_VIEW_MODES = { ANALOG: 'analog', DIGITAL: 'digital' };

const initialState: GlobalState = {
    count: 0,
    interval: false,
    isBreak: false,
    viewMode: CLOCK_VIEW_MODES.DIGITAL || CLOCK_VIEW_MODES.ANALOG,
    timeValues: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        secondTenths: 0
    },
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SET_INTERVAL = 'SET_INTERVAL';
const SET_BREAK = 'SET_BREAK';
const RESET_TIMER = 'RESET_TIMER';
const SET_VIEW_MODE = 'SET_VIEW_MODE';
const SET_TIME_VALUES = 'SET_TIME_VALUES';

function reducer(state = initialState, action: Action) {
  console.log('Action:', action);
    switch (action.type) {
      case INCREMENT:
        return { ...state, count: state.count + 1 };
      case DECREMENT:
        return { ...state, count: Math.max(0, state.count - 1) };
      case SET_INTERVAL:
        return { ...state, interval: !state.interval };
      case SET_BREAK:
        return { ...state, isBreak: !state.isBreak };
      case SET_VIEW_MODE:
        return { ...state, viewMode: action.payload as string};
      case SET_TIME_VALUES: 
        const newState = { ...state, timeValues: action.payload as TimeValues};
        console.log('New State:', newState);
            return newState;
      case RESET_TIMER:
        return initialState;
      default:
        return state;
    }
}

export const store = createStore(reducer);


export default store;