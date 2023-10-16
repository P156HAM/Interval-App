const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

const changeInterval = () => {
    return {
        type: 'SET_INTERVAL'
    }
}

const changeBreak = () => {
    return {
        type: 'SET_BREAK'
    }
}

const abortTimer = () => {
    return {
        type: 'RESET_TIMER'
    }
}

const checkTimerType = (viewMode: string) => {
    return {
        type: 'SET_VIEW_MODE',
        payload: viewMode
    }
}


export { increment, decrement, changeInterval, changeBreak, abortTimer, checkTimerType };